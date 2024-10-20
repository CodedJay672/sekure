import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { decrypt } from "./_lib/session";

export default async function middleware(req: NextRequest) {
  //check if route is protected
  const protectedRoute = "/";
  const currentPath = req.nextUrl.pathname;
  const isProotectedRoute = protectedRoute.includes(currentPath);

  if (isProotectedRoute) {
    //check if user is authenticated
    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);

    //if user is not authenticated, redirect to login page
    if (!session?.userId) {
      return NextResponse.redirect(new URL("/signin", req.nextUrl));
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
