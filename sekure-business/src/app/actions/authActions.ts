"use server";

import { signIn, signOut } from "../../auth";
import { AuthError } from "next-auth";

export async function handleSignIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/signin/get-otp",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          console.log("invalid credentials, please try again  ");
          break;
        }
        default: {
          console.error("An unexpected error occurred: ", error);
          break;
        }
      }
    }

    throw error;
  }
}

export async function handleSignOut() {
  await signOut();
}
