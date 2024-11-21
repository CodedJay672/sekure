"use client";

import { useQuery } from "@tanstack/react-query";
import TableComponent from "@/components/ui/shared/TableComponent";
import { getAllTransactions } from "@/_data/transactionStatistics";
import { columns } from "./columns";
import { DataTable } from "../UserTable/data-table";

const TransactionsTable = () => {
  const { data, isPending } = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      return await getAllTransactions();
    },
  });

  if (isPending) {
    return (
      <div className="h-44 flex justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <section className="bg-white py-4 px-[17px] flex flex-col gap-2">
      <TableComponent
        heading="List des transactions effectuees"
        tagline="liste en temps réel des dernieres transactions effectuées avec les cartes"
      />
      <DataTable
        columns={columns}
        data={data?.data.data || []}
        filterValue="montant"
      />
    </section>
  );
};

export default TransactionsTable;
