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
import { useAppDispatch } from "@/_lib/redux/hooks";
import { createUser } from "@/_lib/features/Auth/authSlice";

const AdjourterForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [userInfo, setUserInfo] = useState<string | null>(null);

  useEffect(() => {
    setUserInfo(
      localStorage.getItem("userData") ? localStorage.getItem("userData") : null
    );

    if (userInfo) {
      const userData = JSON.parse(userInfo);
      dispatch(createUser(userData));
    }
  }, [userInfo]);

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
      rue: "",
      street_user: "",
      city_user: "",
      etat_user: "",
      zip_user: "",
      receive_mail: false,
    },
  });

  function onSubmit(values: z.infer<typeof AdresseInfoSchema>) {
    //update the userData
    dispatch(createUser(values));

    //add the new data to the userData
    const newDatas = {
      ...JSON.parse(userInfo as string),
      ...values,
    };

    //persist in the localStorage
    localStorage.setItem("userData", JSON.stringify(newDatas));
    router.back();
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
            name="rue"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">Rue</FormLabel>
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
          <Button type="submit" className="primary-btn w-[224.24px] h-[50px]">
            Valider et continuer
          </Button>
          <Button type="button" className="w-[224.24px] h-[50px] bg-[#F2F2F2]">
            Annuler
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AdjourterForm;
