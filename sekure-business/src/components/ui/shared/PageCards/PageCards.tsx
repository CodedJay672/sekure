"use client";

import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { getTransactionStatistics } from "@/_data/transactionStatistics";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Card from "@/components/Cards/Cards";
import { updateTransactionsData } from "@/_lib/features/transactions/transactionsSlice";
import { TransactionSummary } from "@/utils/types/types";
import { useEffect } from "react";

const PageCards = () => {
  const state = useAppSelector((state) => state.connexion.user?.[0]);
  const dispatch = useAppDispatch();
  const id = state?.user_company?.[0]?.id;
  const queryClient = useQueryClient();

  const { data, isSuccess } = useQuery({
    queryKey: ["transactionStatistics", id],
    queryFn: async () => {
      if (!id) return;
      return await getTransactionStatistics(id);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        updateTransactionsData(data?.transactionSummary as TransactionSummary)
      );
      queryClient.invalidateQueries({
        queryKey: ["transactionStatistics", id],
      });
    }
  }, [isSuccess, dispatch, data]);

  return (
    <div className="flex-between gap-3">
      <Card
        data1={{
          title: "Total Transactions",
          value: data?.transactionSummary?.total_transaction ?? 0,
        }}
        data2={{
          title: "reussies",
          value: data?.transactionSummary?.transaction_pending ?? 0,
        }}
        data3={{
          title: "en cours",
          value: data?.transactionSummary?.transaction_success ?? 0,
        }}
      />
      <Card
        data1={{
          title: "Total Paimeents",
          value: data?.transactionSummary?.total_payments ?? 0,
        }}
        data2={{
          title: "Actifs",
          value: data?.transactionSummary?.actifs_payments ?? 0,
        }}
        data3={{
          title: "Inactifs",
          value: data?.transactionSummary?.inactifs_payments ?? 0,
        }}
      />
      <Card
        data1={{
          title: "Total Collectes",
          value: data?.transactionSummary?.total_collection ?? 0,
        }}
        data2={{
          title: "Reussies",
          value: data?.transactionSummary?.collection_failed ?? 0,
        }}
        data3={{
          title: "Echoues",
          value: data?.transactionSummary?.collection_successs ?? 0,
        }}
      />
    </div>
  );
};

export default PageCards;
