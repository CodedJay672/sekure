"use server";

import { OTPSchema, signinSchema } from "@/_validation";
import { createSession, deleteSession } from "./session";
import { APIErrors, ApiResponse } from "@/utils/types/types";
import { NewUser } from "@/_validation/SignUp";

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

export const createUserAccount = async (
  data: NewUser
): Promise<ApiResponse | APIErrors> => {
  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, id_role: 2 }),
    });

    if (res.status === 422) {
      const userData = (await res.json()) as APIErrors;
      return userData;
    }

    const userData = (await res.json()) as ApiResponse;
    return userData;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const signIn = async ({ id, otp }: { id: number; otp: string }) => {
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
      body: JSON.stringify({ user_id: id, otp }),
    });

    // if (!response.ok) {
    //   throw new Error(`${response}`);
    // }

    const data = await response.json();

    //authenticate the user to get the user token
    await createSession(data?.token);
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const signOut = async () => {
  await deleteSession("user");
  await deleteSession("session");
};
