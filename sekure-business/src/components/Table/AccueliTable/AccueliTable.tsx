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
  const page = useAppSelector((state) => state?.edit?.page);

  const {
    data: allCompanyTransaction,
    isPending,
    error: errorObj,
  } = useGetAllTransactions({ company_id, page });

  if (isPending) {
    return (
      <div className="h-44 flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (errorObj) {
    return (
      <p className="text-sm font-semibold text-center text-gray-400">
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
        data={allCompanyTransaction?.data?.data || []}
        filterValue="vers"
        pagesize={allCompanyTransaction?.data?.last_page || 1}
      />
    </section>
  );
};

export default AccueliTable;
