"use client";

import React, { useState } from "react";
import {} from "react";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { createUser } from "@/_lib/features/Auth/authSlice";
import { CgSpinner } from "react-icons/cg";
import { ActionnairesSchema } from "@/_validation/SignUp";

interface VousFormProps {
  onPageChange: (page: string) => void;
}

const VousForm: React.FC<VousFormProps> = ({ onPageChange }) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth.newUserData);
  const [isLoading, setisLoading] = useState(false);

  const form = useForm<z.infer<typeof ActionnairesSchema>>({
    resolver: zodResolver(ActionnairesSchema),
    defaultValues: {
      ...state,
    },
  });

  function onSubmit(values: z.infer<typeof ActionnairesSchema>) {
    setisLoading(true);
    dispatch(createUser(values));
    onPageChange("home");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="w-full px-[15px] py-[18px] rounded-[19px] border space-y-3">
          <span className="text-[13px] leading-[17px] font-semibold">
            Details
          </span>
          <FormField
            control={form.control}
            name="poste_user"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">Poste User</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez votre nom comme sur votre pièce d’identité"
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
            name="email_user"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Votre adresse mail"
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
            name="phone_user"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">Phone User</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez votre nom comme sur votre pièce d’identité"
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
            name="pourcentage_action_user"
            render={({ field }) => (
              <FormItem>
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
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="director"
            render={({ field }) => (
              <FormItem>
                <div className="flex-between">
                  <FormLabel className="text-[12px] leading-[24px] font-light">
                    Le Directeur est politiquement exposé
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex-between relative"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl className="peer-checked:text-primary">
                          <RadioGroupItem value="non" />
                        </FormControl>
                        <FormLabel className="text-[12px] leading-[18px] text-[#808080]">
                          Non
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="oui" />
                        </FormControl>
                        <FormLabel className="text-[12px] leading-[18px] text-[#808080]">
                          Oui
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                </div>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />
        </div>
        <br />
        <FormField
          control={form.control}
          name="receive_mail"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-1 text-white font-bold"
                />
              </FormControl>
              <div className="leading-none">
                <FormLabel className="text-[10px] leading-[15px] font-normal text-[#808080]">
                  Je certifie la conformité des informations remplies dans ce
                  formulaire
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <div className="w-full flex justify-between gap-2 mt-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="primary-btn w-[224.24px] h-[50px]"
          >
            {isLoading ? (
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

export default VousForm;
