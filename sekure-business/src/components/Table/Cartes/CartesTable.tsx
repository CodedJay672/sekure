"use client";

import React from "react";
import TableComponent from "@/components/ui/shared/TableComponent";
import { DataTable } from "../UserTable/data-table";
import { columns } from "./columns";
import LoadingSpinner from "@/components/Alert/Loading";
import { useGetAllCardsQuery } from "@/components/react-query/queriesAndMutations";
import { useAppSelector } from "@/_lib/redux/hooks";
import { number } from "zod";

const CartesTable: React.FC = () => {
  const company_id = useAppSelector(
    (state) => state.connexion?.user?.[0]?.user_company?.[0]?.id
  );
  const page = 1;
  const per_page = 10;
  const {
    data: allCompanyCards,
    isPending,
    error: errObj,
  } = useGetAllCardsQuery({ company_id, page, per_page });

  if (isPending) {
    return (
      <div className="h-44 flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (errObj) {
    return (
      <div className="h-44 flex justify-center items-center">
        <p>Erreur lors de la récupération des cartes</p>
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
        filterValue="user"
      />
    </section>
  );
};

export default CartesTable;
