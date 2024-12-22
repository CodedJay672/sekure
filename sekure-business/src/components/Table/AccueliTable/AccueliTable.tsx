"use client";

import React from "react";
import TableComponent from "@/components/ui/shared/TableComponent";
import { DataTable } from "../UserTable/data-table";
import { columns } from "./columns";
import LoadingSpinner from "@/components/Alert/Loading";
import { useAppSelector } from "@/_lib/redux/hooks";
import { useGetAllTransactions } from "@/components/react-query/queriesAndMutations";

const AccueliTable: React.FC = () => {
  const company_id =
    useAppSelector(
      (state) => state.connexion?.user?.[0]?.user_company?.[0]?.id
    ) ?? 0;
  const page = 1;

  const allCompanyTransaction = useGetAllTransactions({ company_id, page });

  if (allCompanyTransaction?.isPending) {
    return (
      <div className="h-44 flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (allCompanyTransaction.error) {
    return (
      <p className="text-sm font-semibold text-center">
        Oops! Could not fetch Transactions data. Refresh the page.
      </p>
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
        data={allCompanyTransaction?.data?.data?.data || []}
        filterValue="vers"
      />
    </section>
  );
};

export default AccueliTable;
