"use client";

import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import TableComponent from "@/components/ui/shared/TableComponent";
import { useGetAllUsers } from "@/components/react-query/queriesAndMutations";

const UserTable: React.FC = () => {
  const { data: allUsers, isPending } = useGetAllUsers();

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
        pagesize={allUsers?.data?.last_page || 1}
        link='/profil'
      />
    </section>
  );
};

export default UserTable;
