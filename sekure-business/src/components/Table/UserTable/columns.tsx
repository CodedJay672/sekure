"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
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

const columnHelper = createColumnHelper<User>();

// Define the columns for the table
export const columns: ColumnDef<User>[] = [
  columnHelper.display({
    id: "index",
    cell: (props) => props.row.index + 1,
  }),
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
          className="text-[10px]"
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
          <span className="text-[10px] text-white bg-primary rounded-full py-1 px-3">
            Actif
          </span>
        );
      }

      return (
        <span className="text-[10px] text-white bg-red-400 rounded-full py-1 px-3">
          Inactif
        </span>
      );
    },
  },
  {
    accessorKey: "date_birth",
    cell: ({ row }) => {
      const date = row.getValue("date_birth") as string;
      const formatedDate = new Date(date).toLocaleDateString("fr-FR", {
        dateStyle: "long",
      });

      return formatedDate;
    },
    header: "Date D'ajout",
  },
];
