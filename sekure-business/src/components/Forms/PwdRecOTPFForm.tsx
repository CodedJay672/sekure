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
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { OTPSchema } from "@/_validation";
import { useRouter } from "next/navigation";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { useState } from "react";
import { verifyEmail } from "@/_lib/actions";
import { useToast } from "@/hooks/use-toast";
import { encrypt } from "../../_lib/session";

const PwdRecOTPFForm = () => {
  const { toast } = useToast();
  const [userToken, setUserToken] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(token) : null;
  });
  const router = useRouter();

  const form = useForm<z.infer<typeof OTPSchema>>({
    resolver: zodResolver(OTPSchema),
  });
  const pending = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof OTPSchema>) {
    try {
      //verify otp sent to email
      const data = await verifyEmail(values);

      if (!data) {
        return null;
      }

      localStorage.setItem("token", JSON.stringify(data.token));
      setUserToken(data.token);

      toast({
        title: "Succès",
        description: data.message,
        type: "foreground",
      });
      router.replace("/");
    } catch (error) {
      console.log("error", error);
    }
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
                  <Link
                    href="#"
                    className="flex justify-start text-[12px] leading-[19px] pr-2"
                  >
                    Vous n’avez pas reçu de code?
                    <span className="font-semibold text-primary ml-1">
                      {" "}
                      Renvoyez le code
                    </span>
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
            disabled={pending}
          >
            Me connecter
          </Button>
          <Link
            href="/signin"
            className="flex-center rounded-md inline-block flex-1 h-[50px] text-[12px] leading-[19px] bg-background"
          >
            Pas encore de compte?
            <span className="font-bold ml-[2px]"> Inscrivez vous</span>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default PwdRecOTPFForm;
