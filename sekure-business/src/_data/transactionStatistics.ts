"use server";

import { verifySession } from "@/_lib/session";
import { AllTransactions, Transactions } from "@/utils/types/types";
import { cache } from "react";

export const getTransactionStatistics = cache(
  async (id: number): Promise<Transactions> => {
    console.log(id);
    try {
      //verify user session to get user data
      const session = await verifySession("session");

      const response = await fetch(
        `${process.env.BACKEND_API_URL}/transaction/statistiques?company=${id}`,
        {
          headers: {
            Authorization: `Bearer ${session.value?.token}`,
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
      throw new Error(`${error}`);
    }
  }
);

export const getAllTransactions = async ({
  company_id,
  page,
  query,
}: {
  company_id: number;
  page?: number;
  query?: string;
}) => {
  try {
    //verify user session to get user data
    const session = await verifySession("session");

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/transactions?company=${company_id}`,
      {
        headers: {
          Authorization: `Bearer ${session.value?.token}`,
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
