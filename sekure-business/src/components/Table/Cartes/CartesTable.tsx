"use client";

import React from "react";
import TableComponent from "@/components/ui/shared/TableComponent";
import { DataTable } from "../UserTable/data-table";
import { columns } from "./columns";
import { useGetAllCardsQuery } from "@/components/react-query/queriesAndMutations";
import { useAppSelector } from "@/_lib/redux/hooks";

const CartesTable: React.FC = () => {
  const page = useAppSelector((state) => state?.edit?.page);
  const company_id =
    useAppSelector(
      (state) => state.connexion?.user?.[0]?.user_company?.[0]?.id
    ) ?? 0;
  const {
    data: allCompanyCards,
    isPending,
    error: errObj,
  } = useGetAllCardsQuery({ company_id, page });

  if (errObj) {
    return (
      <div className="h-44 flex justify-center items-center">
        <p className="text-sm font-semibold text-center text-gray-400">
          {errObj.message}
        </p>
      </div>
    );
  }

  return (
    <section className="bg-white py-4 px-[17px] flex flex-col gap-2">
      <TableComponent
        heading="List des Cartes delivrees"
        tagline="liste en temps réel des dernieres transactions effectuées avec les cartes"
      />
      <DataTable
        columns={columns}
        data={allCompanyCards?.data?.data || []}
        filterValue="type"
        pagesize={allCompanyCards?.data?.last_page || 1}
        link="/cartes/details"
      />
    </section>
  );
};

export default CartesTable;
