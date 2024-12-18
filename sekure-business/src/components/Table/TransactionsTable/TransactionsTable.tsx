"use client";

import TableComponent from "@/components/ui/shared/TableComponent";
import { columns } from "./columns";
import { DataTable } from "../UserTable/data-table";
import LoadingSpinner from "@/components/Alert/Loading";
import { useGetAllTransactions } from "@/components/react-query/queriesAndMutations";

const TransactionsTable = () => {
  const { data: allTransactions, isPending } = useGetAllTransactions();

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
        heading="List des transactions effectuees"
        tagline="liste en temps réel des dernieres transactions effectuées avec les cartes"
      />
      <DataTable
        columns={columns}
        data={allTransactions?.data.data || []}
        filterValue="montant"
      />
    </section>
  );
};

export default TransactionsTable;
