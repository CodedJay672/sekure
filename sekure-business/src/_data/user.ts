"use server";

import { verifySession } from "@/_lib/session";
import { User } from "@/utils/types/types";
import { cache } from "react";

interface IUserResponse {
  success: boolean;
  message: string;
  user: User[];
}

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
    const user = (await response.json()) as IUserResponse;

    return user;
  } catch (error) {
    console.log("error fetching user", error);
  }
});
