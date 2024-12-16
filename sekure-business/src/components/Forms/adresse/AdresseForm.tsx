"use client";

import { useState } from "react";
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
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import {
  nextStep,
  previousStep,
  updateUserObj,
} from "@/_lib/features/Auth/authSlice";
import { CgSpinner } from "react-icons/cg";
import { AdresseSchema } from "@/_validation/SignUp";
import { useToast } from "@/hooks/use-toast";
import { IError } from "@/utils/types/SignupTypes";
import { transformedErrorObject } from "@/utils";
import { useSubmitAdresseForm } from "@/components/react-query/queriesAndMutations";

const AdresseForm = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth);
  const { userObj, newUserData } = state;
  const [errorResponse, setErrorResponse] = useState({});
  const { toast } = useToast();

  const {
    mutateAsync: submitAdresseForm,
    isPending,
    error: mutationError,
  } = useSubmitAdresseForm();

  const form = useForm<z.infer<typeof AdresseSchema>>({
    resolver: zodResolver(AdresseSchema),
    defaultValues: {
      ...newUserData,
    },
  });

  async function onSubmit(values: z.infer<typeof AdresseSchema>) {
    if (userObj.user.id && userObj.company.id) {
      const submitAdresseResponse = await submitAdresseForm({
        infoDetails: values,
        user_id: userObj.user.id,
        company_id: userObj.company.id,
      });

      if (submitAdresseResponse.status) {
        toast({
          description: submitAdresseResponse.message,
        });
        dispatch(updateUserObj(submitAdresseResponse));
        return dispatch(nextStep());
      } else {
        setErrorResponse(
          transformedErrorObject(submitAdresseResponse as IError)
        );
        return;
      }
    }

    toast({
      description: "User or company id not found",
    });
  }

  if (mutationError) {
    toast({
      description: mutationError?.message,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="border border-[#E5E5E5] rounded-[15px] px-3 py-4">
          <div className="flex flex-wrap justify-between">
            <FormField
              control={form.control}
              name="localisation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-light">
                    Localisation
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Cameroun"
                      className="input pr-20 w-full"
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
              name="zip"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-light">
                    Code Postal / ZIP
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Cameroun"
                      {...field}
                      className="input pr-20 w-full"
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
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-light">
                    Ville / City
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Cameroun"
                      {...field}
                      className="input pr-20 w-full"
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
          </div>

          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">
                  Quartier / Street
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez votre nom comme sur votre pièce d’identité"
                    {...field}
                    className="input pr-20"
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
            name="appartement"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">
                  Appartement / Suite / Etage/ Point repère
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez votre nom comme sur votre pièce d’identité"
                    {...field}
                    className="input pr-20"
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
        </div>

        <br />
        <div className="w-full flex justify-between">
          <Button
            type="button"
            className="border-2 border-primary w-[224.24px] h-[50px] bg-transparent text-primary font-bold"
            onClick={() => dispatch(previousStep())}
          >
            Retour
          </Button>
          <Button
            type="submit"
            disabled={isPending}
            className="primary-btn w-[224.24px] h-[50px]"
          >
            {isPending ? (
              <CgSpinner size={20} className="animate-spin" />
            ) : (
              "Continuer"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AdresseForm;
