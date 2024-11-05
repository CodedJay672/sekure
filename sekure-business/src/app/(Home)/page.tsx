import AdminChart from "@/components/AdminChart/AdminChart";
import Card from "@/components/Cards/Cards";
import Table from "@/components/Table/Table";
import Wallet from "@/components/Wallet/Wallet";
import { bigTable, cardDetails, data } from "@/constants";

export default function Home() {
  return (
    <section className="wrapper">
      <div className="overflow-hidden flex-1 flex flex-col gap-4">
        <section className="flec-1 flex-between gap-2">
          {cardDetails.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </section>
        <section className="w-full">
          <AdminChart variant="detailed" />
        </section>
        <section className="w-full">
          <Table
            heading="Dernieres transactions"
            variant="big"
            columns={bigTable}
            data={data}
          />
        </section>
      </div>
      <section className="flex flex-col max-w-[354px] w-[300px] gap-3">
        <Wallet type="XAF" deposit="125 200.50" withdraw="125 200.50" />
        <Wallet type="USD" deposit="125 200.50" withdraw="125 200.50" />
        <Wallet type="IVC" deposit="125 200.50" withdraw="125 200.50" />
      </section>
    </section>
  );
}
