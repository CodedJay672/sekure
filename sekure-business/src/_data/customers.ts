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
