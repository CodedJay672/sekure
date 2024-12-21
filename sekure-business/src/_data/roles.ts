"use server";

import { verifySession } from "@/_lib/session";
import { RolesResponse } from "@/utils/types/types";

export const getRoles = async () => {
  try {
    //verify session
    const session = await verifySession("session");

    // fetch list of roles
    const response = await fetch(`${process.env.BACKEND_API_URL}/roles`, {
      headers: {
        Authorization: `Bearer ${session?.value?.token}`,
      },
    });

    if (!response.ok) {
      throw new Error("failed to fetch roles");
    }

    const data = (await response.json()) as RolesResponse;

    // return roles data
    return data;
  } catch (error) {
    throw new Error("Fetching failed" + error);
  }
};

export interface ICreateRoleResponse {
  success: boolean;
  message: string;
  role: {
    name: string;
    updated_at: string;
    created_at: string;
    id: number;
  };
}

export const createRole = async (
  role: string
): Promise<ICreateRoleResponse> => {
  try {
    // verify login session
    const session = await verifySession("session");

    // create role
    const response = await fetch(`${process.env.BACKEND_API_URL}/roles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.value?.token}`,
        accept: "application/json",
      },
      body: JSON.stringify({ name: role }),
    });

    if (!response.ok) {
      throw new Error("Failed to create role");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to create role" + error);
  }
};

export const getRoleByID = async (id: number) => {
  let response: Response;

  try {
    //verify session
    const session = await verifySession("session");

    // fetch role by id
    response = await fetch(`${process.env.BACKEND_API_URL}/roles/${id}`, {
      headers: {
        Authorization: `Bearer ${session?.value?.token}`,
        accept: "application/json",
      },
    });
  } catch (error) {
    throw new Error("Error" + error);
  }

  const data = await response.json();
  return data;
};

export const updateRoleByID = async ({
  id_role,
  updated_by,
  value,
}: {
  id_role: number;
  updated_by: number;
  value: { name: string; active: boolean };
}) => {
  let response: Response;

  try {
    const session = await verifySession("session");

    response = await fetch(
      `${process.env.BACKEND_API_URL}/roles/${id_role}?updated_by=${updated_by}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.value?.token}`,
          accept: "application/json",
        },
        body: JSON.stringify(value),
      }
    );
  } catch (error) {
    throw new Error("Error" + error);
  }

  const data = await response.json();
  return data;
};

export const deleteRoleByID = async (id: number) => {
  let response: Response;

  try {
    const session = await verifySession("session");

    response = await fetch(`${process.env.BACKEND_API_URL}/roles/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${session?.value?.token}`,
        accept: "application/json",
      },
    });
  } catch (error) {
    throw new Error("Error" + error);
  }

  const data = await response.json();
  return data;
};

export const createRoleAffectation = async ({
  id_role,
  id_user,
}: {
  id_role: number;
  id_user: number;
}) => {
  let response: Response;

  try {
    const session = await verifySession("session");

    response = await fetch(
      `${process.env.BACKEND_API_URL}/roles-affectations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.value?.token}`,
          accept: "application/json",
        },
        body: JSON.stringify({ id_role, id_user }),
      }
    );
  } catch (error) {
    throw new Error("Error" + error);
  }

  const data = await response.json();
  return data;
};
