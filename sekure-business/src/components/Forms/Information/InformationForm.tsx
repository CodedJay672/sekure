"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
import { InformationSchema } from "@/_validation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { createUser } from "@/_lib/features/Auth/authSlice";
import { CgSpinner } from "react-icons/cg";

const InformationForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [userInfo, setUserInfo] = useState<string | null>(null);
  const state = useAppSelector((state) => state.auth?.user);

  useEffect(() => {
    const storageData = localStorage.getItem("userData");

    if (storageData) {
      try {
        const parsedData = JSON.parse(storageData);
        setUserInfo(parsedData);
        dispatch(createUser(parsedData));
      } catch (error) {
        console.log("error parsing data" + error);
      }
    }
  }, []);

  const form = useForm<z.infer<typeof InformationSchema>>({
    resolver: zodResolver(InformationSchema),
    defaultValues: {
      name_company: "",
      email_company: "",
      sector_activity_company: "",
      description_company: "",
      created_company: "",
      registry_number_company: "",
      matricule_number_company: "",
      phone_company: "",
      website_link_company: "",
    },
  });

  const { isSubmitting } = form.formState;

  function onSubmit(values: z.infer<typeof InformationSchema>) {
    //add the new data to the userData
    const newDatas = Object.assign({}, state, values);

    try {
      //persist in the localStorage
      localStorage.setItem("userData", JSON.stringify(newDatas));

      //update the userData
      dispatch(createUser(values));

      //step 2
      router.push(`/signup/business/adresse`);
    } catch (error) {
      console.log("error updating localstorage" + error);
    }
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
            name="name_company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">
                  Nom De l’entreprise
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez votre nom comme sur votre pièce d’identité"
                    className="input pr-20"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email_company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">
                  Email de l’entreprise
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Votre adresse mail"
                    {...field}
                    className="input pr-20"
                  />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sector_activity_company"
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
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description_company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">
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
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
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
                    type="date"
                    placeholder="Votre mot de passe"
                    className="input pr-20"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="registry_number_company"
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
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="matricule_number_company"
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
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
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
            name="phone_company"
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
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website_link_company"
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
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />
        </div>

        <br />
        <div className="w-full flex place-content-end mt-10">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="primary-btn w-[224.24px] h-[50px]"
          >
            {isSubmitting ? (
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
