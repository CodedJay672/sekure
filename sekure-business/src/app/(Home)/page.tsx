"use client";

import AdminChart from "@/components/AdminChart/AdminChart";
import AccueliTable from "@/components/Table/AccueliTable/AccueliTable";
import { useAppSelector } from "@/_lib/redux/hooks";
import { useGetCompanyTransactionDetails } from "@/components/react-query/queriesAndMutations";
import Card from "@/components/Cards/Cards";
import Wallet from "@/components/Wallet/Wallet";

export default function Home() {
  const id = useAppSelector(
    (state) => state.connexion?.user?.[0]?.user_company?.[0]?.id
  );

  if (!id) return null;
  const { data: companyTransactionsDetails } =
    useGetCompanyTransactionDetails(id);

  return (
    <section className="wrapper">
      <div className="overflow-hidden flex-1 flex flex-col gap-4">
        <div className="flex-between gap-3">
          <Card
            data1={{
              title: "Total Transactions",
              value:
                companyTransactionsDetails?.transactionSummary
                  ?.total_transaction ?? 0,
            }}
            data2={{
              title: "reussies",
              value:
                companyTransactionsDetails?.transactionSummary
                  ?.transaction_pending ?? 0,
            }}
            data3={{
              title: "en cours",
              value:
                companyTransactionsDetails?.transactionSummary
                  ?.transaction_success ?? 0,
            }}
          />
          <Card
            data1={{
              title: "Total Paimeents",
              value:
                companyTransactionsDetails?.transactionSummary
                  ?.total_payments ?? 0,
            }}
            data2={{
              title: "Actifs",
              value:
                companyTransactionsDetails?.transactionSummary
                  ?.actifs_payments ?? 0,
            }}
            data3={{
              title: "Inactifs",
              value:
                companyTransactionsDetails?.transactionSummary
                  ?.inactifs_payments ?? 0,
            }}
          />
          <Card
            data1={{
              title: "Total Collectes",
              value:
                companyTransactionsDetails?.transactionSummary
                  ?.total_collection ?? 0,
            }}
            data2={{
              title: "Reussies",
              value:
                companyTransactionsDetails?.transactionSummary
                  ?.collection_failed ?? 0,
            }}
            data3={{
              title: "Echoues",
              value:
                companyTransactionsDetails?.transactionSummary
                  ?.collection_successs ?? 0,
            }}
          />
        </div>
        <section className="w-full min-h-32 flex-center flex-col bg-white rounded-xl overflow-hidden">
          <AdminChart
            variant="detailed"
            state={
              companyTransactionsDetails?.transactionSummary
                ?.evolution_transactions || []
            }
            total={
              companyTransactionsDetails?.transactionSummary?.total_transaction
            }
          />
        </section>
        <AccueliTable />
      </div>
      <section className="flex flex-col max-w-[354px] w-[300px] gap-3">
        <Wallet
          type="XAF"
          deposit={
            companyTransactionsDetails?.transactionSummary?.wallet_xaf as number
          }
          withdraw={
            companyTransactionsDetails?.transactionSummary?.wallet_xaf as number
          }
        />
        <Wallet
          type="USD"
          deposit={
            companyTransactionsDetails?.transactionSummary?.wallet_usa as number
          }
          withdraw={
            companyTransactionsDetails?.transactionSummary?.wallet_usa as number
          }
        />
        <Wallet
          type="IVC"
          deposit={
            companyTransactionsDetails?.transactionSummary?.wallet_civ as number
          }
          withdraw={
            companyTransactionsDetails?.transactionSummary?.wallet_civ as number
          }
        />
      </section>{" "}
    </section>
  );
}
