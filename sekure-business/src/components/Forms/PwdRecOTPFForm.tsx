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
import { signIn } from "@/_lib/actions";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { useEffect } from "react";
import { updateConnexionData } from "@/_lib/features/users/connexionSlice";
import { User } from "@/utils/types/types";
import { CgSpinner } from "react-icons/cg";

const PwdRecOTPFForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.connexion?.user);

  useEffect(() => {
    const userInfo = localStorage.getItem("user");

    if (userInfo) {
      try {
        const parsedUserInfo = JSON.parse(userInfo);
        dispatch(updateConnexionData(parsedUserInfo));
      } catch (error) {
        console.log("error getting user info" + error);
      }
    }
  }, []);

  const form = useForm<z.infer<typeof OTPSchema>>({
    resolver: zodResolver(OTPSchema),
  });

  const { mutate: userSignIn, isPending } = useMutation({
    mutationKey: ["signin"],
    mutationFn: async (values: { otp: string }) => {
      const id = state?.id as number;
      return signIn({ id, ...values });
    },
    onSuccess: (data) => {
      toast({
        description: "Vous êtes connecté",
      });
      router.replace("/");
    },
  });

  async function onSubmit(values: z.infer<typeof OTPSchema>) {
    const email_verified_at = Date.now().toLocaleString();
    const updatedUserInfo = { ...state, email_verified_at } as User;
    try {
      userSignIn(values);
      dispatch(updateConnexionData(updatedUserInfo));
      localStorage.setItem("user", JSON.stringify(updatedUserInfo));
    } catch (error) {
      console.log("failed to update user info" + error);
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
            disabled={isPending}
          >
            {isPending ? (
              <CgSpinner size={20} className="animate-spin" />
            ) : (
              "Me connecter"
            )}
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
