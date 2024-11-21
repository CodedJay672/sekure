"use client";

import {
  getAllTransactions,
  getTransactionStatistics,
} from "@/_data/transactionStatistics";
import { useAppSelector } from "@/_lib/redux/hooks";
import AdminChart from "@/components/AdminChart/AdminChart";
import Card from "@/components/Cards/Cards";
import StatsCard from "@/components/StatsCard/StatsCard";
import TransactionsTable from "@/components/Table/TransactionsTable/TransactionsTable";
import { cardDetails } from "@/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

const Transactions: React.FC = () => {
  const queryClient = useQueryClient();
  const id = useAppSelector(
    (state) => state.connexion?.user?.user_company?.[0]?.id
  );

  const { data } = useQuery({
    queryKey: ["transactionsStat", id],
    queryFn: async () => {
      return await getTransactionStatistics(id as number);
    },
  });

  return (
    <section className="wrapper">
      <div className="overflow-hidden flex-1 flex flex-col gap-4">
        <section className="flex gap-2 w-full">
          <Card
            data1={{
              title: "Volume Total",
              value: data?.total_transaction || 0,
            }}
            data2={{
              title: "activees",
              value: data?.transaction_pending || 0,
            }}
            data3={{
              title: "suspendues",
              value: data?.transaction_success || 0,
            }}
          />
          <Card
            data1={{
              title: "Transactions Auj",
              value: data?.total_collection || 0,
            }}
            data2={{
              title: "activees",
              value: data?.collection_failed || 0,
            }}
            data3={{
              title: "suspendues",
              value: data?.collection_successs || 0,
            }}
          />
          <Card
            data1={{
              title: "Numbre Total",
              value: data?.total_payments || 0,
            }}
            data2={{
              title: "Actifs",
              value: data?.actifs_payments || 0,
            }}
            data3={{
              title: "Inactifs",
              value: data?.inactifs_payments || 0,
            }}
          />
        </section>
        <section className="w-full">
          <AdminChart variant="simple" />
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
