"use server";

import { verifySession } from "@/_lib/session";
import { CardsResponse, CardStats } from "@/utils/types/types";

export const getCards = async ({
  company_id,
  page,
  per_page,
}: {
  company_id: number;
  page: number;
  per_page: number;
}): Promise<CardsResponse<any>> => {
  let response: Response;
  try {
    //verify session
    const session = await verifySession("session");

    // fetch list of cards
    response = await fetch(
      `${process.env.BACKEND_API_URL}/cards?company=${company_id}&page=${page}&perPage=${per_page}`,
      {
        headers: { Authorization: `Bearer ${session?.value?.token}` },
      }
    );
  } catch (error) {
    throw new Error("faile to fetch cards" + error);
  }

  const data = (await response.json()) as CardsResponse<any>;
  return data;
};

export const getCardStats = async (id: number): Promise<CardStats> => {
  let response: Response;
  try {
    //verify session
    const session = await verifySession("session");

    // fetch card stats
    response = await fetch(
      `${process.env.BACKEND_API_URL}/card/statistiques?company=${id}`,
      {
        headers: {
          Authorization: `Bearer ${session?.value?.token}`,
          accept: "application/json",
        },
      }
    );
  } catch (error) {
    throw new Error("failed to fetch card stats" + error);
  }

  const data = (await response.json()) as CardStats;
  return data;
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
          Authorization: `Bearer ${session?.value?.token}`,
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
