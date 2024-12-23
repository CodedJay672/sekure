"use server";

import { verifySession } from "@/_lib/session";
import { CardsResponse, CardStats } from "@/utils/types/types";

export interface ICustomer {
  id: number;
  id_map: string;
  first_name: string;
  last_name: string;
  email: string;
  balance: number;
  country: string;
  tier: number;
  id_company: number;
  created_by: number;
  status: string;
  updated_by: number;
  street: string;
  city: string;
  state: string;
  postal_code: string;
  phone_country_code: string;
  phone_number: string;
  identification_number: string;
  type: string;
  image: string;
  photo: string;
  number: string;
  dob: string;
  active: number;
  created_at: string;
  updated_at: string;
}

export type TCustomerCard = {
  id: number;
  owner: number;
  reference: string;
  id_card_map: string;
  name: string;
  card_number: number;
  masked_pan: string;
  expiry: string;
  expiry_date: string;
  cvv: number;
  status: string;
  type: string;
  issuer: number;
  currency: string;
  balance: number;
  balance_updated_at: string;
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  created_by: number;
  company: number;
  active: number;
  created_at: string;
  updated_at: string;
  customer: ICustomer;
};

export const getCards = async ({
  company_id,
  page,
  query,
}: {
  company_id: number;
  page: number;
  query?: string;
}): Promise<CardsResponse<TCustomerCard>> => {
  let response: Response;
  try {
    //verify session
    const session = await verifySession("session");

    // fetch list of cards
    response = await fetch(
      `${process.env.BACKEND_API_URL}/cards?company=${company_id}&page=${page}`,
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

export interface ICreatedCard {
  status: boolean;
  message?: string;
  error?: {
    [key: string]: string[];
  };
  card?: {
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

export const getCardDetails = async (id: number) => {
  let response: Response;

  try {
    const session = await verifySession("session");

    response = await fetch(`${process.env.BACKEND_API_URL}/cards/${id}`, {
      headers: {
        Authorization: `Bearer ${session?.value?.token}`,
        accept: "application/json",
      },
    });
  } catch (error) {
    throw new Error("Error: " + error);
  }

  const data = await response.json();
  return data;
};
