"use client";

import { Table } from "@tanstack/react-table";
import Image from "next/image";

interface SearchBarProps<TData> {
  placeholder: string;
  table: Table<TData>;
  filterValue: string;
}

const SearchBar: React.FC<SearchBarProps<any>> = ({
  placeholder,
  table,
  filterValue,
}) => {
  return (
    <div className="flex-1 flex-center relative">
      <input
        type="search"
        placeholder={placeholder}
        className="form-input w-full h-8 rounded-[5px] border-none outline-none px-10 pr-12 py-3 input bg-input"
        value={
          (table.getColumn(`${filterValue}`)?.getFilterValue() as string) ?? ""
        }
        onChange={(event) =>
          table.getColumn(`${filterValue}`)?.setFilterValue(event.target.value)
        }
      />
      <div className="absolute left-0 w-10 h-8 pointer-events-auto flex-center">
        <Image
          src="/assets/icons-pack-2/search-icon.svg"
          alt="search"
          width={19}
          height={17}
          className="object-contain"
        />
      </div>
      <div className="absolute right-0 w-10 h-8 pointer-events-auto flex-center">
        <Image
          src="/assets/icons-pack-2/send.svg"
          alt="search"
          width={19}
          height={17}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default SearchBar;
