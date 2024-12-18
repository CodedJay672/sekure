"use client";

import React from "react";
import { useAppDispatch } from "@/_lib/redux/hooks";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import TableComponent from "@/components/ui/shared/TableComponent";
import LoadingSpinner from "@/components/Alert/Loading";
import { useGetAllUsers } from "@/components/react-query/queriesAndMutations";

const UserTable: React.FC = () => {
  const dispatch = useAppDispatch();

  const { data: allUsers, isPending } = useGetAllUsers();

  if (isPending) {
    return (
      <div className="flex-1 h-44 flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="bg-white py-4 px-[17px] flex flex-col gap-2">
      <TableComponent
        heading="List des utilisateurs"
        tagline="liste en temps réel des dernieres transactions effectuées avec les cartes"
      />
      <DataTable
        columns={columns}
        data={allUsers?.data.data || []}
        filterValue="email"
      />
    </section>
  );
};

export default UserTable;
