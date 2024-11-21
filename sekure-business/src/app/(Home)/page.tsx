import AdminChart from "@/components/AdminChart/AdminChart";
import AccueliTable from "@/components/Table/AccueliTable/AccueliTable";
import PageCards from "@/components/ui/shared/PageCards/PageCards";
import Wallet from "@/components/Wallet/Wallet";

export default function Home() {
  return (
    <section className="wrapper">
      <div className="overflow-hidden flex-1 flex flex-col gap-4">
        <PageCards />
        <section className="w-full">
          <AdminChart variant="detailed" />
        </section>
        <AccueliTable />
      </div>
      <section className="flex flex-col max-w-[354px] w-[300px] gap-3">
        <Wallet type="XAF" deposit="125 200.50" withdraw="125 200.50" />
        <Wallet type="USD" deposit="125 200.50" withdraw="125 200.50" />
        <Wallet type="IVC" deposit="125 200.50" withdraw="125 200.50" />
      </section>
    </section>
  );
}
