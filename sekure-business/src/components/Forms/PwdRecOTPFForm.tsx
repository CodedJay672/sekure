"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { OTPSchema } from "@/validation";
import { useRouter } from "next/navigation";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";


const PwdRecOTPFForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof OTPSchema>>({
    resolver: zodResolver(OTPSchema),
  })

  
  function onSubmit(values: z.infer<typeof OTPSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push('/');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full">
        <div>
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="border-2" />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                <Link href="#" className="flex justify-start text-[12px] leading-[19px] pr-2">
                  Vous n’avez pas reçu de code?<span className="font-semibold text-primary ml-1"> Renvoyez le code</span>
                </Link>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        <div className="py-3 flex items-center gap-2">
          <Button
            type="submit"
            className="w-[186px] h-[50px] bg-primary rounded-md text-white  my-3"
            >
              Me connecter
          </Button>
          <Link href="/signin" className="flex-center rounded-md inline-block flex-1 h-[50px] text-[12px] leading-[19px] bg-background">
            Pas encore de compte?<span className="font-bold ml-[2px]"> Inscrivez vous</span>
          </Link>
        </div>
      </form>
    </Form>
  )
}

export default PwdRecOTPFForm;
