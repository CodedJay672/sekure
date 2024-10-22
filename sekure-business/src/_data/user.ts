"use server";

import { verifySession } from "@/_lib/session";
import { cache } from "react";

export const getUser = cache(async () => {
  try {
    //verify user session to get user data
    const session = await verifySession();
    const data = await fetch(
      `${process.env.BACKEND_API_URL}/users/${session.userId}`
    );

    if (!data.ok) {
      throw new Error("Failed to fetch user data");
    }

    const user = await data.json();
    return user;
  } catch (error) {
    console.log("error fetching user", error);
  }
});
