import { getCards, getCardStats } from "@/_data/card";
import { ICompanyUpdate, updateCompany } from "@/_data/company";
import { createCustomer, getAllCustomers, IValues } from "@/_data/customers";
import { getRoles } from "@/_data/roles";
import {
  getAllTransactions,
  getTransactionStatistics,
} from "@/_data/transactionStatistics";
import {
  createUserCompany,
  getAllUsers,
  getUser,
  signupActionnaire,
  signupAdresse,
  signupInformation,
  signupLegal,
  signupValide,
} from "@/_data/user";
import { authenticateUser, signIn } from "@/_lib/actions";
import { signInDataType } from "@/_validation/";
import {
  adressDataType,
  informationDataType,
  signUpDataType,
} from "@/_validation/SignUp";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useSubmitSignInForm = () => {
  // mutation to submit sign in form
  return useMutation({
    mutationKey: ["getAuthorizedUser"],
    mutationFn: (values: signInDataType) => {
      return authenticateUser(values);
    },
  });
};

export const useCreateUserAccount = () => {
  return useMutation({
    mutationKey: ["createUserCompany"],
    mutationFn: (userValues: signUpDataType) => createUserCompany(userValues),
  });
};

export const useSubmitInformationForm = () => {
  return useMutation({
    mutationKey: ["updateUserInformation"],
    mutationFn: ({
      infoDetails,
      user_id,
      company_id,
    }: {
      infoDetails: informationDataType;
      user_id: number;
      company_id: number;
    }) => signupInformation(infoDetails, user_id, company_id),
  });
};

export const useSubmitAdresseForm = () => {
  return useMutation({
    mutationKey: ["signUpAdresseMutation"],
    mutationFn: async ({
      infoDetails,
      user_id,
      company_id,
    }: {
      infoDetails: adressDataType;
      user_id: number;
      company_id: number;
    }) => signupAdresse(infoDetails, user_id, company_id),
  });
};

export const useSubmitAdjouterForm = () => {
  return useMutation({
    mutationFn: ({
      infoDetails,
      user_id,
      company_id,
    }: {
      infoDetails: FormData;
      user_id: number;
      company_id: number;
    }) => signupActionnaire(infoDetails, user_id, company_id),
  });
};

export const useSubmitLegalForm = () => {
  return useMutation({
    mutationKey: ["signUpLegalMutation"],
    mutationFn: ({
      infoDetails,
      user_id,
      company_id,
    }: {
      infoDetails: FormData;
      user_id: number;
      company_id: number;
    }) => signupLegal(infoDetails, user_id, company_id),
  });
};

export const useSubmitValidationForm = () => {
  return useMutation({
    mutationKey: ["signUp"],
    mutationFn: ({
      user_id,
      company_id,
    }: {
      user_id: number;
      company_id: number;
    }) => signupValide(user_id, company_id),
  });
};

export const useSignUserIn = () => {
  return useMutation({
    mutationKey: ["signin"],
    mutationFn: ({ otp, id }: { otp: string; id: number }) =>
      signIn({ id, otp }),
  });
};

export const useGetCompanyTransactionDetails = (company_id: number) => {
  return useQuery({
    queryKey: ["transactionStatistics", company_id],
    queryFn: () => getTransactionStatistics(company_id),
  });
};

export const useGetAllCardsQuery = ({
  company_id,
  page,
  per_page,
}: {
  company_id: number | undefined;
  page: number;
  per_page: number;
}) => {
  return useQuery({
    queryKey: ["getAllCards", company_id],
    queryFn: () => {
      if (company_id === undefined) {
        throw new Error("Comany not found");
      }
      return getCards({
        company_id,
        page,
        per_page,
      });
    },
  });
};

export const useGetCompanyCardsDetails = (company_id: number) => {
  return useQuery({
    queryKey: ["getCardStats", company_id],
    queryFn: () => getCardStats(company_id),
  });
};

export const useGetAllTransactions = () => {
  return useQuery({
    queryKey: ["allTransactions"],
    queryFn: async () => {
      return await getAllTransactions();
    },
  });
};

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["allUsers"],
    queryFn: () => {
      return getAllUsers();
    },
  });
};

export const useGetUserByID = (id: number) => {
  return useQuery({
    queryKey: ["useGetUserByID", id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });
};

export const useGetAllRoles = () => {
  return useQuery({
    queryKey: ["allRoles"],
    queryFn: () => {
      return getRoles();
    },
  });
};

export const useEditCompanyInformationMutation = () => {
  return useMutation({
    mutationKey: ["editCompany"],
    mutationFn: ({
      company_id,
      user_id,
      companyInfo,
    }: {
      company_id: number;
      user_id: number;
      companyInfo: ICompanyUpdate;
    }) => updateCompany(company_id, user_id, companyInfo),
  });
};

export const useCreateCustomerMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createCustomer"],
    mutationFn: ({
      company_id,
      created_by,
      values,
    }: {
      company_id: number;
      created_by: number;
      values: IValues;
    }) => createCustomer(company_id, created_by, values),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["getAllCustomers"] }),
  });
};

export const useGetAllCustomersQuery = ({
  company_id,
  page,
  query,
}: {
  company_id: number;
  page: number;
  query: string;
}) => {
  return useQuery({
    queryKey: ["getAllCustomers"],
    queryFn: () =>
      getAllCustomers({
        company_id,
        page,
        query,
      }),
  });
};
