"use client";

import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { getTransactionStatistics } from "@/_data/transactionStatistics";
import { useQuery } from "@tanstack/react-query";
import Card from "@/components/Cards/Cards";
import { updateTransactionsData } from "@/_lib/features/transactions/transactionsSlice";
import { TransactionSummary } from "@/utils/types/types";

const PageCards = () => {
  const state = useAppSelector((state) => state.connexion.user?.[0]);
  const dispatch = useAppDispatch();
  const id = state?.user_company?.[0]?.id;

  const { data, isSuccess } = useQuery({
    queryKey: ["transactionStatistics", id],
    queryFn: async () => {
      if (!id) return;
      return await getTransactionStatistics(id);
    },
  });

  if (isSuccess) {
    dispatch(updateTransactionsData(data as TransactionSummary));
    localStorage.setItem("transactions", JSON.stringify(data));
  }

  return (
    <div className="flex-between gap-3">
      <Card
        data1={{
          title: "Total Transactions",
          value: data?.total_transaction ?? 0,
        }}
        data2={{ title: "reussies", value: data?.transaction_pending ?? 0 }}
        data3={{ title: "en cours", value: data?.transaction_success ?? 0 }}
      />
      <Card
        data1={{ title: "Total Paimeents", value: data?.total_payments ?? 0 }}
        data2={{ title: "Actifs", value: data?.actifs_payments ?? 0 }}
        data3={{ title: "Inactifs", value: data?.inactifs_payments ?? 0 }}
      />
      <Card
        data1={{ title: "Total Collectes", value: data?.total_collection ?? 0 }}
        data2={{ title: "Reussies", value: data?.collection_failed ?? 0 }}
        data3={{ title: "Echoues", value: data?.collection_successs ?? 0 }}
      />
    </div>
  );
};

export default PageCards;
