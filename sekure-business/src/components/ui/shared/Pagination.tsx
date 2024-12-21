"use client";

import { Table } from "@tanstack/react-table";
import Image from "next/image";

interface PaginationProps<TData> {
  table: Table<TData>;
}

const Pagination: React.FC<PaginationProps<any>> = ({ table }) => {
  return (
    <div className="flex gap-1">
      <span className="text-[12px] leading-[34.5px] tracking-[-0.5px] font-normal">
        page:{" "}
      </span>

      <button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <Image
          src="/assets/icons-pack-2/prev.svg"
          alt="next"
          width={24}
          height={32}
          className="object-cover"
        />
      </button>
      <div className="w-[37px] h-[32px] bg-notif rounded-lg flex-center">
        <span className="text-[10px] leading-[34.5px] tracking-[-0.5px] font-normal">
          {table.getState().pagination.pageIndex + 1} /{" "}
          {table.getPageCount().toLocaleString()}
        </span>
      </div>
      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <Image
          src="/assets/icons-pack-2/next.svg"
          alt="next"
          width={24}
          height={32}
          className="object-cover"
        />
      </button>
    </div>
  );
};

export default Pagination;
