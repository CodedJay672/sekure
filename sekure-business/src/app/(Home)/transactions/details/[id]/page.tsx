"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Active from "@/components/ui/shared/Active";
import { useParams, useRouter } from "next/navigation";
import LoadingSpinner from "@/components/Alert/Loading";
import { useGetTransactionDetailsByID } from "@/components/react-query/queriesAndMutations";
import Modal from "@/components/ui/shared/Modal";
import { Label } from "@/components/ui/label";
import { CopyIcon } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const UtilisateursDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const transactionDetails = useGetTransactionDetailsByID(Number(id));

  if (transactionDetails.isPending) {
    return (
      <Modal>
        <LoadingSpinner />
      </Modal>
    );
  }

  if (transactionDetails.isError) {
    return (
      <Modal>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-red-500">Une erreur s&apos;est produite</p>
          <Button onClick={() => router.back()}>Retour</Button>
        </div>
      </Modal>
    );
  }

  const transactionDate = () => {
    const transactionTime = new Date(
      transactionDetails?.data?.transaction?.[0]?.created_at || ""
    );
    const currentTime = new Date();
    const timeDifference = Math.abs(
      currentTime.getTime() - transactionTime.getTime()
    );
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysDifference = Math.floor(hoursDifference / 24);
    return `${daysDifference} days ${hoursDifference % 24} hours ago`;
  };

  const formatTransactionDate = () => {
    const date = new Date(
      transactionDetails?.data?.transaction?.[0]?.created_at || ""
    );
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "UTC",
    });
  };

  return (
    <section className="wrapper">
      <div className="w-full">
        <div className="my-2 p-2">
          <h3 className="text-xl font-semibold">Détails de la transaction</h3>
          <span className="text-sm tracking-wider leading-6 inline-block my-4">
            {transactionDetails?.data?.transaction?.[0]?.mode_wallet_company}{" "}
            <span className="text-primary">
              {transactionDetails?.data?.transaction?.[0]?.amount?.toLocaleString(
                "fr-FR",
                {
                  style: "currency",
                  currency: `USD`,
                }
              )}{" "}
            </span>
            From{" "}
            <span className="text=primary">
              {transactionDetails?.data?.transaction?.[0]?.card?.reference}
            </span>
          </span>
        </div>
        <div className="grid grid-cols-12 bg-white rounded-lg shadow-md p-4 gap-4">
          <div className="col-span-3 bg-gflex items-start">
            <Label>Reference:</Label>
          </div>

          <div className="col-span-9 bg-gflex items-start">
            <span className="text-xs font-semibold tracking-wider leading-4">
              {transactionDetails?.data?.transaction?.[0]?.reference}{" "}
              <CopyIcon
                size={10}
                onClick={() => {
                  try {
                    navigator.clipboard.writeText(
                      transactionDetails?.data?.transaction?.[0]?.reference ||
                        ""
                    );
                    toast.success("Copied to clipboard");
                  } catch (error) {
                    toast.error(`${error}`);
                  }
                }}
                className="ml-2 inline-block cursor-pointer"
              />
            </span>
          </div>

          <div className="col-span-3 bg-gflex items-start">
            <Label>Active:</Label>
          </div>

          <div className="col-span-9 bg-gflex items-start">
            <Active
              active={transactionDetails?.data?.transaction?.[0]?.active || 0}
            />
          </div>

          <div className="col-span-3 bg-gflex items-start">
            <Label>Status:</Label>
          </div>

          <div className="col-span-9 bg-gflex items-start">
            <Active
              active={transactionDetails?.data?.transaction?.[0]?.status || 0}
            />
          </div>

          <div className="col-span-3 bg-gflex items-start">
            <Label>Type:</Label>
          </div>

          <div className="col-span-9 bg-gflex items-start">
            <span className="text-xs font-semibold tracking-wider leading-4">
              {transactionDetails?.data?.transaction?.[0]?.type}
            </span>
          </div>

          <div className="col-span-3 bg-gflex items-start">
            <Label>Card:</Label>
          </div>

          <div className="col-span-9 bg-gflex items-start">
            <span className="text-xs font-semibold tracking-wider leading-4">
              {transactionDetails?.data?.transaction?.[0]?.card?.reference}{" "}
              {transactionDetails?.data?.transaction?.[0]?.card?.type}
            </span>
          </div>

          <div className="col-span-3 bg-gflex items-start">
            <Label>Time:</Label>
          </div>

          <div className="col-span-9 bg-gflex items-start">
            <span className="text-xs font-normal tracking-wider leading-4">
              {transactionDate()} | {formatTransactionDate()} (UTC)
            </span>
          </div>
        </div>
      </div>
      <Toaster position="top-center" />
    </section>
  );
};

export default UtilisateursDetails;
