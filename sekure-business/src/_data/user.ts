"use server";

import { AuthUser } from "@/_lib/features/users/connexionSlice";
import { verifySession, getCookie } from "@/_lib/session";
import { cache } from "react";

export const getUser = cache(async () => {
  try {
    //verify user session to get user data
    const session = await verifySession("session");

    //get user data from the session
    const user = await getCookie("user");

    const parsedUser = JSON.parse(user);

    //get the user id
    const { id } = parsedUser.user;

    //fetch user data from the backend
    const response = await fetch(`${process.env.BACKEND_API_URL}/users/${id}`, {
      headers: {
        Athorization: `Bearer ${session?.token}`,
      },
    });

    if (!response.ok) {
      throw new Error("error fetching user");
    }

    //parse the response to json format
    const data: AuthUser = await response.json();

    return data;
  } catch (error) {
    console.log("error fetching user", error);
  }
});
