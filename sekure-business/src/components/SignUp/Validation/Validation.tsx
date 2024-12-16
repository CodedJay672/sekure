"use client";

import React from "react";
import UserCard from "@/components/Cards/UserCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/_lib/redux/hooks";
import { previousStep, updateUserObj } from "@/_lib/features/Auth/authSlice";
import { useToast } from "@/hooks/use-toast";
import { CgSpinner } from "react-icons/cg";
import { useSubmitValidationForm } from "@/components/react-query/queriesAndMutations";

const Validation: React.FC = () => {
  const router = useRouter();
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth.userObj);
  const { user, company } = state;

  const {
    mutateAsync: signUpUser,
    isPending,
    error: mutationError,
  } = useSubmitValidationForm();

  const handleSubmit = async () => {
    if (user.id === undefined || company.id === undefined) {
      return toast({
        description: "Une erreur s'est produite, veuillez réessayer",
      });
    }

    const signUpUserResponse = await signUpUser({
      user_id: user.id,
      company_id: company.id,
    });

    if (signUpUserResponse.status) {
      toast({
        description: signUpUserResponse.message,
      });
      dispatch(updateUserObj(signUpUserResponse));
      if (signUpUserResponse.user?.step === "completed") {
        return router.push("get-otp");
      }
    }

    toast({
      description: signUpUserResponse.message,
    });
  };

  if (mutationError) {
    toast({
      description: "Une erreur s'est produite, veuillez réessayer",
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <span className="text-[12px] leading-[17px] font-normal text-[#8F8F8F]">
        Vérifiez vos informations pour les envoyer pour validation
      </span>
      <div className="w-full px-[15px] py-[18px] rounded-[19px] border flex flex-col gap-[25px]">
        <div className="w-[400px]">
          <h2 className="text-[12px] leading-[17px] font-semibold mb-3">
            {state?.company?.name}
          </h2>
          <p className="text-[12px] leading-[18px]">
            {state?.company?.name} est une fintech qui permet de faire des
            paiements de facture et en sans vous deplacer
          </p>
        </div>

        <div className="flex flex-col gap-4 place-content-stretch">
          <div className="flex items-center gap-3">
            <p className="text-[12px] leading-[18px] font-normal w-1/3">
              Nom Légal
            </p>
            <p className="text-[12px] leading-[18px] font-normal flex-1">
              {state?.company?.name?.toUpperCase()}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[12px] leading-[18px] font-normal w-1/3">
              Type d’entreprise
            </p>
            <p className="text-[12px] leading-[18px] font-normal flex-1">
              {state?.company?.sector_activity?.toUpperCase()}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[12px] leading-[18px] font-normal w-1/3">
              Secteur
            </p>
            <p className="text-[12px] leading-[18px] font-normal flex-1">
              {state?.company?.sector_activity?.toUpperCase()}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[12px] leading-[18px] font-normal w-1/3">
              Adresse légale
            </p>
            <p className="flex items-center gap-3 flex-1">
              {state?.company?.address}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[12px] leading-[18px] font-normal w-1/3">
              Numéros
            </p>
            <p className="text-[12px] leading-[18px] font-normal flex-1">
              {state?.company?.phone}
            </p>
          </div>
        </div>

        <div className="flex gap-[57px]">
          <div>
            <span className="text-[12px] leading-[18px]">Document</span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex bg-[#F3F3F3] w-[317px] py-3 px-6 gap-3 rounded-[4px]">
              <Image
                src={`/assets/icons-pack/uploadDocument.png`}
                alt="uploaded document"
                width={14.22}
                height={14.65}
              />
              <div className="flex-1">
                <span className="text-[10px] leading-[13.px] text-[#101010]">
                  Certificat de constitution d’entreprise
                </span>
              </div>
            </div>
            <div className="flex bg-[#F3F3F3] w-[317px] py-3 px-6 gap-3 rounded-[4px]">
              <Image
                src="/assets/icons-pack/uploadDocument.png"
                alt="uploaded document"
                width={14.22}
                height={14.65}
              />
              <div className="flex-1">
                <span className="text-[10px] leading-[13.px] text-[#101010]">
                  Certificat de constitution d’entreprise
                </span>
              </div>
            </div>
            <div className="flex bg-[#F3F3F3] w-[317px] py-3 px-6 gap-3 rounded-[4px]">
              <Image
                src="/assets/icons-pack/uploadDocument.png"
                alt="uploaded document"
                width={14.22}
                height={14.65}
              />
              <div className="flex-1">
                <span className="text-[10px] leading-[13.px] text-[#101010]">
                  Certificat de constitution d’entreprise
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserCard
        name={state?.user?.full_name}
        email={state?.user?.email}
        poste={state?.user?.poste}
        parte={state?.user?.pourcentage_action}
      />
      <div className="w-full flex justify-between gap-2">
        <Button
          type="button"
          className="w-[224.24px] h-[50px] bg-transparent border-2 border-primary font-semibold text-primary"
          onClick={() => dispatch(previousStep())}
        >
          Retour
        </Button>
        <Button
          disabled={isPending}
          className="primary-btn w-[224.24px] h-[50px]"
          onClick={() => handleSubmit()}
        >
          {isPending ? (
            <CgSpinner size={20} className="animate-spin" />
          ) : (
            "Continuer"
          )}
        </Button>
      </div>
    </div>
  );
};

export default Validation;
