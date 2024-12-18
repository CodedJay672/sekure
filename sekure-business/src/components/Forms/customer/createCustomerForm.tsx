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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useAppSelector } from "@/_lib/redux/hooks";
import { useCreateCustomerMutation } from "@/components/react-query/queriesAndMutations";
import React from "react";
import { customerInformationSchema } from "./validation";
import { CgSpinner } from "react-icons/cg";
import { useToast } from "@/hooks/use-toast";

const CreateCustomerForm: React.FC = () => {
  const { toast } = useToast();
  const user = useAppSelector((state) => state.connexion?.user?.[0]);

  const {
    mutateAsync: createCustomer,
    isPending: isCreatingCustomer,
    error: mutationError,
  } = useCreateCustomerMutation();

  const form = useForm<z.infer<typeof customerInformationSchema>>({
    resolver: zodResolver(customerInformationSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      country: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof customerInformationSchema>) {
    const createCustomerResponse = await createCustomer({
      company_id: user.user_company?.[0]?.id ?? 0,
      created_by: user.id ?? 0,
      values,
    });

    if (createCustomerResponse.success) {
      toast({
        description: createCustomerResponse.message,
      });
      form.reset();
    }

    if (!createCustomerResponse.success) {
      toast({
        description: createCustomerResponse.message,
      });
    }
  }

  if (mutationError) {
    toast({
      description: mutationError.message,
    });
  }

  return (
    <div className="w-full flex-center flex-col gap-4">
      <span className="taxt-[13px] leading-[17px] text-[#242424] font-semibold mt-3">
        Register a new user
      </span>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">Prénom</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez votre prénom"
                    {...field}
                    className="input pr-20"
                  />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">
                  Nom de famille
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez votre nom"
                    className="input pr-20"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">Pays</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez votre nom"
                    {...field}
                    className="input pr-20"
                  />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">
                  Adresse mail
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Votre adresse mail"
                    {...field}
                    className="input pr-20"
                  />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />
          <div className="w-full mt-6 flex place-content-center">
            <Button
              type="submit"
              className="primary-btn w-[224.24px] h-[50px]"
              disabled={isCreatingCustomer}
            >
              {isCreatingCustomer ? (
                <CgSpinner size={20} className="animate-spin" />
              ) : (
                "Confirmer"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateCustomerForm;
