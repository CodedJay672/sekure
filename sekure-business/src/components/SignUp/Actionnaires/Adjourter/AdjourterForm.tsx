"use client";

import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FileUploader from "@/components/ui/shared/FileUploader";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import {
  createUser,
  nextStep,
  updateUserObj,
} from "@/_lib/features/Auth/authSlice";
import { CgSpinner } from "react-icons/cg";
import { actionairesDataType, ActionnairesSchema } from "@/_validation/SignUp";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { signupActionnaire } from "@/_data/user";
import { IError } from "@/utils/types/SignupTypes";
import { transformedErrorObject } from "@/utils";

interface AdjourterFormProps {
  onPageChange: (page: string) => void;
}

const AdjourterForm: React.FC<AdjourterFormProps> = ({ onPageChange }) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth);
  const { userObj, newUserData } = state;
  const [errorResponse, setErrorResponse] = useState({});

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { mutate: signupActionnaireMutation, isPending } = useMutation({
    mutationKey: ["signUpAdjourterMutation"],
    mutationFn: async ({
      infoDetails,
      user_id,
      company_id,
    }: {
      infoDetails: FormData;
      user_id: number;
      company_id: number;
    }) => {
      return await signupActionnaire(infoDetails, user_id, company_id);
    },
    onSuccess: (data) => {
      if ("user" in data) {
        queryClient.invalidateQueries({ queryKey: ["signupInformation"] });
        toast({
          description: data.message,
        });
        dispatch(updateUserObj(data));
        return dispatch(nextStep());
      }

      const errorObj = data as IError;
      setErrorResponse(transformedErrorObject(errorObj));
      toast({
        description: "Something went wrong.",
      });
    },
    onError: (error) => {
      toast({
        description: error?.message,
      });
    },
  });

  const form = useForm<z.infer<typeof ActionnairesSchema>>({
    resolver: zodResolver(ActionnairesSchema),
    defaultValues: {
      poste: newUserData.poste,
      date_birth: newUserData.date_birth,
      Pourcentage_action: newUserData.Pourcentage_action,
      nationality: newUserData.nationality,
      localisation: newUserData.localisation,
      appartement: newUserData.appartement,
      city: newUserData.city,
      etat: newUserData.etat,
      zip: newUserData.zip,
      document1_user: undefined,
      document2_user: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof ActionnairesSchema>) {
    const formData = new FormData();

    for (const key in values) {
      if (key === "document1_user" || key === "document2_user") {
        if (values[key as keyof typeof values] !== undefined) {
          formData.append(
            key,
            (values[key as keyof typeof values] as File[])[0]
          );
        }
      } else {
        formData.append(
          key,
          values[key as keyof typeof values] as string | Blob
        );
      }
    }
    //create new values with the file url string
    const newValues = {
      ...values,
      document1_user: values.document1_user
        ? URL.createObjectURL(values.document1_user[0])
        : "",
      document2_user: values.document2_user
        ? URL.createObjectURL(values.document2_user[0])
        : "",
    };

    if (userObj.user.id && userObj.company.id) {
      signupActionnaireMutation({
        infoDetails: formData,
        user_id: userObj.user.id,
        company_id: userObj.company.id,
      });

      return dispatch(createUser(newValues));
    }

    toast({
      description: "Could not find a valid ID",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <div className="w-full px-[15px] py-[18px] rounded-[19px] border">
          <span className="text-[13px] leading-[17px] font-semibold">
            Details
          </span>

          <FormField
            control={form.control}
            name="poste"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">Poste</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez votre nom comme sur votre pièce d’identité"
                    className="input pr-20"
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
            name="date_birth"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">
                  Date de Naissance
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    value={field.value ? field.value.toString() : ""}
                    placeholder="enter date of birth"
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
            name="Pourcentage_action"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">
                  Pourcentage d’actions
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez votre nom comme sur votre pièce d’identité"
                    className="input pr-20"
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
            name="nationality"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">
                  Nationalité
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez votre nom comme sur votre pièce d’identité"
                    className="input pr-20"
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
            name="localisation"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">
                  Localisation User
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Votre adresse mail"
                    className="input pr-20"
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
            name="appartement"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">
                  Appartement, etage
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Votre adresse mail"
                    className="input pr-20"
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
            name="city"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">Cité</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Votre adresse mail"
                    className="input pr-20"
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
            name="etat"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">Etat</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Votre adresse mail"
                    className="input pr-20"
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
              <FormItem className="mt-3">
                <FormLabel className="text-xs font-light">Zip Code</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Votre adresse mail"
                    className="input pr-20"
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

          <br />
          <span className="text-[13px] leading-[17px] font-semibold">
            Adresse Personnelle
          </span>
          <FormField
            control={form.control}
            name="document1_user"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-[12px] leading-[24px] font-light">
                  Ajoutez un document de vérification d’identité ( CNI,
                  Passeport, etc )
                </FormLabel>
                <FormControl>
                  <FileUploader fieldOnChange={field.onChange} />
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
            name="document2_user"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-[12px] leading-[24px] font-light">
                  Ajoutez un document qui justifie votre adresse ( CNI,
                  Passeport, etc )
                </FormLabel>
                <FormControl>
                  <FileUploader fieldOnChange={field.onChange} />
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
        <div className="w-full flex justify-between gap-2">
          <Button
            type="submit"
            disabled={isPending}
            className="primary-btn w-[224.24px] h-[50px]"
          >
            {isPending ? (
              <CgSpinner size={20} className="animate-spin" />
            ) : (
              "Valider et continuer"
            )}
          </Button>
          <Button
            type="button"
            className="w-[224.24px] h-[50px] bg-[#F2F2F2]"
            onClick={() => onPageChange("home")}
          >
            Annuler
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AdjourterForm;
