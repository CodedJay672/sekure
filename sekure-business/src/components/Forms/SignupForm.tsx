"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { useToast } from "@/hooks/use-toast";
import { CgSpinner } from "react-icons/cg";
import { signupSchema } from "@/_validation/SignUp";
import { createUser, updateUserObj } from "@/_lib/features/Auth/authSlice";
import { transformedSignUpErrorObject } from "@/utils";
import { useCreateUserAccount } from "../react-query/queriesAndMutations";
import CustomInput from "../ui/shared/CustomInputs/CustomInput";

const SignupForm = () => {
  const [errorResponse, setErrorResponse] = useState({});
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const newUserData = useAppSelector((state) => state.auth?.newUserData);

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      ...newUserData,
    },
  });

  const {
    mutateAsync: createUserCompanyMutation,
    isPending,
    isError,
    error: errorObj,
  } = useCreateUserAccount();

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    const newUserData = await createUserCompanyMutation(values);

    if (newUserData.status) {
      dispatch(updateUserObj(newUserData));

      toast({
        description: newUserData.message,
      });
      router.push("/signup/business");
    } else {
      setErrorResponse(transformedSignUpErrorObject(newUserData));

      // give error feedback to the user
      toast({
        description: newUserData.message,
      });
    }
    dispatch(createUser(values));
  }

  if (isError) {
    toast({
      description: errorObj?.message,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="full_name_user"
          render={({ field }) => (
            <FormItem>
              <CustomInput
                label="Nom complet"
                placeholder="Entrez votre nom comme sur votre pièce d’identité"
                type="text"
                field={field}
                error={errorResponse}
              />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email_user"
          render={({ field }) => (
            <FormItem>
              <CustomInput
                label="Adresse email proféssionnelle"
                placeholder="Votre adresse mail"
                type="email"
                field={field}
                error={errorResponse}
              />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name_company"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  label="Nom de l’entreprise"
                  placeholder="Entrez le nom de votre entreprise"
                  type="text"
                  field={field}
                  error={errorResponse}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country_company"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  label="Pays"
                  placeholder="Entrez Pays"
                  type="text"
                  field={field}
                  error={errorResponse}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email_company"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  label="Adresse email l'entreprise"
                  placeholder="Votre adresse mail"
                  type="email"
                  field={field}
                  error={errorResponse}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password_user"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  label="Mot de passe"
                  placeholder="Votre mot de passe"
                  type="password"
                  field={field}
                  error={errorResponse}
                />
              </FormItem>
            )}
          />
        </div>

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
