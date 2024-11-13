import AdminChart from "@/components/AdminChart/AdminChart";
import Card from "@/components/Cards/Cards";
import StatsCard from "@/components/StatsCard/StatsCard";
import Table from "@/components/Table/Table";
import {
  bigTable,
  cardDetails,
  data,
  smallData,
  smallTable,
} from "@/constants";
import React from "react";

const Transactions: React.FC = () => {
  return (
    <section className="wrapper">
      <div className="overflow-hidden flex-1 flex flex-col gap-4">
        <section className="flex gap-2 w-[80%]">
          <Card key={0} {...cardDetails[0]} />
          <Card key={1} {...cardDetails[1]} />
        </section>
        <section className="w-full">
          <AdminChart variant="simple" />
        </section>
        <section className="w-full">
          <Table
            heading="Liste de Transactions effectuées"
            variant="big"
            columns={bigTable}
          />
        </section>
      </div>
      <div className="w-[300px] flex flex-col gap-[13px]">
        <div className="w-full py-3 px-[14px] bg-white overflow-hidden rounded-[10px]">
          <StatsCard entry={[20, 80]} />
        </div>

        <div className="w-full bg-white rounded-[10px] px-[14px] py-3">
          <Table variant="small" columns={smallTable} />
        </div>
      </div>
    </section>
  );
};

export default Transactions;
