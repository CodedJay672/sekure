import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Customer = {
  first_name: string | "";
  last_name: string | "";
  email: string | "";
  country: string | "";
};

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "first_name",
    header: "Nom",
  },
  {
    accessorKey: "last_name",
    header: "Prenom",
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
    accessorKey: "country",
    header: "Pays",
  },
];
