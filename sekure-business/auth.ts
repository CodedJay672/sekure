import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod";
import { signinSchema } from "@/validation";
import { NextResponse } from "next/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          const parsedCredentials = signinSchema.safeParse(credentials);

          if (!parsedCredentials.success) {
            return {
              errors: parsedCredentials.error.flatten().fieldErrors,
            };
          }

          user = await fetch(
            "http://sekurebusinessapi.sobaprobtp.com/api/connexion",
            {
              method: "POST",
              body: JSON.stringify(parsedCredentials.data),
              headers: { "Content-Type": "multipart/form-data" },
            }
          );

          if (!user) {
            throw new Error("user not found");
          }

          return user.json();
        } catch (error) {
          if (error instanceof ZodError) {
            return null;
          }
        }
      },
    }),
  ],
  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
      const isLoggedIn = !!auth?.user;
      const pathname = nextUrl.pathname;

      if (pathname.startsWith("/signin") && isLoggedIn) {
        return NextResponse.redirect(new URL(`${pathname}/get-otp`, nextUrl));
      }

      return !!auth;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
