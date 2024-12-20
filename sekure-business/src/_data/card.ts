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

  const data = await response.json();
  return data;
};

interface ICreatedCard {
  status: boolean;
  message: string;
  card: {
    owner: number;
    created_by: number;
    reference: null;
    id_card_map: null;
    name: null;
    card_number: null;
    masked_pan: null;
    expiry: null;
    cvv: null;
    status: null;
    type: null;
    issuer: null;
    currency: null;
    balance: null;
    balance_updated_at: null;
    street: null;
    city: null;
    state: null;
    postal_code: null;
    country: null;
    updated_at: string;
    created_at: string;
    id: 2;
  };
}
export const createCustomerCard = async ({
  created_by,
  email,
  brand,
}: {
  created_by: number;
  email: string;
  brand: string;
}): Promise<ICreatedCard> => {
  // declare response object
  let response: Response;
  try {
    // verify session and redirect users if not logged in
    const session = await verifySession("session");

    response = await fetch(
      `${process.env.BACKEND_API_URL}/cards?created_by=${created_by}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.value?.token}`,
          accept: "application/json",
        },
        body: JSON.stringify({ email, brand }),
      }
    );
  } catch (error) {
    throw new Error("error creating card" + error);
  }

  const data = await response.json();
  return data;
};
