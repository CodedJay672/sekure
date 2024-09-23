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
} from "@/components/ui/form"

import { signupSchema } from "../../validation";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { CgChevronRightO } from "react-icons/cg";
import Link from "next/link";


const SignupForm = () => {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
  })

  
  function onSubmit(values: z.infer<typeof signupSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] leading-4 text-black">Nom complet</FormLabel>
              <FormControl>
                <Input
                  placeholder="Kamgaing Kamdem"
                  className="form-input w-[287px] h-[37.09px] bg-[#F4EFE3] text-black focus:ring-primary"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] leading-4 text-black">Numéro de téléphone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="6xxx xxxx xxxx"
                    {...field}
                    className="form-input w-[287px] h-[37.09px]bg-[#F4EFE3] text-black focus:ring-primary"
                    />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] leading-4 text-black">Nom de votre entreprise</FormLabel>
              <FormControl>
                <Input
                  placeholder="EntrepriseANC"
                  {...field}
                  className="form-input w-[287px] h-[37.09px] bg-[#F4EFE3] text-black focus:ring-primary"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] leading-4 text-black">Poste dans l&apos;entreprise</FormLabel>
              <FormControl>
                <Input
                  placeholder="Comptable"
                  {...field}
                  className="form-input w-[287px] h-[37.09px] bg-[#F4EFE3] text-black focus:ring-primary"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] leading-4 text-black">Adresse email proféssionnelle</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="nomcomplete@enterprise.com"
                  {...field}
                  className="form-input w-[287px] h-[37.09px] bg-[#F4EFE3] text-black focus:ring-primary"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] leading-4 text-black">Mot de passe</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  {...field}
                  className="form-input w-[287px] h-[37.09px] bg-[#F4EFE3] text-black focus:ring-primary"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] leading-4 text-black">Confirmation</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  {...field}
                  className="form-input w-[287px] h-[37.09px] bg-[#F4EFE3] text-black focus:ring-primary"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <div className="py-3">
          <FormField
            control={form.control}
            name="terms_condition"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-2 space-y-0 rounded-md py-1">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="form-checkbox h-[17px] w-[17px] text-primary rounded-md"
                    />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-[9px] leading-4 font-normal">
                    j’ai lu et accepté les termes et conditions de Sekure
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="receive_mail"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-2 space-y-0 rounded-md py-1">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="form-checkbox h-[17px] w-[17px] text-primary rounded-md"
                    />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-[9px] leading-4 font-normal">
                    j’accepte de recevoir des messages d’information de Sekure 
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="w-[288px] bg-black rounded-full text-white flex-between"
        >
          <span className="flex-1">Suivant</span>
          <CgChevronRightO size={30} color="black" className="bg-white rounded-full" />
        </Button>
        <div className="w-[288px] flex-center">
          <p className="text-[9px] leading-4 font-normal text-black">
            Vous avez déjà un compte? <Link href="/signin" className="font-semibold">Connectez-vous</Link>
          </p>
        </div>
      </form>
    </Form>
  )
}

export default SignupForm;
