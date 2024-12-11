"use client";

import React, { useState } from "react";

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
import { Button } from "@/components/ui/button";
import {
  createUser,
  nextStep,
  previousStep,
  updateUserObj,
} from "@/_lib/features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { CgSpinner } from "react-icons/cg";
import { LegalSchema } from "@/_validation/SignUp";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { signupLegal } from "@/_data/user";
import { IError } from "@/utils/types/SignupTypes";
import { transformedErrorObject } from "@/utils";
import FileUploader from "@/components/ui/shared/FileUploader";

const LegalForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth);
  const { userObj } = state;
  const [errorResponse, setErrorResponse] = useState({});

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { mutate: signupLegalMutation, isPending } = useMutation({
    mutationKey: ["signUpLegalMutation"],
    mutationFn: async ({
      infoDetails,
      user_id,
      company_id,
    }: {
      infoDetails: FormData;
      user_id: number;
      company_id: number;
    }) => {
      return await signupLegal(infoDetails, user_id, company_id);
    },
    onSuccess: (data) => {
      if ("user" in data) {
        queryClient.invalidateQueries({ queryKey: ["signUpLegalMutation"] });
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

  const form = useForm<z.infer<typeof LegalSchema>>({
    resolver: zodResolver(LegalSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof LegalSchema>) {
    const formData = new FormData();

    if (
      values.acte_constitutif &&
      values.certifat_constitution &&
      values.proof_address
    ) {
      formData.append("acte_constitutif", values.acte_constitutif[0]);
      formData.append("certifat_constitution", values.certifat_constitution[0]);
      formData.append("proof_address", values.proof_address[0]);
    }

    //create new values with the file url string
    const newValues = {
      ...values,
      acte_constitutif: values.acte_constitutif
        ? URL.createObjectURL(values.acte_constitutif[0])
        : "",
      certifat_constitution: values.certifat_constitution
        ? URL.createObjectURL(values.certifat_constitution[0])
        : "",
      proof_address: values.proof_address
        ? URL.createObjectURL(values.proof_address[0])
        : "",
    };

    if (userObj.user.id && userObj.company.id) {
      signupLegalMutation({
        infoDetails: formData,
        user_id: userObj.user.id,
        company_id: userObj.company.id,
      });

      return dispatch(createUser(newValues));
    }

    toast({
      description: "Could not find a valid ID",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <span className="text-[12px] leading-[17px] text-[#8F8F8F]">
          Veuillez ajouter des documents conformes de votre entreprise
        </span>
        <div className="w-full px-[15px] pt-2 pb-[18px] rounded-[19px] border">
          <FormField
            control={form.control}
            name="certifat_constitution"
            render={({ field }) => (
              <FormItem className="mt-3">
                <div className="flex flex-col gap-[1px]">
                  <span className="text-[13px] leading-[17px] font-semibold">
                    Certificat de Constitution
                  </span>
                  <FormLabel className="text-[12px] leading-[24px] font-light">
                    Veuillez ajouter des documents conformes de votre entreprise
                  </FormLabel>
                </div>
                <FormControl>
                  <FileUploader fieldOnChange={field.onChange} />
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
            name="proof_address"
            render={({ field }) => (
              <FormItem className="mt-3">
                <div className="flex flex-col gap-[1px]">
                  <span className="text-[13px] leading-[17px] font-semibold">
                    Preuve d’adresse
                  </span>
                  <FormLabel className="text-[12px] leading-[24px] font-light">
                    Ajoutez un document qui justifie l’adresse de votre
                    entreprise
                  </FormLabel>
                </div>
                <FormControl>
                  <FileUploader fieldOnChange={field.onChange} />
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
            name="acte_constitutif"
            render={({ field }) => (
              <FormItem className="mt-3">
                <div className="flex flex-col gap-[1px]">
                  <span className="text-[13px] leading-[17px] font-semibold">
                    Acte constitutif et statuts
                  </span>
                  <FormLabel className="text-[12px] leading-[24px] font-light">
                    Ajoutez les documents legaux des statuts de votre entreprise
                  </FormLabel>
                </div>
                <FormControl>
                  <FileUploader fieldOnChange={field.onChange} />
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
        <div className="w-full flex justify-between gap-2">
          <Button
            type="button"
            className="border-2 border-primary text-primary w-[224.24px] h-[50px] font-semibold bg-transparent"
            onClick={() => dispatch(previousStep())}
          >
            Retour
          </Button>
          <Button
            type="submit"
            disabled={isPending}
            className="primary-btn w-[224.24px] h-[50px]"
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

export default LegalForm;