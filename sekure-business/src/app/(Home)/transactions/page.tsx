"use client";

import { getTransactionStatistics } from "@/_data/transactionStatistics";
import { updateTransactionsData } from "@/_lib/features/transactions/transactionsSlice";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import AdminChart from "@/components/AdminChart/AdminChart";
import Card from "@/components/Cards/Cards";
import StatsCard from "@/components/StatsCard/StatsCard";
import TransactionsTable from "@/components/Table/TransactionsTable/TransactionsTable";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";

const Transactions: React.FC = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const id = useAppSelector(
    (state) => state.connexion?.user?.[0]?.user_company?.[0]?.id
  );

  queryClient.invalidateQueries({ queryKey: ["transactionsStat", id] });

  const { data, isSuccess } = useQuery({
    queryKey: ["transactionsStat", id],
    queryFn: async () => {
      return await getTransactionStatistics(id as number);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      if (data?.transactionSummary) {
        dispatch(updateTransactionsData(data.transactionSummary));
      }
    }
    queryClient.invalidateQueries({ queryKey: ["transactionsStat", id] });
  }, [data, isSuccess, dispatch]);

  return (
    <section className="wrapper">
      <div className="overflow-hidden flex-1 flex flex-col gap-4">
        <section className="flex gap-2 w-full">
          <Card
            data1={{
              title: "Volume Total",
              value: data?.transactionSummary?.total_transaction || 0,
            }}
            data2={{
              title: "activees",
              value: data?.transactionSummary?.transaction_pending || 0,
            }}
            data3={{
              title: "suspendues",
              value: data?.transactionSummary?.transaction_success || 0,
            }}
          />
          <Card
            data1={{
              title: "Transactions Auj",
              value: data?.transactionSummary?.total_collection || 0,
            }}
            data2={{
              title: "activees",
              value: data?.transactionSummary?.collection_failed || 0,
            }}
            data3={{
              title: "suspendues",
              value: data?.transactionSummary?.collection_successs || 0,
            }}
          />
          <Card
            data1={{
              title: "Numbre Total",
              value: data?.transactionSummary?.total_payments || 0,
            }}
            data2={{
              title: "Actifs",
              value: data?.transactionSummary?.actifs_payments || 0,
            }}
            data3={{
              title: "Inactifs",
              value: data?.transactionSummary?.inactifs_payments || 0,
            }}
          />
        </section>
        <section className="w-full">
          <AdminChart
            variant="simple"
            state={data?.transactionSummary?.evolution_transactions || []}
          />
        </section>
        <TransactionsTable />
      </div>
      <div className="w-[300px] flex flex-col gap-[13px]">
        <div className="w-full py-3 px-[14px] bg-white overflow-hidden rounded-[10px]">
          <StatsCard entry={[20, 80]} />
        </div>
      </div>
    </section>
  );
};

export default Transactions;
