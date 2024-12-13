"use server";

import { verifySession } from "@/_lib/session";
import { businessNameSchema } from "@/_validation";

export const getAllCompany = async () => {
  try {
    const session = await verifySession("session");
    const response = await fetch(`${process.env.BACKEND_API_URL}/companies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.value?.token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      return error;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching company: ${error}`);
  }
};

export const getCompanyById = async (id: number) => {
  try {
    const session = await verifySession("session");

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/companies/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.value?.token}`,
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return error;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching company: ${error}`);
  }
};

export interface ICompany {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const createCompany = async (company: ICompany) => {
  try {
    const session = await verifySession("session");

    const response = await fetch(`${process.env.BACKEND_API_URL}/companies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.value?.token}`,
      },
      body: JSON.stringify(company),
    });

    if (!response.ok) {
      const error = await response.json();
      return error;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error creating company: ${error}`);
  }
};

export interface ICompanyUpdate {
  name: string;
  email: string;
  phone: string;
  address: string;
  active: boolean;
}

export const updateCompany = async (
  id: number,
  updated_by: number,
  company: ICompanyUpdate
) => {
  try {
    const session = await verifySession("session");

    const validatedInput = businessNameSchema.safeParse(company);

    if (!validatedInput.success) {
      return {
        error: validatedInput.error.flatten().fieldErrors,
      };
    }

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/companies/${id}?updated_by=${updated_by}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.value?.token}`,
        },
        body: JSON.stringify(company),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw error;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error updating company: ${error}`);
  }
};
