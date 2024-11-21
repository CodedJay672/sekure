import { ColumnDef } from "@tanstack/react-table";

export type Transactions = {
  id_carte: string | "";
  id_ref: string | "";
  montant: string | "";
  type: "Debit" | "Credit";
  active: number | 0;
  description: string | "";
  date: string | "";
};

export const columns: ColumnDef<Transactions>[] = [
  {
    accessorKey: "id_carte",
    header: "ID Carte",
  },
  {
    accessorKey: "id_ref",
    header: "ID Reference",
  },
  {
    accessorKey: "montant",
    header: "Montant",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type");

      if (type === "Drebit") {
        return (
          <span className="text-xs text-white bg-primary rounded-full py-1 px-3">
            Debit
          </span>
        );
      }

      return (
        <span className="text-xs text-white bg-red-400 rounded-full py-1 px-3">
          Credit
        </span>
      );
    },
  },
  {
    accessorKey: "active",
    header: "Statut",
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
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];
