"use client";

import { useEffect, useState } from "react";
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

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { useToast } from "@/hooks/use-toast";
import { CgSpinner } from "react-icons/cg";
import { signUpDataType, signupSchema } from "@/_validation/SignUp";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserCompany } from "@/_data/user";
import { createUser, updateUserObj } from "@/_lib/features/Auth/authSlice";
import { transformedSignInErrorObject } from "@/utils";
import { signInErrorType } from "@/_validation/SignIn";

const SignupForm = () => {
  const [errorResponse, setErrorResponse] = useState({});
  const router = useRouter();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth.newUserData);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      ...state,
    },
  });

  const {
    mutate: createUserCompanyMutation,
    data,
    isSuccess,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["signup"],
    mutationFn: async (userValues: signUpDataType) => {
      return await createUserCompany(userValues);
    },
    onSuccess: (data) => {
      if ("user" in data) {
        queryClient.invalidateQueries({ queryKey: ["signup"] });
        dispatch(updateUserObj(data));
        toast({
          description: data.message,
        });
        return router.push("/signup/business");
      }

      const error = data as signInErrorType;
      setErrorResponse(transformedSignInErrorObject(error));
      toast({
        description: "Something went wrong",
      });
    },
    onError: (error) => {
      toast({
        description: error.message,
      });
    },
  });

  function onSubmit(values: z.infer<typeof signupSchema>) {
    createUserCompanyMutation(values);
    dispatch(createUser(values));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="full_name_user"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[12px] leading-6">
                Nom complet
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Entrez votre nom comme sur votre pièce d’identité"
                  className="form-input h-[50px] bg-[#F3F3F3] text-[12px] leading-3 text-black font-medium invalid:ring-red-500 focus:ring-primary placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
                  {...field}
                />
              </FormControl>
              {field.name in errorResponse ? (
                <small className="text-xs text-red-600 align-right">
                  {errorResponse[field.name] as string}
                </small>
              ) : (
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              )}{" "}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email_user"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[10px] leading-[15px] font-normal">
                Adresse email proféssionnelle
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Votre adresse mail"
                  {...field}
                  className="form-input h-[50px] bg-[#F3F3F3] text-[12px] leading-3 text-black font-medium invalid:ring-red-500 focus:ring-primary placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
                />
              </FormControl>
              {field.name in errorResponse ? (
                <small className="text-xs text-red-600 align-right">
                  {errorResponse[field.name] as string}
                </small>
              ) : (
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              )}{" "}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name_company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[12px] leading-6">
                Nom de l’entreprise
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Entrez le nom de votre entreprise"
                  {...field}
                  className="form-input h-[50px] bg-[#F3F3F3] text-[12px] text-black leading-3 font-medium invalid:ring-red-500 focus:ring-primary placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
                />
              </FormControl>
              {field.name in errorResponse ? (
                <small className="text-xs text-red-600 align-right">
                  {errorResponse[field.name] as string}
                </small>
              ) : (
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              )}{" "}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country_company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[10px] leading-[15px] font-normal">
                Pays
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Entrez le nom de votre entreprise"
                  {...field}
                  className="form-input h-[50px] bg-[#F3F3F3] text-[12px] leading-3 text-black font-medium invalid:ring-red-500 focus:ring-primary placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
                />
              </FormControl>
              {field.name in errorResponse ? (
                <small className="text-xs text-red-600 align-right">
                  {errorResponse[field.name] as string}
                </small>
              ) : (
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              )}{" "}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email_company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[10px] leading-[15px] font-normal">
                Adresse email l&apos;entreprise
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Votre adresse mail"
                  {...field}
                  className="form-input h-[50px] bg-[#F3F3F3] text-[12px] leading-3 text-black font-medium invalid:ring-red-500 focus:ring-primary placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
                />
              </FormControl>
              {field.name in errorResponse ? (
                <small className="text-xs text-red-600 align-right">
                  {errorResponse[field.name] as string}
                </small>
              ) : (
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              )}{" "}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password_user"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[10px] leading-[15px] font-normal">
                Mot de passe
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Votre mot de passe"
                  {...field}
                  className="form-input h-[50px] bg-[#F3F3F3] text-[12px] leading-3 text-black font-medium invalid:ring-red-500 focus:ring-primary placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
                />
              </FormControl>
              {field.name in errorResponse ? (
                <small className="text-xs text-red-600 align-right">
                  {errorResponse[field.name] as string}
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
            disabled={isPending}
            className="w-[186px] h-[50px] bg-primary rounded-md text-white  my-3"
          >
            {isPending ? (
              <CgSpinner size={20} className="animate-spin" />
            ) : (
              "Créer mon compte"
            )}
          </Button>
          <Link
            href="/signin"
            className="flex-center rounded-md inline-block flex-1 h-[50px] text-[12px] leading-[19px] bg-background"
          >
            Déjà inscrit?{" "}
            <span className="font-bold ml-[2px]">Connectez-vous</span>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default SignupForm;
