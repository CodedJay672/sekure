"use server";

import { OTPSchema, signinSchema } from "@/_validation";
import { createSession, deleteSession } from "./session";

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

    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const signIn = async ({ otp }: { otp: string }) => {
  try {
    //validate the otp
    const parsedOTP = OTPSchema.safeParse({ otp });

    if (!parsedOTP.success) {
      return {
        errrors: parsedOTP.error.flatten().fieldErrors,
      };
    }

    const response = await fetch(`${process.env.BACKEND_API_URL}/otp/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: 3, otp }),
    });

    // if (!response.ok) {
    //   throw new Error("failed to fetch user data");
    // }

    const data = await response.json();
    console.log(data.token);

    //authenticate the user to get the user token
    await createSession(data.token);
  } catch (error) {
    throw new Error("Failed to authenticate the user");
  }
};

export const signOut = async () => {
  await deleteSession();
};
