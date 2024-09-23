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

import { signinSchema } from "../../validation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CgChevronRightO } from "react-icons/cg";
import Link from "next/link";


const SignInForm = () => {
  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
  })

  
  function onSubmit(values: z.infer<typeof signinSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex justify-between h-[460px] flex-col">
        <div className="flex flex-col gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[11px] leading-4 text-black">Adresse Mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="00000"
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[11px] leading-4 text-black">Mot de passe</FormLabel>
                <FormControl>
                  <Input
                    placeholder="00000"
                    className="form-input w-[287px] h-[37.09px] bg-[#F4EFE3] text-black focus:ring-primary"
                    {...field}
                    />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />
          <Link href="/recover-password" className="w-[288px] flex justify-end text-[9px] leading-4 -mt-2 pr-2">Mot de passe oublié?</Link>
        </div>

        <div className="py-3 flex flex-col">
          <Button
            type="submit"
            className="w-[288px] bg-[#FFD677] rounded-full text-white flex-between my-3"
            >
            <span className="flex-1">Suivant</span>
            <CgChevronRightO size={30} className="bg-white text-black rounded-full outline-none" />
          </Button>
          <div className="w-[288px] flex-center">
            <p className="text-[9px] leading-4 font-normal text-black">
              Vous avez déjà un compte? <Link href="/signin" className="font-semibold">Connectez-vous</Link>
            </p>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default SignInForm;
