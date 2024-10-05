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
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';


const SignInForm = () => {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
  })

  
  function onSubmit(values: z.infer<typeof signinSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    router.push(`${pathname}/get-otp`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] leading-4 text-black">Adresse Mail</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Votre adresse mail"
                  className="form-input h-[50px] bg[#F3F3F3] text-black focus:ring-primary invalid:border-red-500 placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
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
                  type="password"
                  placeholder="Votre mot de passe"
                  className="form-input h-[50px] bg-[#F3F3F3] text-black focus:ring-primary invalid:border-red-500 placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
                  {...field}
                  />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <div className="py-3 flex items-center gap-2">
          <Button
            type="submit"
            className="w-[186px] h-[50px] bg-primary rounded-md text-white  my-3"
            >
              Suivant
          </Button>
          <Link href="/signup" className="flex-center rounded-md inline-block flex-1 h-[50px] text-[12px] leading-[19px] bg-background">
            Pas encore de compte? <span className="font-bold">Inscrivez vous</span>
          </Link>
        </div>
      </form>
    </Form>
  )
}

export default SignInForm;
