"use client";

import AdminChart from "@/components/AdminChart/AdminChart";
import AccueliTable from "@/components/Table/AccueliTable/AccueliTable";
import { useAppSelector } from "@/_lib/redux/hooks";
import { useGetCompanyTransactionDetails } from "@/components/react-query/queriesAndMutations";
import Card from "@/components/Cards/Cards";
import Wallet from "@/components/Wallet/Wallet";
import Modal from "@/components/ui/shared/Modal";
import LoadingSpinner from "@/components/Alert/Loading";

export default function Home() {
  const id = useAppSelector(
    (state) => state.connexion?.user?.[0]?.user_company?.[0]?.id
  );
  const companyTransactionsDetails = useGetCompanyTransactionDetails(
    id as number
  );

  if (companyTransactionsDetails.isPending) {
    return (
      <Modal>
        <LoadingSpinner />
      </Modal>
    );
  }

  if (companyTransactionsDetails.isError) {
    return (
      <Modal>
        <div className="size-32 rounded-lg flex-center">
          {companyTransactionsDetails.error?.message}
        </div>
      </Modal>
    );
  }

  return (
    <section className="wrapper">
      <div className="overflow-hidden flex-1 flex flex-col gap-4">
        <div className="flex-between gap-3">
          <Card
            data1={{
              title: "Total Transactions",
              value: companyTransactionsDetails?.data?.total_transaction,
            }}
            data2={{
              title: "reussies",
              value: companyTransactionsDetails?.data?.transaction_pending,
            }}
            data3={{
              title: "en cours",
              value: companyTransactionsDetails?.data?.transaction_success,
            }}
          />
          <Card
            data1={{
              title: "Total Paimeents",
              value: companyTransactionsDetails?.data?.total_payments,
            }}
            data2={{
              title: "Actifs",
              value: companyTransactionsDetails?.data?.actifs_payments,
            }}
            data3={{
              title: "Inactifs",
              value: companyTransactionsDetails?.data?.inactifs_payments,
            }}
          />
          <Card
            data1={{
              title: "Total Collectes",
              value: companyTransactionsDetails?.data?.total_collection,
            }}
            data2={{
              title: "Reussies",
              value: companyTransactionsDetails?.data?.collection_failed,
            }}
            data3={{
              title: "Echoues",
              value: companyTransactionsDetails?.data?.collection_successs,
            }}
          />
        </div>
        <section className="w-full min-h-32 flex-center flex-col bg-white rounded-xl overflow-hidden">
          <AdminChart
            variant="detailed"
            state={companyTransactionsDetails?.data?.evolution_transactions}
            total={companyTransactionsDetails?.data?.total_transaction}
          />
        </section>
        <AccueliTable />
      </div>
      <section className="flex flex-col max-w-[354px] w-[300px] gap-3">
        <Wallet
          type="XAF"
          deposit={companyTransactionsDetails?.data?.wallet_xaf}
          withdraw={companyTransactionsDetails?.data?.wallet_xaf}
        />
        <Wallet
          type="USD"
          deposit={companyTransactionsDetails?.data?.wallet_usa}
          withdraw={companyTransactionsDetails?.data?.wallet_usa}
        />
        <Wallet
          type="IVC"
          deposit={companyTransactionsDetails?.data?.wallet_civ}
          withdraw={companyTransactionsDetails?.data?.wallet_civ}
        />
      </section>{" "}
    </section>
  );
}
