"use client";

import React, { useEffect, useState } from "react";
import { RxCaretRight } from "react-icons/rx";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { createStakeholder, createUser } from "@/_lib/features/Auth/authSlice";
import { CgSpinner } from "react-icons/cg";

const Actionnaires: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth.user);
  const stakeholders = useAppSelector((state) => state.auth.stakeholders);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const stakeholders = localStorage.getItem("stakeholderData");

    if (userData) {
      try {
        const parsedUserData = JSON.parse(userData);
        const parsedStakeholders = JSON.parse(stakeholders!);
        dispatch(createUser(parsedUserData));
        if (parsedStakeholders) {
          dispatch(createStakeholder(parsedStakeholders));
        }
      } catch (error) {}
    }
  }, []);

  const ActionSchema = z.object({
    receive_mail: z.boolean().default(false).optional(),
  });

  const form = useForm<z.infer<typeof ActionSchema>>({
    resolver: zodResolver(ActionSchema),
    defaultValues: {
      receive_mail: false,
    },
  });

  function onSubmit(values: z.infer<typeof ActionSchema>) {
    setIsLoading(true);
    router.push(`/signup/business/legal`);
  }

  return (
    <div className="w-[473px] mt-[2px] mb-4">
      <div className="w-[443px] mt-[33px] mb-[25px]">
        <span className="text-[12px] leading-[17px] font-normal">
          Veuillez ajouter des informations par rapport à vous meme, et un autre
          membre de l’entreprise avec au moins 25% de parts dans l’entreprise
        </span>
      </div>

      <div
        className="flex items-center py-[18px] px-[15px] border rounded-[18px] cursor-pointer"
        onClick={() => router.push(`${pathname}/vous`)}
      >
        <div className="w-[48px] h-[48px] rounded-full bg-primary mr-5" />
        <div className="flex-1 flex items-center">
          <div className="flex-1">
            <h2 className="font-semibold text-[13px] leading-[17px]">Vous</h2>
            <span className="text-[12px] leading-[24px] font-normal text-[#242424]">
              Donnez plus d’informations sur vous
            </span>
          </div>
          <RxCaretRight size={30} />
        </div>
      </div>

      {stakeholders &&
        stakeholders.length > 0 &&
        stakeholders.map((stakeholder, index) => (
          <div
            key={index}
            className="flex items-center py-[18px] px-[15px] border rounded-[18px] mt-[15px] cursor-pointer"
          >
            <div className="w-[48px] h-[48px] rounded-full bg-primary mr-5" />
            <div className="flex-1 flex items-center">
              <div className="flex-1">
                <h2 className="font-semibold text-[13px] leading-[17px]">
                  {stakeholder.full_name_user}
                </h2>
                <span className="text-[12px] leading-[24px] font-normal text-[#242424]">
                  Donnez plus d’informations sur vous
                </span>
              </div>
              <RxCaretRight size={30} />
            </div>
          </div>
        ))}

      <div
        className="flex items-center py-[18px] px-[15px] border rounded-[18px] mt-[15px] mb-[101px] cursor-pointer"
        onClick={() => router.push(`${pathname}/adjourter`)}
      >
        <div className="w-[48px] h-[48px] rounded-full bg-[#F5F5F5] mr-5 flex-center text-[24px] font-semibold">
          +
        </div>
        <div className="flex-1 flex items-center">
          <div className="flex-1">
            <h2 className="font-semibold text-[13px] leading-[17px]">
              Ajouter um membre de la direction
            </h2>
            <span className="text-[12px] leading-[24px] font-normal text-[#242424]">
              Donnez plus d’informations sur vous
            </span>
          </div>
          <RxCaretRight size={30} />
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
                    Je confirme que mon entreprise est dument enregistrée et
                    possède les autorisations et licences légales pour opérer
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <br />
          <div className="w-full flex justify-between">
            <Button
              type="submit"
              className="border-2 border-primary w-[224.24px] h-[50px] bg-transparent text-primary font-bold"
            >
              Retour
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="primary-btn w-[224.24px] h-[50px]"
            >
              {isLoading ? (
                <CgSpinner size={20} className="animate-spin" />
              ) : (
                "Continuer"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Actionnaires;
