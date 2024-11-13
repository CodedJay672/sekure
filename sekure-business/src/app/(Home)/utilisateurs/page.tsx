import Card from "@/components/Cards/Cards";
import Table from "@/components/Table/Table";
import { bigTable, cardDetails, data } from "@/constants";
import React from "react";

const Utilisateurs: React.FC = () => {
  return (
    <section className="wrapper">
      <div className="overflow-hidden w-full flex flex-col gap-4">
        <section className="flex gap-2">
          <Card key={0} {...cardDetails[0]} />
          <Card key={1} {...cardDetails[1]} />
          <Card key={1} {...cardDetails[1]} />
        </section>
        <div className="w-full bg-white">
          <section className="w-full">
            <Table
              heading="Liste des utilisateurs"
              variant="big"
              columns={bigTable}
            />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Utilisateurs;
