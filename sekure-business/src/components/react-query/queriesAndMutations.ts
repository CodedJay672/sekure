import {
  createCustomerCard,
  deleteCard,
  getCardDetails,
  getCards,
  getCardStats,
} from "@/_data/card";
import {
  getAllCompany,
  getCompanyById,
  ICompanyUpdate,
  updateCompany,
} from "@/_data/company";
import {
  createCustomer,
  getAllCustomers,
  getCustomersBySearch,
  IValues,
} from "@/_data/customers";
import { createRole, getRoles } from "@/_data/roles";
import {
  getAllTransactions,
  getTransactionByID,
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
import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";

// authentication queries and mutations
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

// fetch company information only when the id is available
export const useGetCompanyByIdQuery = (id: number) => {
  return useQuery({
    queryKey: ["companyInformation", id],
    queryFn: () => getCompanyById(id),
    enabled: !!id,
  });
};

// card queries and mutations
export const useGetAllCardsQuery = ({
  company_id,
  page,
}: {
  company_id: number;
  page: number;
}) => {
  return useQuery({
    queryKey: ["getAllCards", company_id, page],
    queryFn: () => {
      return getCards({
        company_id,
        page,
      });
    },
    placeholderData: keepPreviousData,
    enabled: !!company_id,
  });
};

export const useGetCardDetailsQuery = (id: number) => {
  return useQuery({
    queryKey: ["getCardDetails", id],
    queryFn: () => getCardDetails(id),
    enabled: !!id,
  });
};

export const useCreateCustomerCardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createCard"],
    mutationFn: ({
      created_by,
      email,
      brand,
    }: {
      email: string;
      created_by: number;
      brand: string;
    }) => createCustomerCard({ created_by, email, brand }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllCards"] });
      queryClient.invalidateQueries({ queryKey: ["getAllCustomers"] });
      queryClient.invalidateQueries({ queryKey: ["getCardStats"] });
      queryClient.invalidateQueries({ queryKey: ["allTransactions"] });
    },
  });
};

export const useGetCompanyCardsDetails = (company_id: number) => {
  return useQuery({
    queryKey: ["getCardStats", company_id],
    queryFn: () => getCardStats(company_id),
  });
};

export const useDeleteCardMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteCard"],
    mutationFn: (id: number) => {
      return deleteCard(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllCards"] });
      queryClient.invalidateQueries({ queryKey: ["getAllCustomers"] });
      queryClient.invalidateQueries({ queryKey: ["getCardStats"] });
      queryClient.invalidateQueries({ queryKey: ["allTransactions"] });
    },
  });
};

// transaction queries and mutations
export const useGetAllTransactions = ({
  company_id,
  page,
  query,
}: {
  company_id: number;
  page?: number;
  query?: string;
}) => {
  return useQuery({
    queryKey: ["allTransactions", company_id, page],
    queryFn: () =>
      getAllTransactions({
        company_id,
        page,
        query,
      }),
    placeholderData: keepPreviousData,
    enabled: !!company_id,
  });
};

export const useGetTransactionDetailsByID = (id: number) => {
  return useQuery({
    queryKey: ["getTransactionById", id],
    queryFn: () => getTransactionByID(id),
  });
};

export const useGetCompanyTransactionDetails = (company_id: number) => {
  return useQuery({
    queryKey: ["transactionStatistics", company_id],
    queryFn: () => getTransactionStatistics(company_id),
    enabled: !!company_id,
  });
};

// Users (roles and company) queries and mutations
export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["allUsers"],
    queryFn: () => {
      return getAllUsers();
    },
    placeholderData: keepPreviousData,
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

export const useCreateRoleMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createRole"],
    mutationFn: (role: string) => createRole(role),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["allRoles"] }),
  });
};

// Customers queries and mutations
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
}: {
  company_id: number;
  page: number;
}) => {
  return useQuery({
    queryKey: ["getAllCustomers"],
    queryFn: () =>
      getAllCustomers({
        company_id,
        page,
      }),
  });
};

export const useGetCustomersBySearchQuery = ({
  company_id,
  page,
  query,
}: {
  company_id: number;
  page: number;
  query: string;
}) => {
  return useQuery({
    queryKey: ["getAllCustomersBySearch"],
    queryFn: () =>
      getCustomersBySearch({
        company_id,
        page,
        query,
      }),
    enabled: !!query,
  });
};
