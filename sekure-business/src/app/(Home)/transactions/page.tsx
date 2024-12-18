"use client";

import { useAppSelector } from "@/_lib/redux/hooks";
import AdminChart from "@/components/AdminChart/AdminChart";
import Card from "@/components/Cards/Cards";
import { useGetCompanyTransactionDetails } from "@/components/react-query/queriesAndMutations";
import StatsCard from "@/components/StatsCard/StatsCard";
import TransactionsTable from "@/components/Table/TransactionsTable/TransactionsTable";

const Transactions: React.FC = () => {
  const id = useAppSelector(
    (state) => state.connexion?.user?.[0]?.user_company?.[0]?.id
  );

  const { data: getCompanyTransactionDetails } =
    useGetCompanyTransactionDetails(id || 0);

  return (
    <section className="wrapper">
      <div className="overflow-hidden flex-1 flex flex-col gap-4">
        <section className="flex gap-2 w-full">
          <Card
            data1={{
              title: "Volume Total",
              value:
                getCompanyTransactionDetails?.transactionSummary
                  ?.total_transaction || 0,
            }}
            data2={{
              title: "activees",
              value:
                getCompanyTransactionDetails?.transactionSummary
                  ?.transaction_pending || 0,
            }}
            data3={{
              title: "suspendues",
              value:
                getCompanyTransactionDetails?.transactionSummary
                  ?.transaction_success || 0,
            }}
          />
          <Card
            data1={{
              title: "Transactions Auj",
              value:
                getCompanyTransactionDetails?.transactionSummary
                  ?.total_collection || 0,
            }}
            data2={{
              title: "activees",
              value:
                getCompanyTransactionDetails?.transactionSummary
                  ?.collection_failed || 0,
            }}
            data3={{
              title: "suspendues",
              value:
                getCompanyTransactionDetails?.transactionSummary
                  ?.collection_successs || 0,
            }}
          />
          <Card
            data1={{
              title: "Numbre Total",
              value:
                getCompanyTransactionDetails?.transactionSummary
                  ?.total_payments || 0,
            }}
            data2={{
              title: "Actifs",
              value:
                getCompanyTransactionDetails?.transactionSummary
                  ?.actifs_payments || 0,
            }}
            data3={{
              title: "Inactifs",
              value:
                getCompanyTransactionDetails?.transactionSummary
                  ?.inactifs_payments || 0,
            }}
          />
        </section>
        <section className="w-full">
          <AdminChart
            variant="simple"
            state={
              getCompanyTransactionDetails?.transactionSummary
                ?.evolution_transactions || []
            }
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
