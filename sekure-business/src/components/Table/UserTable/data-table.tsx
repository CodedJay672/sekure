"use client";

import { useMemo, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  SortingState,
  getSortedRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
  PaginationState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Pagination from "@/components/ui/shared/Pagination";
import SearchBar from "@/components/ui/shared/SearchBar";
import Filter from "@/components/ui/shared/Filter";
import SheetSlider from "@/components/ui/shared/SheetSlider";
import RowDetailsSlider from "@/components/ui/shared/RowDetails/RowDetailsSlider";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterValue: string;
  pagesize: number;
  link: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filterValue,
  pagesize,
  link,
}: DataTableProps<TData, TValue>) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const column = useMemo(() => columns, []);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const defaultData = useMemo(() => [], []);

  // state to control the sheet when table row is cicked
  const [isOpen, setisOpen] = useState(false);
  const [rowID, setRowID] = useState<TData | null>(null);

  const handleSheetState = () => {
    setisOpen(!isOpen);
  };

  // Create a table instance
  const table = useReactTable({
    data: data ?? defaultData,
    columns: column,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    manualPagination: true,
    debugTable: true,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    pageCount: pagesize,
    state: {
      sorting,
      columnFilters,
      pagination,
    },
  });

  return (
    <>
      <div className="w-full flex justify-end items-center gap-3">
        <SearchBar
          placeholder="Rechercher"
          table={table}
          filterValue={filterValue}
        />
        <Filter />
        <Pagination table={table} />
      </div>
      <div className="overflow-x-auto">
        <div className="rounded-md min-w-[800px]">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="bg-black text-white text-[10px]"
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => {
                      setRowID(row.original);
                      handleSheetState();
                    }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="text-[10px] font-normal text-gray-600"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-primary text-center"
                  >
                    No Data
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <SheetSlider open={isOpen} openChange={handleSheetState}>
          <RowDetailsSlider data={rowID} link={link} />
        </SheetSlider>
      </div>
    </>
  );
}
