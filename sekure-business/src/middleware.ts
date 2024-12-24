import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./_lib/session";

//check if route is protected
const protectedRoute = "/";
const publicRoute = ["/signin", "/signin/get-otp", "/signup"];

export default async function middleware(req: NextRequest) {
  const currentPath = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoute.includes(currentPath);
  const isPublicRoute = publicRoute.includes(currentPath);

  //check if user is authenticated
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.value) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }

  if (isPublicRoute && session?.value) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
