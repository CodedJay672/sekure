"use client";

import React from "react";
import TableComponent from "@/components/ui/shared/TableComponent";
import { DataTable } from "../UserTable/data-table";
import { columns } from "./columns";
import { useAppSelector } from "@/_lib/redux/hooks";
import { useGetAllTransactions } from "@/components/react-query/queriesAndMutations";
import { useToast } from "@/hooks/use-toast";
import LoadingSpinner from "@/components/Alert/Loading";

const AccueliTable: React.FC = () => {
  const company_id =
    useAppSelector(
      (state) => state.connexion?.user?.[0]?.user_company?.[0]?.id
    ) ?? 0;
  const page = useAppSelector((state) => state?.edit?.page);

  const {
    data: allCompanyTransaction,
    isPending,
    isError,
    error: errorObj,
  } = useGetAllTransactions({ company_id, page });
  const { toast } = useToast();

  if (isError) {
    toast({
      description: errorObj.message,
    });
  }

  if (isPending) {
    return (
      <section className="bg-white py-4 px-[17px] flex-center flex-col rounded-lg">
        <LoadingSpinner />
      </section>
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
        filterValue="reference"
        pagesize={allCompanyTransaction?.data?.last_page || 1}
        link="/transactions/details"
      />
    </section>
  );
};

export default AccueliTable;
