"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  full_name?: string | "";
  email?: string | "";
  poste?: string | "";
  localisation?: string | "";
  active?: number | "";
  date_birth?: string | "";
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "full_name",
    header: "Nom",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={(e) => {
            e.stopPropagation();
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "poste",
    header: "Type",
  },
  {
    accessorKey: "localisation",
    header: "Tier",
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
    header: "Date D'ajout",
  },
];
