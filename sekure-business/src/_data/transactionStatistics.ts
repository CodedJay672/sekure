"use server";

import { verifySession } from "@/_lib/session";
import { TransactionByIDResponse } from "@/components/Table/TransactionsTable/validation";
import { AllTransactions, Transactions } from "@/utils/types/types";
import { cache } from "react";

export const createTransaction = async ({
  type,
  id_card,
  amount,
}: {
  type: string;
  id_card: number;
  amount: number;
}) => {
  let response: Response;

  try {
    // verify logged in user
    const session = await verifySession("session");

    response = await fetch(`${process.env.BACKEND_API_URL}/transaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.value?.token}`,
        accept: "application/json",
      },

      body: JSON.stringify({ type, id_card, amount }),
    });
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }

  const data = response.json();
  return data;
};

export const getTransactionStatistics = cache(
  async (id: number): Promise<Transactions> => {
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
      `${process.env.BACKEND_API_URL}/transactions?company=${company_id}&page=${page}`,
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

export const getTransactionByID = async (
  transaction_id: number
): Promise<TransactionByIDResponse> => {
  let response: Response;

  try {
    // verify logged in user
    const session = await verifySession("session");

    response = await fetch(
      `${process.env.BACKEND_API_URL}/transactions/${transaction_id}`,
      {
        headers: {
          Authorization: `Bearer ${session.value?.token}`,
          accept: "application/json",
        },
      }
    );
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }

  const data = response.json();
  return data;
};

export const updateTransactionByID = async (transaction_id: number) => {
  let response: Response;

  try {
    const session = await verifySession("session");

    response = await fetch(
      `${process.env.BACKEND_API_URL}/transactions/${transaction_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session.value?.token,
          accept: "application/json",
        },
        body: JSON.stringify({ transaction_id }),
      }
    );
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }

  const data = response.json();
  return data;
};

export const deleteTransactionByID = async (transaction_id: number) => {
  let response: Response;

  try {
    const session = await verifySession("session");

    response = await fetch(
      `${process.env.BACKEND_API_URL}/transaction/${transaction_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session.value?.token,
          accept: "application/json",
        },
      }
    );
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }

  const data = response.json();
  return data;
};
