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
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { AdresseInfoSchema } from "@/_validation";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import FileUploader from "@/components/ui/shared/FileUploader";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { createUser } from "@/_lib/features/Auth/authSlice";
import { CgSpinner } from "react-icons/cg";

const AdjourterForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth?.user);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        dispatch(createUser(parsedData));
      } catch (error) {
        console.log("fetch storage error" + error);
      }
    }
  }, []);

  const form = useForm<z.infer<typeof AdresseInfoSchema>>({
    resolver: zodResolver(AdresseInfoSchema),
    defaultValues: {
      full_name_user: "",
      poste_user: "",
      date_birth_user: "",
      pourcentage_action_user: "",
      email_user: "",
      phone_user: "",
      nationality_user: "",
      localisation_user: "",
      street_user: "",
      city_user: "",
      etat_user: "",
      zip_user: "",
      receive_mail: false,
    },
  });

  function onSubmit(values: z.infer<typeof AdresseInfoSchema>) {
    setIsLoading(true);
    const newData = {
      ...values,
      document1_user: values?.document1_user
        ? URL.createObjectURL(values?.document1_user[0])
        : null,
      document2_user: values?.document2_user
        ? URL.createObjectURL(values?.document2_user[0])
        : null,
    };

    try {
      dispatch(createUser(newData));
      localStorage.setItem(
        "userData",
        JSON.stringify({ ...state, ...newData })
      );
      router.back();
    } catch (error) {
      console.log("failed to update storage" + error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <div className="w-full px-[15px] py-[18px] rounded-[19px] border">
          <span className="text-[13px] leading-[17px] font-semibold">
            Details
          </span>
          <FormField
            control={form.control}
            name="full_name_user"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">
                  Nom Complet
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
            name="poste_user"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">Poste</FormLabel>
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
            name="date_birth_user"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">
                  Date de Naissance
                </FormLabel>
                <FormControl>
                  <Input
                    type="date"
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
            name="pourcentage_action_user"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">
                  Pourcentage d’actions
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
            name="email_user"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
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
            name="phone_user"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">
                  Numéro de Téléphone
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
          <br />
          <span className="text-[13px] leading-[17px] font-semibold">
            Adresse Personnelle
          </span>
          <FormField
            control={form.control}
            name="nationality_user"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">
                  Nationalité
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
            name="localisation_user"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">
                  Localisation User
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
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
            name="street_user"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">
                  Appartement, etage
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
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
            name="city_user"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">Cité</FormLabel>
                <FormControl>
                  <Input
                    type="text"
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
            name="etat_user"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">Etat</FormLabel>
                <FormControl>
                  <Input
                    type="text"
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
            name="zip_user"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">Zip Code</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Votre adresse mail"
                    className="input pr-20"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />

          <br />
          <span className="text-[13px] leading-[17px] font-semibold">
            Adresse Personnelle
          </span>
          <FormField
            control={form.control}
            name="document1_user"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-[12px] leading-[24px] font-light">
                  Ajoutez un document de vérification d’identité ( CNI,
                  Passeport, etc )
                </FormLabel>
                <FormControl>
                  <FileUploader fieldOnChange={field.onChange} />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="document2_user"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-[12px] leading-[24px] font-light">
                  Ajoutez un document qui justifie votre adresse ( CNI,
                  Passeport, etc )
                </FormLabel>
                <FormControl>
                  <FileUploader fieldOnChange={field.onChange} />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
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
            type="submit"
            disabled={isLoading}
            className="primary-btn w-[224.24px] h-[50px]"
          >
            {isLoading ? (
              <CgSpinner size={20} className="animate-spin" />
            ) : (
              "Valider et continuer"
            )}
          </Button>
          <Button
            type="button"
            className="w-[224.24px] h-[50px] bg-[#F2F2F2]"
            onClick={() => router.back()}
          >
            Annuler
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AdjourterForm;
