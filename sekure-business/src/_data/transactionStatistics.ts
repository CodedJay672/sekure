"use server";

import { verifySession } from "@/_lib/session";
import { cache } from "react";

export const getTransactionStatistics = cache(async () => {
  try {
    //verify user session to get user data
    const session = await verifySession("session");

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/transaction/statistiques`,
      {
        headers: {
          Athorization: `Bearer ${session?.token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("error fetching transaction statistics");
    }

    //parse the response to json format
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("cannot fetch transaction statistics", error);
  }
});
