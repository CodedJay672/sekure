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

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CgChevronRightO } from "react-icons/cg";
import Link from "next/link";
import { OTPSchema } from "@/validation";


const PwdRecOTPFForm = () => {
  const form = useForm<z.infer<typeof OTPSchema>>({
    resolver: zodResolver(OTPSchema),
  })

  
  function onSubmit(values: z.infer<typeof OTPSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex justify-between h-[460px] flex-col">
        <div>
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[11px] leading-4 text-black">Entrez le code OTP envoyé par mail</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="5000"
                    className="form-input w-[287px] h-[37.09px] bg-[#F4EFE3] text-black focus:ring-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
            />
          
          <Link href="#" className="w-[288px] flex justify-end text-[9px] leading-4 pr-2">Aucun code reçu?<span className="font-semibold ml-[2px]">renvoyez le code</span></Link>
        </div>

        <div className="">
          <Button
            type="submit"
            className="w-[288px] bg-black rounded-full text-white flex-between"
            >
            <span className="flex-1">Suivant</span>
            <CgChevronRightO size={30} color="black" className="bg-white rounded-full" />
          </Button>
          <div className="w-[288px] flex-center">
            <p className="text-[9px] leading-4 font-normal text-black">
              Vous n’avez pas encore de compte? <Link href="/signin" className="font-semibold">Inscivez-vous</Link>
            </p>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default PwdRecOTPFForm;
