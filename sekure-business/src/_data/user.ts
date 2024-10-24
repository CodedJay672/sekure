"use server";

import { verifySession } from "@/_lib/session";
import { cache } from "react";

export const getUser = cache(async () => {
  try {
    //verify user session to get user data
    const session = await verifySession();

    const response = await fetch(`${process.env.BACKEND_API_URL}/users/`, {
      headers: {
        Athorization: `Bearer ${session?.token}`,
      },
    });

    //parse the response to json format
    const data = await response.json();

    if (!data.ok) {
      throw new Error("Failed to fetch user data");
    }

    const user = await data.json();
    return user;
  } catch (error) {
    console.log("error fetching user", error);
  }
});
