"use client";

import TableComponent from "@/components/ui/shared/TableComponent";
import { columns } from "./columns";
import { DataTable } from "../UserTable/data-table";
import { useGetAllTransactions } from "@/components/react-query/queriesAndMutations";
import { useAppSelector } from "@/_lib/redux/hooks";

const TransactionsTable = () => {
  const page = useAppSelector((state) => state?.edit?.page);
  const company_id =
    useAppSelector(
      (state) => state.connexion?.user?.[0]?.user_company?.[0]?.id
    ) ?? 0;
  const { data: allTransactions } = useGetAllTransactions({
    company_id,
    page,
  });

  return (
    <section className="bg-white py-4 px-[17px] flex flex-col gap-2 w-full">
      <TableComponent
        heading="List des transactions effectuees"
        tagline="liste en temps réel des dernieres transactions effectuées avec les cartes"
      />

      <DataTable
        columns={columns}
        data={allTransactions?.data.data || []}
        filterValue="reference"
        pagesize={allTransactions?.data?.last_page || 1}
        link="/transactions/details"
      />
    </section>
  );
};

export default TransactionsTable;
