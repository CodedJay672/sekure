"use client";

import React, { useMemo } from "react";
import SearchBar from "../ui/shared/SearchBar";
import Filter from "../ui/shared/Filter";
import Pagination from "../ui/shared/Pagination";
import TableComponent from "../ui/shared/TableComponent";
import { Data, ITableColumn } from "@/constants/types";
import { usePathname } from "next/navigation";
import TableDetailComponent from "../ui/shared/TableDetailComponent";

interface TableProps {
  variant?: "big" | "small";
  heading?: string;
  columns: ITableColumn[];
  data: Data[];
}

const Table: React.FC<TableProps> = ({ heading, variant, columns, data }) => {
  const [tableData, setTableData] = React.useState<Data[]>(data);
  const [query, setQuery] = React.useState<string>("");
  const pathname = usePathname();

  const filteredData = useMemo(() => {
    return tableData.filter((item) => {
      return item.date.toString().toLowerCase().includes(query.toLowerCase());
    });
  }, [query, tableData]);

  return (
    <section
      className={`bg-white ${
        variant === "big" && "py-4 px-[17px]"
      } flex flex-col gap-2`}
    >
      {variant === "big" ? (
        <>
          <div className="w-full">
            <h2 className="text-base leading-6 font-semibold">{heading}</h2>
            <p className="text-xs leading-4 font-light">
              liste en temps réel des dernieres transactions effectuées avec les
              cartes
            </p>
          </div>
          <div className="w-full flex gap-1">
            <SearchBar placeholder="Enter search term..." setData={setQuery} />
            <Filter />
            <Pagination />
          </div>
        </>
      ) : (
        <h1 className="text-xs leading-[34.5px] tracking-[-0.5%] font-bold">
          Meilleurs utilisateurs payeurs
        </h1>
      )}

      <div className="flex">
        {pathname === "/cartes" || pathname === "/utilisateurs" ? (
          <TableDetailComponent
            variant={variant}
            columns={columns}
            data={filteredData}
          />
        ) : (
          <TableComponent
            variant={variant}
            columns={columns}
            data={filteredData}
          />
        )}
      </div>
    </section>
  );
};

export default Table;
