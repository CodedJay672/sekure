"use client";

import React, { useEffect, useState } from "react";
import UserCard from "@/components/Cards/UserCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/_lib/redux/hooks";
import { createUser } from "@/_lib/features/Auth/authSlice";
import { createUserAccount } from "@/_lib/actions";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

const Validation: React.FC = () => {
  const router = useRouter();
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth?.user);

  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if (userData) {
      try {
        const parsedUserData = JSON.parse(userData);
        dispatch(createUser(parsedUserData));
      } catch (error) {
        console.log("error getting user data" + error);
      }
    }
  }, []);

  const { mutate: signUp, data } = useMutation({
    mutationKey: ["createUser", state],
    mutationFn: async () => {
      return await createUserAccount(state);
    },
    onSuccess: () => {
      toast({
        description: data?.message,
      });
      router.push("/signin");
    },
    onError: (error) => {
      toast({
        description: error?.message,
      });
    },
  });

  const handleSubmit = () => {
    signUp();
  };

  return (
    <div className="flex flex-col gap-4">
      <span className="text-[12px] leading-[17px] font-normal text-[#8F8F8F]">
        Vérifiez vos informations pour les envoyer pour validation
      </span>
      <div className="w-full px-[15px] py-[18px] rounded-[19px] border flex flex-col gap-[25px]">
        <div className="w-[400px]">
          <h2 className="text-[12px] leading-[17px] font-semibold mb-3">
            {state?.name_company}
          </h2>
          <p className="text-[12px] leading-[18px]">
            {state?.name_company} est une fintech qui permet de faire des
            paiements de facture et en sans vous deplacer
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 place-content-stretch">
          <div>
            <p className="text-[12px] leading-[18px] font-normal">Nom Légal</p>
          </div>
          <div className="col-span-3 pl-1">
            <p className="text-[12px] leading-[18px] font-normal">
              {state?.name_company?.toUpperCase()}
            </p>
          </div>
          <div>
            <p className="text-[12px] leading-[18px] font-normal">
              Type d’entreprise
            </p>
          </div>
          <div className="col-span-3 pl-1">
            <p className="text-[12px] leading-[18px] font-normal">
              {state?.sector_activity_company?.toUpperCase()}
            </p>
          </div>
          <div>
            <p className="text-[12px] leading-[18px] font-normal">Secteur</p>
          </div>
          <div className="col-span-3 pl-1">
            <p className="text-[12px] leading-[18px] font-normal">
              {state?.sector_activity_company?.toUpperCase()}
            </p>
          </div>
          <div>
            <p className="text-[12px] leading-[18px] font-normal">
              Adresse légale
            </p>
          </div>
          <div className="col-span-3 pl-1">
            <p className="text-[12px] leading-[18px] font-normal">
              {state?.city_company?.toUpperCase()}
            </p>
          </div>
          <div>
            <p className="text-[12px] leading-[18px] font-normal">Numéros</p>
          </div>
          <div className="col-span-3 pl-1">
            <p className="text-[12px] leading-[18px] font-normal">
              {state?.phone_company}
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
        name={state?.full_name_user}
        email={state?.email_user}
        poste={state?.poste_user}
        parte={state?.pourcentage_action_user}
      />

      <br />
      <div className="w-full flex justify-between gap-2">
        <Button
          type="button"
          className="w-[224.24px] h-[50px] bg-transparent border-2 border-primary font-semibold text-primary"
        >
          Retour
        </Button>
        <Button
          className="primary-btn w-[224.24px] h-[50px]"
          onClick={() => handleSubmit()}
        >
          Continuer
        </Button>
      </div>
    </div>
  );
};

export default Validation;
