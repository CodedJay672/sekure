"use client";

import TableComponent from "@/components/ui/shared/TableComponent";
import { columns } from "./columns";
import { DataTable } from "../UserTable/data-table";
import LoadingSpinner from "@/components/Alert/Loading";
import { useGetAllCustomersQuery } from "@/components/react-query/queriesAndMutations";
import { useAppSelector } from "@/_lib/redux/hooks";
import { useState } from "react";

const CustomersTable = () => {
  const company_id =
    useAppSelector(
      (state) => state.connexion?.user?.[0]?.user_company?.[0]?.id
    ) ?? 0;
  const [page, setPage] = useState<number>(1);

  const { data: allCustomers, isPending } = useGetAllCustomersQuery({
    company_id,
    page,
  });

  // const nextPage = () => {
  //   setPage((prev) => prev + 1);
  // };

  // const prevPage = () => {
  //   setPage((prev) => prev - 1);
  // };

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
        heading="List des customers"
        tagline="List des customers"
      />
      <DataTable
        columns={columns}
        data={allCustomers?.data?.data || []}
        filterValue="email"
        pagesize={allCustomers?.data?.last_page || 1}
      />
    </section>
  );
};

export default CustomersTable;
