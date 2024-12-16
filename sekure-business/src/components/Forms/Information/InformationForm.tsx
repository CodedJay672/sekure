"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

const InformationForm = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth);
  const { userObj, newUserData } = state;
  const [errorResponse, setErrorResponse] = useState({});
  const { toast } = useToast();

  const {
    mutateAsync: submitInformationForm,
    isPending,
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
        description: submitInformationResponse.message,
      });
      dispatch(updateUserObj(submitInformationResponse));
      return dispatch(nextStep());
    } else {
      setErrorResponse(
        transformedErrorObject(submitInformationResponse as IError)
      );
    }
  }

  if (mutationError) {
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
              <FormItem>
                <FormLabel className="text-xs font-light">
                  Secteur d’activité
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Votre adresse mail"
                    {...field}
                    className="input pr-20"
                  />
                </FormControl>
                {field.name in errorResponse ? (
                  <small className="text-xs text-red-600 align-right">
                    {errorResponse[field.name] as string}
                  </small>
                ) : (
                  <FormMessage className="text-xs font-normal leading-6 text-red-700" />
                )}{" "}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description_company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light group">
                  Description de l’entreprise
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Entrez votre nom comme sur votre pièce d’identité"
                    rows={5}
                    {...field}
                    className="input pr-20 h-[126px]"
                  />
                </FormControl>
                {field.name in errorResponse ? (
                  <small className="text-xs text-red-600 align-right">
                    {errorResponse[field.name] as string}
                  </small>
                ) : (
                  <FormMessage className="text-xs font-normal leading-6 text-red-700" />
                )}{" "}
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
                <FormLabel className="text-xs font-light">
                  Date de creation de l’entreprise
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Votre mot de passe"
                    className="input pr-20"
                    {...field}
                  />
                </FormControl>
                {field.name in errorResponse ? (
                  <small className="text-xs text-red-600 align-right">
                    {errorResponse[field.name] as string}
                  </small>
                ) : (
                  <FormMessage className="text-xs font-normal leading-6 text-red-700" />
                )}{" "}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="registry_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">
                  Numéro de Registre de l’entreprise
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez le nom de votre entreprise"
                    {...field}
                    className="input pr-20"
                  />
                </FormControl>
                {field.name in errorResponse ? (
                  <small className="text-xs text-red-600 align-right">
                    {errorResponse[field.name] as string}
                  </small>
                ) : (
                  <FormMessage className="text-xs font-normal leading-6 text-red-700" />
                )}{" "}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="matricule_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">
                  Numéro de matricule aux Impots
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Votre adresse mail"
                    {...field}
                    className="input pr-20"
                  />
                </FormControl>
                {field.name in errorResponse ? (
                  <small className="text-xs text-red-600 align-right">
                    {errorResponse[field.name] as string}
                  </small>
                ) : (
                  <FormMessage className="text-xs font-normal leading-6 text-red-700" />
                )}{" "}
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
                <FormLabel className="text-xs font-light">
                  Numéro de Téléphone
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Votre adresse mail"
                    className="input pr-20"
                    {...field}
                  />
                </FormControl>
                {field.name in errorResponse ? (
                  <small className="text-xs text-red-600 align-right">
                    {errorResponse[field.name] as string}
                  </small>
                ) : (
                  <FormMessage className="text-xs font-normal leading-6 text-red-700" />
                )}{" "}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website_link"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">
                  Lien du site web
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Votre mot de passe"
                    {...field}
                    className="input pr-20"
                  />
                </FormControl>
                {field.name in errorResponse ? (
                  <small className="text-xs text-red-600 align-right">
                    {errorResponse[field.name] as string}
                  </small>
                ) : (
                  <FormMessage className="text-xs font-normal leading-6 text-red-700" />
                )}{" "}
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
              <CgSpinner size={20} className="animate-spin" />
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
