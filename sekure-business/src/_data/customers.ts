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
interface IValues {
  first_name: string;
  last_name: string;
  country: string;
  email: string;
}
export const createCustomer = async (
  company_id: number,
  created_by: number,
  values: IValues
) => {
  try {
    const session = await verifySession("session");

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/customers?company=${company_id}&created_by=${created_by}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.value?.token}`,
        },
        body: JSON.stringify({ ...values }),
      }
    );

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
