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

import { businessFieldSchema } from "../../validation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { CgChevronRightO } from "react-icons/cg";
import Link from "next/link";


const RegisterBusinessForm = () => {
  const form = useForm<z.infer<typeof businessFieldSchema>>({
    resolver: zodResolver(businessFieldSchema),
  })

  
  function onSubmit(values: z.infer<typeof businessFieldSchema>) {
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
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[11px] leading-4 text-black">Entrez le numero OTP envoyé par SMS</FormLabel>
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
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[11px] leading-4 text-black">Entrez le numero OTP envoyé par mail</FormLabel>
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
        </div>

        <div className="py-3 flex flex-col">
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

export default RegisterBusinessForm;
