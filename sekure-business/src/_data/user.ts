"use server";

import { verifySession } from "@/_lib/session";
import { AllUsers, User } from "@/utils/types/types";
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

export const getAllUsers = cache(async () => {
  try {
    const session = await verifySession("session");

    const response = await fetch(`${process.env.BACKEND_API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${session?.token}`,
      },
    });

    if (!response.ok) {
      throw new Error("failed to fetch users");
    }

    const users = (await response.json()) as AllUsers;

    return users;
  } catch (error) {
    throw new Error("failed to fetch users");
  }
});

export interface IUpdateUser {
  first_name: string;
  last_name: string;
  email: string;
  active: boolean;
  phone: string;
  image: string;
}

export const updateUser = async (
  id_user: number,
  updated_by: number,
  data: IUpdateUser
) => {
  try {
    const session = await verifySession("session");

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/users/${id_user}?updated_by=${updated_by}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${session?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      }
    );

    if (!response.ok) {
      throw new Error("failed update the user information");
    }

    const user = await response.json();
    return user;
  } catch (error) {
    throw new Error("failed to update the user information");
  }
};
