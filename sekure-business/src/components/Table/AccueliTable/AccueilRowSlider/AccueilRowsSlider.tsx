"use client";

import { CopyIcon } from "lucide-react";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Transaction } from "../../TransactionsTable/validation";

type TAccueilRowsSlider = {
  data: Transaction;
  link: string;
};

const AccueilRowsSlider: React.FC<TAccueilRowsSlider> = ({ data, link }) => {
  const router = useRouter();

  const { created_at } = data;

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
            {data?.type}
          </span>
        </div>
        <div className="w-1/2 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Statut
          </span>
        </div>
        <div className="w-1/2 py-2">
          <span className="font-bold text-[11px] leading-4 text-[#1f1f1f]">
            {data?.status}
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
            {data?.reference}
            <CopyIcon
              size={10}
              className="ml-2"
              onClick={() =>
                navigator.clipboard.writeText(data?.reference as string)
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
            {data?.card?.name || "N/A"}
            <CopyIcon
              size={10}
              className="ml-2"
              onClick={() =>
                navigator.clipboard.writeText(data?.reference as string)
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
            {data?.card?.country || "N/A"}
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Num. utilisateur
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-4 text-[#1f1f1f] flex items-center">
            {data?.card?.company || "N/A"}
            <CopyIcon
              size={10}
              className="ml-2"
              onClick={() =>
                navigator.clipboard.writeText(data?.reference as string)
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
            {data?.mode_card || "N/A"}
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Numero debiteur
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-4 text-[#1f1f1f] flex items-center">
            {data?.card?.issuer || "N/A"}
            <CopyIcon
              size={10}
              className="ml-2"
              onClick={() =>
                navigator.clipboard.writeText(data?.reference as string)
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
            {data?.balance_before_superadmin?.toLocaleString("fr-FR", {
              style: "currency",
              currency: "XOF",
            }) || "N/A"}
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Solde préc.
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-4 text-[#1f1f1f] flex items-center">
            {data?.balance_before_company?.toLocaleString("fr-FR", {
              style: "currency",
              currency: "XOF",
            }) || "N/A"}
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Montant debité
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-4 text-[#1f1f1f] flex items-center">
            {data?.balance_before_compte?.toLocaleString("fr-FR", {
              style: "currency",
              currency: "XOF",
            }) || "N/A"}
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-6 text-[#9a9a9a]">
            Nouv. solde
          </span>
        </div>
        <div className="flex-1 py-2">
          <span className="font-normal text-[11px] leading-4 text-[#1f1f1f] flex items-center">
            {data?.balance_after_card?.toLocaleString("fr-FR", {
              style: "currency",
              currency: "XOF",
            }) || "N/A"}
          </span>
        </div>
      </div>
      <div className="w-full mt-4 flex flex-col gap-2">
        <button
          className="w-full py-2 text-[#f5f5f5] bg-[#1f1f1f] text-[11px] font-semibold rounded-md"
          onClick={() => router.push(`${link}/${data?.id}`)}
        >
          voir
        </button>
        <button
          className="w-full py-2 bg-primary text-gray-100 text-[11px] font-semibold rounded-md"
          onClick={() => {
            try {
              navigator.clipboard.writeText(JSON.stringify(data));
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
