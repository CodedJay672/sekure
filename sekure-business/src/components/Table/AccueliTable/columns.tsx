"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id?: string | "";
  vers?: string | "";
  type?: string | "";
  montant?: string | "";
  active?: number | "";
  date_birth?: string | "";
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID Reference",
  },
  {
    accessorKey: "vers",
    header: "De/Vers",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "montant",
    header: "Montant",
  },
  {
    accessorKey: "active",
    header: "Status",
    cell: ({ row }) => {
      const isActive = row.getValue("active");

      if (isActive) {
        return (
          <span className="text-xs text-white bg-primary rounded-full py-1 px-3">
            Actif
          </span>
        );
      }

      return (
        <span className="text-xs text-white bg-red-400 rounded-full py-1 px-3">
          Inactif
        </span>
      );
    },
  },
  {
    accessorKey: "date_birth",
    header: "Date",
  },
];
