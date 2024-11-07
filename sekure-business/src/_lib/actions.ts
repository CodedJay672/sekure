"use server";

import { OTPSchema, signinSchema } from "@/_validation";
import { createSession, deleteSession, getCookie } from "./session";
import { NewUser, NewUserResponse } from "@/utils/types/types";

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

export const createUserAccount = async (data: NewUser) => {
  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, id_role: 2 }),
    });

    if (!res.ok) {
      throw new Error("Network failed" + res.statusText);
    }

    const userData = await res.json();

    return userData;
  } catch (error) {
    throw new Error("failed to fetch");
  }
};

export const signIn = async ({ otp }: { otp: string }) => {
  try {
    //validate the otp
    const parsedOTP = OTPSchema.safeParse({ otp });

    //get the user cookie and verify the user_id
    const user = await getCookie("user");

    if (!user) {
      throw new Error();
    }

    const parsedUser = JSON.parse(user);

    //destruct the user_id from the user object
    const { id } = parsedUser.value;

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

    const data = await response.json();

    //authenticate the user to get the user token
    await createSession(data?.token);
  } catch (error) {
    throw new Error("Failed to authenticate the user");
  }
};

export const signOut = async () => {
  await deleteSession("user");
  await deleteSession("session");
};
