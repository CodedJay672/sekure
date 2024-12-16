"use server";

import { OTPSchema } from "@/_validation";
import { signInDataType, signinSchema } from "@/_validation/";
import { signInReturnType } from "@/_validation/SignIn";
import { createSession, deleteSession } from "./session";
import { OTPVerify } from "@/utils/types/types";
import { NewUser, signupSchema } from "@/_validation/SignUp";

export const authenticateUser = async (
  values: signInDataType
): Promise<Partial<signInReturnType>> => {
  //get the email and password from the form
  const { email, password } = values;
  let response: Response;

  //validate the email and password
  const parsedDetails = signinSchema.safeParse({ email, password });
  if (!parsedDetails.success) {
    return {
      errors: parsedDetails.error.flatten().fieldErrors,
    };
  }

  try {
    response = await fetch(`${process.env.BACKEND_API_URL}/connexion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  } catch (error) {
    throw new Error("NetworkError: Check your internet connection");
  }

  const data = await response.json();
  return data as signInReturnType;
};

export const createUserAccount = async (
  data: NewUser
): Promise<signInReturnType> => {
  try {
    const validateData = signupSchema.safeParse(data);
    if (!validateData.success) {
      throw new Error("failed to validate data");
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ ...data, id_role: 2 }),
    });

    const userData = (await res.json()) as signInReturnType;
    return userData;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const signIn = async ({
  id,
  otp,
}: {
  id: number;
  otp: string;
}): Promise<OTPVerify> => {
  try {
    //validate the otp
    const parsedOTP = OTPSchema.safeParse({ otp });

    if (!parsedOTP.success) {
      return {
        error: parsedOTP.error.flatten().fieldErrors,
      };
    }

    const response = await fetch(`${process.env.BACKEND_API_URL}/otp/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: id, otp }),
    });

    const data = await response.json();
    //authenticate the user to get the user token
    await createSession(data?.token as string);
    return data as OTPVerify;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const signOut = async () => {
  await deleteSession("session");
};
