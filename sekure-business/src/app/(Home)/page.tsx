"use client";

import AdminChart from "@/components/AdminChart/AdminChart";
import AccueliTable from "@/components/Table/AccueliTable/AccueliTable";
import PageCards from "@/components/ui/shared/PageCards/PageCards";
import Wallet from "@/components/Wallet/Wallet";
import { useAppSelector } from "@/_lib/redux/hooks";

export default function Home() {
  const transactionStats = useAppSelector((state) => state.transactions);

  return (
    <section className="wrapper">
      <div className="overflow-hidden flex-1 flex flex-col gap-4">
        <PageCards />
        <section className="w-full">
          <AdminChart
            variant="detailed"
            state={transactionStats?.evolution_transactions}
          />
        </section>
        <AccueliTable />
      </div>
      <section className="flex flex-col max-w-[354px] w-[300px] gap-3">
        <Wallet
          type="XAF"
          deposit={transactionStats.wallet_xaf as number}
          withdraw={transactionStats.wallet_xaf as number}
        />
        <Wallet
          type="USD"
          deposit={transactionStats.wallet_usa as number}
          withdraw={transactionStats.wallet_usa as number}
        />
        <Wallet
          type="IVC"
          deposit={transactionStats.wallet_civ as number}
          withdraw={transactionStats.wallet_civ as number}
        />
      </section>
    </section>
  );
}
