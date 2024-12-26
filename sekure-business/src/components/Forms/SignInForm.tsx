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
} from "@/components/ui/form";

import { signinSchema } from "@/_validation/";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

//import the redux store deps
import { updateConnexionData } from "@/_lib/features/users/connexionSlice";
import { useAppDispatch } from "@/_lib/redux/hooks";
import { CgSpinner } from "react-icons/cg";
import { useState } from "react";
import { transformedSignInErrorObject } from "@/utils";
import { clearPersistor, jumpStep } from "@/_lib/features/Auth/authSlice";
import { useSubmitSignInForm } from "../react-query/queriesAndMutations";

const SignInForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const [errorObj, setErrorObj] = useState({});

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    mutateAsync: submitSignInForm,
    isPending,
    error: objError,
  } = useSubmitSignInForm();

  async function onSubmit(values: z.infer<typeof signinSchema>) {
    const userData = await submitSignInForm(values);

    if (userData.success) {
      if (Array.isArray(userData.user)) {
        toast({
          description: userData.message,
        });

        // dispatch the action to update the user data
        dispatch(updateConnexionData(userData.user[0]));
        dispatch(clearPersistor());
      } else {
        toast({
          description: "User Company information not found",
        });
      }

      // redirect the user to the next step
      switch (userData.user?.[0].step) {
        case "information":
          dispatch(jumpStep(1));
          router.push("/signup/business");
          break;
        case "adresse":
          dispatch(jumpStep(2));
          router.push("/signup/business");
          break;
        case "actionnaire":
          dispatch(jumpStep(3));
          router.push("/signup/business");
          break;
        case "legal":
          dispatch(jumpStep(4));
          router.push("/signup/business");
          break;
        case "validation":
          dispatch(jumpStep(5));
          router.push("/signup/business");
          break;
        default:
          dispatch(jumpStep(6));
          router.push("/signin/get-otp");
          break;
      }
    } else {
      setErrorObj(transformedSignInErrorObject(userData));
      // Handle the error case
      toast({
        description: userData.message || "Une erreur s'est produite",
      });
    }
  }

  // Handle the network error case
  if (objError) {
    toast({
      description: objError.message,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] leading-4 text-black">
                Adresse Mail
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Votre adresse mail"
                  className="form-input h-[50px] bg[#F3F3F3] text-black focus:ring-primary invalid:border-red-500 placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
                  {...field}
                />
              </FormControl>
              {errorObj && field.name in errorObj ? (
                <small className="text-xs text-red-600 align-right">
                  {errorObj.email as string}
                </small>
              ) : (
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              )}{" "}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] leading-4 text-black">
                Mot de passe
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Votre mot de passe"
                  className="form-input h-[50px] bg-[#F3F3F3] text-black focus:ring-primary invalid:border-red-500 placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
                  {...field}
                />
              </FormControl>
              {errorObj && field.name in errorObj ? (
                <small className="text-xs text-red-600 align-right">
                  {errorObj.password as string}
                </small>
              ) : (
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              )}{" "}
            </FormItem>
          )}
        />

        <div className="py-3 flex items-center gap-2">
          <Button
            type="submit"
            className="w-[186px] h-[50px] bg-primary rounded-md text-white  my-3"
            disabled={isPending}
          >
            {isPending ? (
              <CgSpinner size={20} className="animate-spin" />
            ) : (
              "Suivant"
            )}
          </Button>
          <Link
            href="/signup"
            className="flex-center rounded-md inline-block flex-1 h-[50px] text-[12px] leading-[19px] bg-background px-1"
          >
            Pas encore de compte?{" "}
            <strong className="ml-[2px]">Inscrivez vous</strong>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
