"use server";

import { verifySession } from "@/_lib/session";
import { CardsResponse, CardStats } from "@/utils/types/types";

export const getCards = async () => {
  try {
    //verify session
    const session = await verifySession("session");

    // fetch list of cards
    const response = await fetch(`${process.env.BACKEND_API_URL}/cards`, {
      headers: { Authorization: `Bearer ${session?.token}` },
    });

    if (!response.ok) {
      throw new Error("failed to fetch cards");
    }

    const data = (await response.json()) as CardsResponse<any>;
    return data;
  } catch (error) {
    throw new Error("faile to fetch cards" + error);
  }
};

export const getCardStats = async (id: number) => {
  try {
    //verify session
    const session = await verifySession("session");

    // fetch card stats
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/card/statistiques?company=${id}`,
      { headers: { Authorization: `Bearer ${session?.token}` } }
    );

    if (!response.ok) {
      throw new Error("error fetching card stats");
    }

    const data = (await response.json()) as CardStats;

    return data;
  } catch (error) {
    throw new Error("failed to fetch card stats" + error);
  }
};

export const createCard = async ({
  id,
  customer_id,
  version,
}: {
  id: number;
  customer_id: number;
  version: string;
}) => {
  try {
    const session = await verifySession("session");

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/cards?created_by=${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.token}`,
        },
        body: JSON.stringify({ customer_id, brand: version }),
      }
    );

    if (!response.ok) {
      throw new Error("error creating card");
    }

    const data = await response.json();
  } catch (error) {
    console.log("error creating card" + error);
  }
};
