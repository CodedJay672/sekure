"use server";

import { OTPSchema, signinSchema } from "@/_validation";
import { createSession, deleteSession, verifySession } from "./session";
import { redirect } from "next/navigation";

export const authenticateUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  // 1. validate fields before authentication
  const parsedDetails = signinSchema.safeParse({ email, password });

  if (!parsedDetails.success) {
    return {
      errors: parsedDetails.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await fetch(`${process.env.BACKEND_API_URL}/connexion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Error while fetching session data");
    }

    const data = await response.json();
    await createSession(data?.user?.id);
  } catch (error) {
    console.log("error", error);
  }

  redirect("/signin/get-otp");
};

export const verifyEmail = async ({ otp }: { otp: string }) => {
  try {
    //verify otp field before sending to server
    const parsedOTP = OTPSchema.safeParse({ otp });

    if (!parsedOTP.success) {
      return {
        errors: parsedOTP.error.flatten().fieldErrors,
      };
    }

    //verify session to get user id
    const session = await verifySession();

    const response = await fetch(`${process.env.BACKEND_API_URL}/otp/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: session?.userId, otp }),
    });

    const data = await response.json();

    //register the token into the localstorage
    if (!data.success) {
      return null;
    }

    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const signOut = async () => {
  await deleteSession();
};
