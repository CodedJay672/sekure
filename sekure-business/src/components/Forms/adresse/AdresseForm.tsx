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
  createUser,
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
import CustomInput from "@/components/ui/shared/CustomInputs/CustomInput";

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
        dispatch(createUser(values));
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
                  <CustomInput
                    type="text"
                    label="Localisation"
                    placeholder="Cameroun"
                    field={field}
                    error={errorResponse}
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="zip"
              render={({ field }) => (
                <FormItem>
                  <CustomInput
                    type="text"
                    label="Code Postal / ZIP"
                    placeholder="Cameroun"
                    field={field}
                    error={errorResponse}
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <CustomInput
                    type="text"
                    label="Ville / City"
                    placeholder="Cameroun"
                    field={field}
                    error={errorResponse}
                  />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  type="text"
                  label="Quartier / Street"
                  placeholder="Cameroun"
                  field={field}
                  error={errorResponse}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="appartement"
            render={({ field }) => (
              <FormItem>
                <CustomInput
                  type="text"
                  label="Appartement / Suite / Etage/ Point repère"
                  placeholder="Cameroun"
                  field={field}
                  error={errorResponse}
                />
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
              <>
                <CgSpinner size={20} className="animate-spin mr-5" /> Loading...
              </>
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
