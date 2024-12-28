"use client";

import { useAppSelector } from "@/_lib/redux/hooks";
import AdminChart from "@/components/AdminChart/AdminChart";
import LoadingSpinner from "@/components/Alert/Loading";
import Card from "@/components/Cards/Cards";
import { useGetCompanyTransactionDetails } from "@/components/react-query/queriesAndMutations";
import StatsCard from "@/components/StatsCard/StatsCard";
import TransactionsTable from "@/components/Table/TransactionsTable/TransactionsTable";
import Modal from "@/components/ui/shared/Modal";

const Transactions: React.FC = () => {
  const id =
    useAppSelector(
      (state) => state.connexion?.user?.[0]?.user_company?.[0]?.id
    ) ?? 0;

  const {
    data: getCompanyTransactionDetails,
    isPending,
    isError,
    error,
  } = useGetCompanyTransactionDetails(id);

  if (isPending) {
    return (
      <Modal>
        <LoadingSpinner />
      </Modal>
    );
  }

  if (isError) {
    return (
      <Modal>
        <div>{error.message}</div>
      </Modal>
    );
  }
  return (
    <section className="wrapper">
      <div className="overflow-hidden flex-1 flex flex-col gap-4">
        <section className="flex gap-2 w-full">
          <Card
            data1={{
              title: "Volume Total",
              value: getCompanyTransactionDetails?.total_transaction || 0,
            }}
            data2={{
              title: "activees",
              value: getCompanyTransactionDetails?.transaction_pending || 0,
            }}
            data3={{
              title: "suspendues",
              value: getCompanyTransactionDetails?.transaction_success || 0,
            }}
          />
          <Card
            data1={{
              title: "Transactions Auj",
              value: getCompanyTransactionDetails?.total_collection || 0,
            }}
            data2={{
              title: "activees",
              value: getCompanyTransactionDetails?.collection_failed || 0,
            }}
            data3={{
              title: "suspendues",
              value: getCompanyTransactionDetails?.collection_successs || 0,
            }}
          />
          <Card
            data1={{
              title: "Numbre Total",
              value: getCompanyTransactionDetails?.total_payments || 0,
            }}
            data2={{
              title: "Actifs",
              value: getCompanyTransactionDetails?.actifs_payments || 0,
            }}
            data3={{
              title: "Inactifs",
              value: getCompanyTransactionDetails?.inactifs_payments || 0,
            }}
          />
        </section>
        <section className="w-full">
          <AdminChart
            variant="simple"
            state={getCompanyTransactionDetails?.evolution_transactions || []}
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
