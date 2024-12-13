"use client";

import React from "react";
import TableComponent from "@/components/ui/shared/TableComponent";
import { getAllTransactions } from "@/_data/transactionStatistics";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "../UserTable/data-table";
import { columns } from "./columns";
import LoadingSpinner from "@/components/Alert/Loading";

const AccueliTable: React.FC = () => {
  const { data, isPending } = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      return await getAllTransactions();
    },
  });

  if (isPending) {
    return (
      <div className="h-44 flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="bg-white py-4 px-[17px] flex flex-col gap-2">
      <TableComponent
        heading="Derniers transactions"
        tagline="liste en temps réel des dernieres transactions effectuées avec les cartes"
      />
      <DataTable
        columns={columns}
        data={data?.data.data || []}
        filterValue="vers"
      />
    </section>
  );
};

export default AccueliTable;
