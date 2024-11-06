"use server";

import { verifySession } from "@/_lib/session";
import { signupSchema } from "@/_validation";
import { cache } from "react";

export const getUser = cache(async (id: number) => {
  try {
    //verify user session to get user data
    const session = await verifySession("session");

    //fetch user data from the backend
    const response = await fetch(`${process.env.BACKEND_API_URL}/users/${id}`, {
      headers: {
        Athorization: `Bearer ${session?.token}`,
      },
    });

    if (!response.ok) {
      throw new Error("failed to fetch user");
    }

    //parse the response to json format
    const user = await response.json();

    return user;
  } catch (error) {
    console.log("error fetching user", error);
  }
});

export const createUserAccount = async (data: any) => {
  try {
    //verify user information
    const parsedData = signupSchema.safeParse(data);

    if (!parsedData.success) {
      throw new Error("invalid data");
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedData),
    });

    if (!res.ok) {
      throw new Error("failed to create user");
    }

    const userData = await res.json();

    // return userData
    return userData;
  } catch (error) {
    throw new Error("error while fetching user");
  }
};
