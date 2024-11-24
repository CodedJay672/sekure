"use client";

import React, { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LegalSchema } from "@/_validation";
import { Checkbox } from "@/components/ui/checkbox";
import DocumentUploader from "@/components/ui/shared/UploadDocument";
import { createUser } from "@/_lib/features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { CgSpinner } from "react-icons/cg";

const LegalForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth?.user);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if (userData) {
      try {
        const parsedUserData = JSON.parse(userData);
        dispatch(createUser(parsedUserData));
      } catch (error) {
        console.log("error getting userData" + error);
      }
    }
  }, []);

  const form = useForm<z.infer<typeof LegalSchema>>({
    resolver: zodResolver(LegalSchema),
  });

  function onSubmit(values: z.infer<typeof LegalSchema>) {
    setIsLoading(true);
    const newData = {
      ...values,
      certificat_constitution_company: values?.certificat_constitution_company
        ? URL.createObjectURL(values?.certificat_constitution_company[0])
        : null,
      proof_address_companys: values?.proof_address_companys
        ? URL.createObjectURL(values?.proof_address_companys[0])
        : null,
      acte_constitutif_company: values?.acte_constitutif_company
        ? URL.createObjectURL(values?.acte_constitutif_company[0])
        : null,
    };

    const updatedUserData = Object.assign({}, state, newData);
    try {
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
      dispatch(createUser(newData));

      // move to the validation page
      router.push(`/signup/business/validation`);
    } catch (error) {
      console.log("error updating storage" + error);
    }
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
            name="certificat_constitution_company"
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
                  <DocumentUploader fieldOnChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="proof_address_companys"
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
                  <DocumentUploader fieldOnChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="acte_constitutif_company"
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
                  <DocumentUploader fieldOnChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <br />
        <FormField
          control={form.control}
          name="receive_mail"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-1 text-white font-bold"
                />
              </FormControl>
              <div className="leading-none">
                <FormLabel className="text-[10px] leading-[15px] font-normal text-[#808080]">
                  Je certifie la conformité des informations remplies dans ce
                  formulaire
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <div className="w-full flex justify-between gap-2">
          <Button
            type="button"
            className="border-2 border-primary text-primary w-[224.24px] h-[50px] font-semibold bg-transparent"
          >
            Retour
          </Button>
          <Button
            type="submit"
            disabled={isLoading}
            className="primary-btn w-[224.24px] h-[50px]"
          >
            {isLoading ? (
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
