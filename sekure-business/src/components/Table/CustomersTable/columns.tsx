import { ColumnDef } from "@tanstack/react-table";

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
    header: "Email",
  },
  {
    accessorKey: "country",
    header: "Pays",
  },
];
