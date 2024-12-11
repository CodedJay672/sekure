"use client";

import React, { useState } from "react";
import { RxCaretRight } from "react-icons/rx";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { nextStep, previousStep } from "@/_lib/features/Auth/authSlice";
import { CgSpinner } from "react-icons/cg";

interface ActionnairesProps {
  onPageChange: (page: string) => void;
}

const Actionnaires: React.FC<ActionnairesProps> = ({ onPageChange }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth.newUserData);

  const ActionSchema = z.object({
    receive_mail: z.boolean().default(false).optional(),
  });

  const form = useForm<z.infer<typeof ActionSchema>>({
    resolver: zodResolver(ActionSchema),
  });

  function onSubmit(values: z.infer<typeof ActionSchema>) {
    setIsLoading(true);
    dispatch(nextStep());
  }

  return (
    <div className="w-[473px] mx-auto mt-[2px] mb-4">
      <div className="w-[443px] mt-[33px] mb-[25px]">
        <span className="text-[12px] leading-[17px] font-normal">
          Veuillez ajouter des informations par rapport à vous meme, et un autre
          membre de l’entreprise avec au moins 25% de parts dans l’entreprise
        </span>
      </div>

      <div className="flex items-center py-[18px] px-[15px] border rounded-[18px] cursor-pointer">
        <div className="w-[48px] h-[48px] rounded-full bg-primary mr-5" />
        <div className="flex-1 flex items-center">
          <div className="flex-1">
            <h2 className="font-semibold text-[13px] leading-[17px]">
              {state.full_name_user}
            </h2>
            <span className="text-[12px] leading-[24px] font-normal text-[#242424]">
              Donnez plus d’informations sur vous
            </span>
          </div>
          <RxCaretRight size={30} />
        </div>
      </div>

      <div
        className="flex items-center py-[18px] px-[15px] border rounded-[18px] mt-[15px] mb-[101px] cursor-pointer"
        onClick={() => onPageChange("adjourter")}
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
