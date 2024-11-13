"use server";

import { verifySession } from "@/_lib/session";
import { AllTransactions } from "@/utils/types/types";
import { cache } from "react";

export const getTransactionStatistics = cache(async (id: number) => {
  try {
    //verify user session to get user data
    const session = await verifySession("session");

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/transaction/statistiques?company=${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${session.token}`,
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

export const getAllTransactions = async () => {
  try {
    //verify user session to get user data
    const session = await verifySession("session");

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/transactions`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${session.token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("error fetching all transactions");
    }

    //parse the response to json format
    const data = (await response.json()) as AllTransactions;

    return data;
  } catch (error) {
    console.log("cannot fetch all transactions", error);
  }
};
