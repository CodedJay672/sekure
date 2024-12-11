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
import { informationDataType, InformationSchema } from "@/_validation/SignUp";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { signupInformation } from "@/_data/user";
import { IError } from "@/utils/types/SignupTypes";
import { transformedErrorObject } from "@/utils";
import { useState } from "react";

const InformationForm = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth);
  const { userObj, newUserData } = state;
  const [errorResponse, setErrorResponse] = useState({});

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { mutate: signUpInformationMutation, isPending } = useMutation({
    mutationKey: ["signUpInformationMutation"],
    mutationFn: async ({
      infoDetails,
      user_id,
      company_id,
    }: {
      infoDetails: informationDataType;
      user_id: number;
      company_id: number;
    }) => {
      return await signupInformation(infoDetails, user_id, company_id);
    },
    onSuccess: (data) => {
      if ("user" in data) {
        queryClient.invalidateQueries({ queryKey: ["signupInformation"] });
        toast({
          description: data.message,
        });
        dispatch(updateUserObj(data));
        return dispatch(nextStep());
      }
      const errorObj = data as IError;
      setErrorResponse(transformedErrorObject(errorObj));
      toast({
        description: "Something went wrong.",
      });
    },
    onError: (error) => {
      toast({
        description: error?.message,
      });
    },
  });

  const form = useForm<z.infer<typeof InformationSchema>>({
    resolver: zodResolver(InformationSchema),
    defaultValues: {
      ...newUserData,
    },
  });

  function onSubmit(values: z.infer<typeof InformationSchema>) {
    if (userObj.user.id && userObj.company.id) {
      signUpInformationMutation({
        infoDetails: values,
        user_id: userObj.user.id,
        company_id: userObj.company.id,
      });
      return dispatch(createUser(values));
    }

    toast({
      description: "Could not find a valid ID",
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
