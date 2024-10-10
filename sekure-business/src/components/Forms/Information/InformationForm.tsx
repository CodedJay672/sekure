"use client";

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
import { InformationSchema } from "@/validation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const InformationForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof InformationSchema>>({
    resolver: zodResolver(InformationSchema),
    defaultValues: {
      name: "John Doe",
      type: "test email",
      sector: "Finance",
      description: "Trying to describe the information below",
      date_of_creation: "",
      number_registered: "1234567890",
      number_impot: "090182736",
      number_telephone: "1900923774",
      web: "www.johndoeinc.com",
    },
  });

  function onSubmit(values: z.infer<typeof InformationSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push(`/signup/business/adresse`);
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
            name="name"
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
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">
                  Type de l’entreprise
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
            name="sector"
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
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">
                  Nom De l’entreprise
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
            name="date_of_creation"
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
            name="number_registered"
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
            name="number_impot"
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
            name="number_telephone"
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
            name="web"
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
          <Button type="submit" className="primary-btn w-[224.24px] h-[50px]">
            Continuer
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default InformationForm;
