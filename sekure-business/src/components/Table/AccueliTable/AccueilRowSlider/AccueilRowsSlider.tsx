"use client";

import { useGetTransactionDetailsByID } from "@/components/react-query/queriesAndMutations";
import { CopyIcon, Router } from "lucide-react";
import React from "react";
import { CgSpinner } from "react-icons/cg";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

type TAccueilRowsSlider = {
  id: number;
};

const AccueilRowsSlider: React.FC<TAccueilRowsSlider> = ({ id }) => {
  const router = useRouter();
  const transactionDetails = useGetTransactionDetailsByID(id);
  const { created_at } = transactionDetails?.data?.transaction?.[0] || {};

  if (transactionDetails?.isPending) {
    return (
      <div className="size-auto flex-center">
        <CgSpinner size={20} className="animate-spin" />
      </div>
    );
  }

  if (transactionDetails.error) {
    return (
      <p className="text-[10px] font-thin text-gray-500">
        Oops! Could not fetch transaction details. Refresh the page.
      </p>
    );
  }

  return (
    <>
      <span className="font-semibold text-base text-[#1e1e1e]">
        Détails de transaction
      </span>
      <div className="w-full mt-4 grid grid-cols-2">
        <div className="w-1/2 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Type
          </span>
        </div>
        <div className="w-1/2 py-2">
          <span className="font-bold text-[11px] leading-4 text-[#1f1f1f]">
            {transactionDetails?.data?.transaction?.[0]?.type}
          </span>
        </div>
        <div className="w-1/2 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Statut
          </span>
        </div>
        <div className="w-1/2 py-2">
          <span className="font-bold text-[11px] leading-4 text-[#1f1f1f]">
            {transactionDetails?.data?.transaction?.[0]?.status}
          </span>
        </div>
        <div className="w-1/2 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Date
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-4 text-[#1f1f1f]">
            {new Date(created_at as string).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        <div className="w-1/2 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Heure
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-4 text-[#1f1f1f]">
            {new Date(created_at as string).toLocaleDateString("fr-FR", {
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
        </div>
        <div className="w-1/2 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            ID transaction
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-bold text-[11px] leading-4 text-[#1f1f1f] flex items-center">
            {transactionDetails?.data?.transaction?.[0]?.reference}
            <CopyIcon
              size={10}
              className="ml-2"
              onClick={() =>
                navigator.clipboard.writeText(
                  transactionDetails?.data?.transaction?.[0]
                    ?.reference as string
                )
              }
            />
          </span>
        </div>
        <div className="flex-1">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Nom utilisateur
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-4 text-[#1f1f1f] flex items-center">
            {transactionDetails?.data?.transaction?.[0]?.card?.name || "N/A"}
            <CopyIcon
              size={10}
              className="ml-2"
              onClick={() =>
                navigator.clipboard.writeText(
                  transactionDetails?.data?.transaction?.[0]
                    ?.reference as string
                )
              }
            />
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Pays utilisateur
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-4 text-[#1f1f1f] flex items-center">
            {transactionDetails?.data?.transaction?.[0]?.card?.country || "N/A"}
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Num. utilisateur
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-4 text-[#1f1f1f] flex items-center">
            {transactionDetails?.data?.transaction?.[0]?.card?.company || "N/A"}
            <CopyIcon
              size={10}
              className="ml-2"
              onClick={() =>
                navigator.clipboard.writeText(
                  transactionDetails?.data?.transaction?.[0]
                    ?.reference as string
                )
              }
            />
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Moyen de paiement
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-4 text-[#1f1f1f] flex items-center">
            {transactionDetails?.data?.transaction?.[0]?.mode_card || "N/A"}
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Numero debiteur
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-4 text-[#1f1f1f] flex items-center">
            {transactionDetails?.data?.transaction?.[0]?.card?.issuer || "N/A"}
            <CopyIcon
              size={10}
              className="ml-2"
              onClick={() =>
                navigator.clipboard.writeText(
                  transactionDetails?.data?.transaction?.[0]
                    ?.reference as string
                )
              }
            />
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Montant
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-4 text-[#1f1f1f] flex items-center">
            {transactionDetails?.data?.transaction?.[0]?.balance_before_superadmin?.toLocaleString(
              "fr-FR",
              {
                style: "currency",
                currency: "XOF",
              }
            ) || "N/A"}
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Solde préc.
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-4 text-[#1f1f1f] flex items-center">
            {transactionDetails?.data?.transaction?.[0]?.balance_before_company?.toLocaleString(
              "fr-FR",
              {
                style: "currency",
                currency: "XOF",
              }
            ) || "N/A"}
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Montant debité
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-4 text-[#1f1f1f] flex items-center">
            {transactionDetails?.data?.transaction?.[0]?.balance_before_compte?.toLocaleString(
              "fr-FR",
              {
                style: "currency",
                currency: "XOF",
              }
            ) || "N/A"}
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Nouv. solde
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-4 text-[#1f1f1f] flex items-center">
            {transactionDetails?.data?.transaction?.[0]?.balance_after_card?.toLocaleString(
              "fr-FR",
              {
                style: "currency",
                currency: "XOF",
              }
            ) || "N/A"}
          </span>
        </div>
      </div>
      <div className="w-full mt-4 flex flex-col gap-2">
        <button
          className="w-full py-2 text-[#f5f5f5] bg-[#1f1f1f] text-[11px] font-semibold rounded-md"
          onClick={() =>
            router.push(
              `/utilisateur/${transactionDetails?.data?.transaction?.[0]?.card?.owner}`
            )
          }
        >
          voir utilisateur
        </button>
        <button
          className="w-full py-2 bg-primary text-gray-100 text-[11px] font-semibold rounded-md"
          onClick={() => {
            try {
              navigator.clipboard.writeText(
                JSON.stringify(transactionDetails?.data?.transaction?.[0])
              );
              toast.success("copied to clipboard");
            } catch (error) {
              throw new Error("Could not copy transaction reference");
            }
          }}
        >
          Copy
        </button>
      </div>
      <Toaster position="top-center" />
    </>
  );
};

export default AccueilRowsSlider;
