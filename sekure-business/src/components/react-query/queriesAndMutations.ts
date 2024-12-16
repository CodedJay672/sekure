import {
  createUserCompany,
  signupActionnaire,
  signupAdresse,
  signupInformation,
  signupLegal,
  signupValide,
} from "@/_data/user";
import { authenticateUser } from "@/_lib/actions";
import { signInDataType } from "@/_validation/";
import {
  adressDataType,
  informationDataType,
  signUpDataType,
} from "@/_validation/SignUp";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useSubmitSignInForm = () => {
  // init queryClient
  const queryClient = useQueryClient();

  // mutation to submit sign in form
  return useMutation({
    mutationKey: ["getAuthorizedUser"],
    mutationFn: (values: signInDataType) => {
      return authenticateUser(values);
    },
    onSuccess: (data) => {
      if ("user" in data && Array.isArray(data.user)) {
        queryClient.invalidateQueries({ queryKey: ["getAuthorizedUser"] });
      }
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
  const queryClient = useQueryClient();
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
    onSuccess: (data) => {
      if ("user" in data) {
        queryClient.invalidateQueries({ queryKey: ["updateUserInformation"] });
      }
    },
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
