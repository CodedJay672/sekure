"use server";

import { verifySession } from "@/_lib/session";
import { RolesResponse } from "@/utils/types/types";

export const getRoles = async () => {
  try {
    //verify session
    const session = await verifySession("session");

    // fetch list of roles
    const response = await fetch(`${process.env.BACKEND_API_URL}/roles`, {
      headers: {
        Authorization: `Bearer ${session?.value?.token}`,
      },
    });

    if (!response.ok) {
      throw new Error("failed to fetch roles");
    }

    const data = (await response.json()) as RolesResponse;

    // return roles data
    return data;
  } catch (error) {
    throw new Error("Fetching failed" + error);
  }
};
