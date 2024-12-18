"use client";

import TableComponent from "@/components/ui/shared/TableComponent";
import { columns } from "./columns";
import { DataTable } from "../UserTable/data-table";
import LoadingSpinner from "@/components/Alert/Loading";
import { useGetAllCustomersQuery } from "@/components/react-query/queriesAndMutations";
import { useAppSelector } from "@/_lib/redux/hooks";

const CustomersTable = () => {
  const company_id =
    useAppSelector(
      (state) => state.connexion?.user?.[0]?.user_company?.[0]?.id
    ) ?? 0;
  const page = 1;
  const query = "";

  const { data: allCustomers, isPending } = useGetAllCustomersQuery({
    company_id,
    page,
    query,
  });

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
        filterValue="montant"
      />
    </section>
  );
};

export default CustomersTable;
