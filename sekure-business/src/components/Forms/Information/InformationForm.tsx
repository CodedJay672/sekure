"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { useToast } from "@/hooks/use-toast";
import {
  createUser,
  nextStep,
  updateUserObj,
} from "@/_lib/features/Auth/authSlice";
import { CgSpinner } from "react-icons/cg";
import { InformationSchema } from "@/_validation/SignUp";

import { transformedErrorObject } from "@/utils";
import { useState } from "react";
import { useSubmitInformationForm } from "@/components/react-query/queriesAndMutations";
import { IError } from "@/utils/types/SignupTypes";
import CustomInput from "@/components/ui/shared/CustomInputs/CustomInput";

const InformationForm = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth);
  const { userObj, newUserData } = state;
  const [errorResponse, setErrorResponse] = useState({});
  const { toast } = useToast();

  const {
    mutateAsync: submitInformationForm,
    isPending,
    isError,
    error: mutationError,
  } = useSubmitInformationForm();

  const form = useForm<z.infer<typeof InformationSchema>>({
    resolver: zodResolver(InformationSchema),
    defaultValues: {
      ...newUserData,
    },
  });

  async function onSubmit(values: z.infer<typeof InformationSchema>) {
    if (userObj.user?.id === undefined || userObj.company?.id === undefined) {
      return toast({
        description: "User or Company not found.",
      });
    }

    const submitInformationResponse = await submitInformationForm({
      infoDetails: values,
      user_id: userObj.user?.id,
      company_id: userObj.company?.id,
    });

    if (submitInformationResponse.status) {
      toast({
        description: submitInformationResponse?.message,
      });
      dispatch(updateUserObj(submitInformationResponse));
      dispatch(createUser(values));
      return dispatch(nextStep());
    } else {
      setErrorResponse(
        transformedErrorObject(submitInformationResponse as IError)
      );
    }
  }

  if (isError) {
    toast({
      description: mutationError?.message,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <span className="taxt-[13px] leading-[17px] text-[#242424] font-semibold mt-3">
          Transfert de devises
        </span>
        <div className="border border-[#E5E5E5] rounded-[15px] px-3 py-4 space-y-1">
          <FormField
            control={form.control}
            name="sector_activity"
            render={({ field }) => (
              <CustomInput
                label="Secteur d’activité"
                placeholder="Votre adresse mail"
                type="text"
                field={field}
                error={errorResponse}
              />
            )}
          />

          <FormField
            control={form.control}
            name="description_company"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  label="Description de l’entreprise"
                  placeholder="Entrez votre nom comme sur votre pièce d’identité"
                  type="text"
                  field={field}
                  variant="textarea"
                  error={errorResponse}
                />
              </FormItem>
            )}
          />
        </div>

        <br />
        <span className="taxt-[13px] leading-[17px] text-[#242424] font-semibold mt-3">
          Transfert de devises
        </span>
        <div className="border border-[#E5E5E5] rounded-[15px] px-3 py-4 space-y-1">
          <FormField
            control={form.control}
            name="created_company"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  label="Date de creation de l’entreprise"
                  placeholder="Votre mot de passe"
                  description="Format: jjjj-mm-aaaa"
                  type="text"
                  field={field}
                  error={errorResponse}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="registry_number"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  type="text"
                  label="Numéro de Registre de l’entreprise"
                  placeholder="Entrez le nom de votre entreprise"
                  field={field}
                  error={errorResponse}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="matricule_number"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  type="text"
                  label="Numéro de matricule aux Impots"
                  placeholder="Entrez le nom de matricule entreprise"
                  field={field}
                  error={errorResponse}
                />
              </FormItem>
            )}
          />
        </div>

        <br />
        <span className="taxt-[13px] leading-[17px] text-[#242424] font-semibold mt-3">
          Transfert de devises
        </span>
        <div className="border border-[#E5E5E5] rounded-[15px] px-3 py-4 space-y-1">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  type="tel"
                  label="Numéro de Téléphone"
                  placeholder="Votre adresse mail"
                  field={field}
                  error={errorResponse}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website_link"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  type="text"
                  label="Lien du site web"
                  placeholder="Votre mot de passe"
                  field={field}
                  error={errorResponse}
                />
              </FormItem>
            )}
          />
        </div>

        <br />
        <div className="w-full flex place-content-end mt-10">
          <Button
            type="submit"
            className="primary-btn w-[224.24px] h-[50px]"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <CgSpinner size={20} className="animate-spin mr-5" /> Loading...
              </>
            ) : (
              "Continuer"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default InformationForm;
