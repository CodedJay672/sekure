"use server";

import { verifySession } from "@/_lib/session";
import {
  adressDataType,
  informationDataType,
  InformationSchema,
  signUpDataType,
  signupSchema,
} from "@/_validation/SignUp";
import { IError, signUpResponse } from "@/utils/types/SignupTypes";
import { AllUsers, User } from "@/utils/types/types";
import { cache } from "react";

interface IUserResponse {
  success: boolean;
  message: string;
  user: User[];
}

export const getUser = cache(async (id: number) => {
  try {
    //verify user session to get user data
    const session = await verifySession("session");

    //fetch user data from the backend
    const response = await fetch(`${process.env.BACKEND_API_URL}/users/${id}`, {
      headers: {
        Athorization: `Bearer ${session?.value?.token}`,
      },
    });

    if (!response.ok) {
      throw new Error("failed to fetch user");
    }

    //parse the response to json format
    const user = (await response.json()) as IUserResponse;

    return user;
  } catch (error) {
    throw new Error(`${error}`);
  }
});

export const getAllUsers = cache(async () => {
  try {
    const session = await verifySession("session");

    const response = await fetch(`${process.env.BACKEND_API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${session?.value?.token}`,
      },
    });

    if (!response.ok) {
      throw new Error("failed to fetch users");
    }

    const users = (await response.json()) as AllUsers;

    return users;
  } catch (error) {
    throw new Error("failed to fetch users");
  }
});

export interface IUpdateUser {
  first_name: string;
  last_name: string;
  email: string;
  active: boolean;
  phone: string;
  image: string;
}

export const updateUser = async (
  id_user: number,
  updated_by: number,
  data: IUpdateUser
) => {
  try {
    const session = await verifySession("session");

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/users/${id_user}?updated_by=${updated_by}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${session?.value?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      }
    );

    if (!response.ok) {
      throw new Error("failed update the user information");
    }

    const user = await response.json();
    return user;
  } catch (error) {
    throw new Error("failed to update the user information");
  }
};

export const createUserCompany = async (
  data: signUpDataType
): Promise<IError | Partial<signUpResponse>> => {
  try {
    const validateData = signupSchema.safeParse(data);
    if (!validateData.success) {
      return {
        "error : ": validateData.error.flatten().fieldErrors,
      };
    }

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/create_user_company`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      const response = await res.json();
      return response as IError;
    }

    const userData = (await res.json()) as Partial<signUpResponse>;
    return userData;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const signupInformation = async (
  data: informationDataType,
  user_id: number,
  company_id: number
): Promise<IError | Partial<signUpResponse>> => {
  try {
    const validateData = InformationSchema.safeParse(data);
    if (!validateData.success) {
      return {
        "error : ": validateData.error.flatten().fieldErrors,
      };
    }
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/signup_information?user=${user_id}&company=${company_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      return errorData as IError;
    }

    const userData = await res.json();
    return userData as Partial<signUpResponse>;
  } catch (error: any) {
    console.error("Error during signupInformation:", error);
    throw new Error(`Failed to sign up information: ${error.message}`);
  }
};

export const signupAdresse = async (
  data: adressDataType,
  user_id: number,
  company_id: number
): Promise<IError | Partial<signUpResponse>> => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/signup_adresse?user=${user_id}&company=${company_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      const response = await res.json();
      return response as IError;
    }

    const userData = await res.json();
    return userData as Partial<signUpResponse>;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const signupActionnaire = async (
  data: FormData,
  user_id: number,
  company_id: number
): Promise<IError | Partial<signUpResponse>> => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/signup_actionnaire?user=${user_id}&company=${company_id}`,
      {
        method: "POST",
        body: data,
      }
    );

    if (!res.ok) {
      const errorObj = await res.json();
      return errorObj as IError;
    }

    const userData = await res.json();
    return userData as Partial<signUpResponse>;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const signupLegal = async (
  data: FormData,
  user_id: number,
  company_id: number
): Promise<IError | Partial<signUpResponse>> => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/signup_legal?user=${user_id}&company=${company_id}`,
      {
        method: "POST",
        body: data,
      }
    );

    console.log("res", res);
    if (!res.ok) {
      const errorObj = await res.json();
      return errorObj as IError;
    }

    const userData = await res.json();
    return userData as Partial<signUpResponse>;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const signupValide = async (
  user_id: number,
  company_id: number
): Promise<IError | Partial<signUpResponse>> => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/signup_valide?user=${user_id}&company=${company_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(""),
      }
    );

    if (!res.ok) {
      throw new Error("something went wrong");
    }

    const userData = await res.json();
    return userData as Partial<signUpResponse> | IError;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
