"use client";

import React from "react";
import { getAllUsers } from "@/_data/user";
import { setUsers } from "@/_lib/features/users/usersSlice";
import { useAppDispatch } from "@/_lib/redux/hooks";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import TableComponent from "@/components/ui/shared/TableComponent";
import LoadingSpinner from "@/components/Alert/Loading";

const UserTable: React.FC = () => {
  const dispatch = useAppDispatch();

  const { data, isPending, isSuccess } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      return await getAllUsers();
    },
  });

  if (isPending) {
    return (
      <div className="h-44 flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!isSuccess) {
    dispatch(setUsers(data?.data.data || []));
  }

  return (
    <section className="bg-white py-4 px-[17px] flex flex-col gap-2">
      <TableComponent
        heading="List des utilisateurs"
        tagline="liste en temps réel des dernieres transactions effectuées avec les cartes"
      />
      <DataTable
        columns={columns}
        data={data?.data.data || []}
        filterValue="email"
      />
    </section>
  );
};

export default UserTable;
