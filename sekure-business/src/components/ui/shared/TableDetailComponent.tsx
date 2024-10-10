"use client";

import { usePathname, useRouter } from "next/navigation";
import { Data } from "@/constants/types";

interface Column {
  id: string;
  header: string;
  accessor?: string;
}

interface TableComponentProps {
  variant?: "big" | "small";
  columns: Column[];
  data: Data[];
}

const TableDetailComponent: React.FC<TableComponentProps> = ({
  variant,
  columns,
  data,
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (id: string | number) => {
    router.push(`${pathname}/details`);
  };

  return (
    <div
      className={`${
        variant === "big" ? "mt-4" : ""
      } w-full flex-1 overflow-auto`}
    >
      <table className="w-full min-w-max text-[11px] text-left text-dark3">
        <thead className="text-[11px] leading-[14.36px] text-white bg-dark rounded-[10px] sticky top-0 z-10">
          <tr>
            {columns.map((column) => (
              <th
                scope="col"
                className="px-2 py-2 w-auto min-w-[70px]"
                key={column.id}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, idx) => (
              <tr
                key={idx}
                className={`bg-white dark:bg-gray-800 ${
                  idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-900" : ""
                } text-[11px] hover:bg-[#F3F3F3] cursor-pointer`}
                onClick={() => handleClick(row.id)}
              >
                {columns.map((column) => (
                  <td
                    className="px-2 py-6 min-w-[70px]"
                    key={`${idx}-${column.id}`}
                  >
                    {row[column.accessor || column.id] ?? ""}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="text-center py-4 text-dark3"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableDetailComponent;
