"use client";

import React from "react";
import Card from "@/components/Cards/Cards";
import { Button } from "@/components/ui/button";
import Active from "@/components/ui/shared/Active";
import CardNumber from "@/components/ui/shared/CardNumber";
import VisaCard from "@/components/ui/shared/VisaCard";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import { RiAddCircleFill } from "react-icons/ri";
import CartesTable from "@/components/Table/Cartes/CartesTable";
import { useParams, useRouter } from "next/navigation";
import { useGetCardDetailsQuery } from "@/components/react-query/queriesAndMutations";
import LoadingSpinner from "@/components/Alert/Loading";

const CardDetails: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();

  const cardDetails = useGetCardDetailsQuery(id as unknown as number);

  if (cardDetails.isPending) {
    return (
      <div className="flex-1 flex-center min-h-dvh">
        <LoadingSpinner />
      </div>
    );
  }

  if (!cardDetails.data?.status) {
    return (
      <div className="flex-1 flex-center min-h-dvh">
        <h1 className="text-base leading-5 text-gray-400">
          {cardDetails.data?.message}
        </h1>
      </div>
    );
  }

  return (
    <section className="wrapper max-w-full">
      <div className="max-w-[354px] flex flex-col gap-3 rounded-[10px]">
        <div className="bg-white flex flex-col py-6 px-4 rounded-[10px]">
          <div className="flex-between">
            <h1 className="text-base leading-5 font-semibold text-dark3 flex-1">
              Details de carte
            </h1>
            <Active active={cardDetails?.data?.data?.active} />
          </div>
          <span className="flex-1 text-xs leading-4 text-placeholder-text">
            Créé le{" "}
            {new Date(cardDetails?.data?.data?.created_at).toLocaleDateString(
              "fr-FR",
              {
                dateStyle: "long",
              }
            )}
          </span>
          <VisaCard
            holder={`${cardDetails?.data?.data?.customer?.first_name} ${cardDetails?.data?.data?.customer?.last_name}`}
            number={cardDetails?.data?.data?.card_number}
            cvv={cardDetails?.data?.data?.cvv}
            expiry={cardDetails?.data?.data?.expiry_date}
            type={cardDetails?.data?.data?.type}
          />

          <div className="flex-between mt-3">
            <span className="text-xs leading-[34.5px] tracking-[-0.5%] font-medium text-dark3">
              Solde de la carte
            </span>
            <span className="text-xs leading-[34.5px] tracking-[-0.5%] font-bold text-dark3 pr-2">
              $54200.50
            </span>
          </div>
          <div className="flex-between mt-3">
            <Button
              variant="default"
              type="button"
              className="primary-btn rounded-[9px] w-[154px] text-xs leading-[34.5px] -tracking-[0.5%] font-normal pr-[3px]"
              onClick={() => router.push("/card/create-card")}
            >
              Créer une carte
              <RiAddCircleFill
                size={24}
                color="white"
                className="fill-white ml-4"
              />
            </Button>

            <Button
              type="button"
              className="bg-black rounded-[9px] w-[164px] text-white text-xs leading-[34.5px] -tracking-[0.5%] font-normal pr-[2px]"
            >
              Recharger une carte
              <div className="w-5 h-5 rounded-full bg-white p-1 ml-[2px] flex-center">
                <Image
                  src="/assets/icons-pack/forward-arrow.svg"
                  alt="deposit"
                  width={24}
                  height={24}
                  className="object-contain"
                  onClick={() => router.push("/recharge-wallet")}
                />
              </div>
            </Button>
          </div>
        </div>
        <div className="w-[354px] py-3 px-4 bg-white flex flex-col rounded-[10px]">
          <CardNumber
            heading="ID de carte"
            number={cardDetails?.data?.data?.id}
          />
          <CardNumber
            heading="Numéro de carte"
            number={cardDetails?.data?.data?.card_number}
          />
          <CardNumber
            heading="Nom sur carte"
            number={`${cardDetails?.data?.data?.customer?.first_name} ${cardDetails?.data?.data?.customer?.last_name}`}
          />
          <CardNumber
            heading="Date exp"
            number={cardDetails?.data?.data?.expiry_date}
          />
          <CardNumber heading="CVV" number={cardDetails?.data?.data?.cvv} />
        </div>
        <div className="w-[354px] py-3 px-4 bg-white flex flex-col rounded-[10px]">
          <Button variant="default" type="button" className="bg-danger">
            <span className="w-full flex-1 text-white">Supprimer la carte</span>
            <RiAddCircleFill size={24} className="fill-white ml-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="w-full flex-between gap-2">
          <Card
            data1={{ title: "Total paiements", value: "$54200.50" }}
            data2={{ title: "activées", value: "1437" }}
            data3={{ title: "suspendues", value: "46" }}
          />
          <Card
            data1={{ title: "Total paiements", value: "$54200.50" }}
            data2={{ title: "activées", value: "1437" }}
            data3={{ title: "suspendues", value: "46" }}
          />
          <Card
            data1={{ title: "Total paiements", value: "$54200.50" }}
            data2={{ title: "activées", value: "1437" }}
            data3={{ title: "suspendues", value: "46" }}
          />
        </div>
        <div className="bg-white mt-3  px-2 py-3 rounded-[10px] ">
          <h2 className="text-base leading-6 font-semibold">
            Liste des transactions
          </h2>
          <div className="w-full flex-between mt-2 gap-2">
            <div className="max-w-[108px] h-8 rounded-[5px] bg-notif">
              <span className="text-xs leading-[34.5px] tracking-[-0.5px] text-center font-normal text-placeholder-text px-2">
                Date de debut
              </span>
            </div>
            <div className="max-w-[108px] h-8 rounded-[5px] bg-notif">
              <span className="text-xs leading-[34.5px] tracking-[-0.5px] text-center font-normal text-placeholder-text px-2">
                Date de Fin
              </span>
            </div>
            <div className="max-w-[108px] h-8 rounded-[5px] bg-primary-fade flex-center px-3 gap-1">
              <IoCopyOutline size={12} color="#18BC7A" />
              <span className="text-xs leading-[34.5px] tracking-[-0.5px] text-center font-normal text-[#18BC7A]">
                Filtrer
              </span>
            </div>
          </div>
          <CartesTable />
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
