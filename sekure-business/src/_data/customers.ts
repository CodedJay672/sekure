"use server";

import { verifySession } from "@/_lib/session";

export const getCustomers = async () => {
  try {
    const session = await verifySession("session");

    const response = await fetch(`${process.env.BACKEND_API_URL}/customers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.value?.token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      return error;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`error: ${error}`);
  }
};

// create customer action
export interface IValues {
  first_name: string;
  last_name: string;
  country: string;
  email: string;
}

type TCreateCustomerResponse = {
  success: boolean;
  message: string;
  error: string;
  customer: {
    first_name: string;
    last_name: string;
    created_by: string;
    id_company: string;
    email: string;
    country: string;
    tier: null;
    status: null;
    id_map: null;
    updated_at: string;
    created_at: string;
    id: number;
  };
};
export const createCustomer = async (
  company_id: number,
  created_by: number,
  values: IValues
): Promise<Partial<TCreateCustomerResponse>> => {
  let response: Response;

  try {
    // ensure user is logged in
    const session = await verifySession("session");

    response = await fetch(
      `${process.env.BACKEND_API_URL}/customers?company=${company_id}&created_by=${created_by}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.value?.token}`,
          accept: "application/json",
        },
        body: JSON.stringify({ ...values }),
      }
    );
  } catch (error) {
    throw new Error(`error: ${error}`);
  }

  const data = await response.json();
  return data as Partial<TCreateCustomerResponse>;
};

// get all customers
interface IGetCustomerResponse {
  success: boolean;
  data: {
    current_page: number;
    data: {
      id: number;
      id_map: null;
      first_name: string;
      last_name: string;
      email: string;
      balance: number;
      country: string;
      tier: string;
      id_company: number;
      created_by: number;
      status: string;
      updated_by: string;
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
      active: 0;
      created_at: string;
      updated_at: string;
      cards: [];
    }[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
      url: null;
      label: "&laquo; Previous";
      active: false;
    }[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
  };
}

export const getAllCustomers = async ({
  company_id,
  page,
}: {
  company_id: number;
  page: number;
}): Promise<Partial<IGetCustomerResponse>> => {
  let response: Response;

  try {
    // ensure user is logged in
    const session = await verifySession("session");

    response = await fetch(
      `${process.env.BACKEND_API_URL}/customers?company=${company_id}&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.value?.token}`,
          accept: "application/json",
        },
      }
    );
  } catch (error) {
    throw new Error(`error: ${error}`);
  }

  const data = await response.json();
  return data;
};

export const getCustomersBySearch = async ({
  company_id,
  page,
  query,
}: {
  company_id: number;
  page: number;
  query: string | null;
}): Promise<Partial<IGetCustomerResponse>> => {
  let response: Response;

  try {
    // ensure user is logged in
    const session = await verifySession("session");

    response = await fetch(
      `${process.env.BACKEND_API_URL}/customers?company=${company_id}&page=${page}&search_query=${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.value?.token}`,
          accept: "application/json",
        },
      }
    );
  } catch (error) {
    throw new Error(`error: ${error}`);
  }

  const data = await response.json();
  return data;
};
