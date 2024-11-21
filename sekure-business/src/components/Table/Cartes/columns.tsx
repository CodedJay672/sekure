import { ColumnDef } from "@tanstack/react-table";

export type Cartes = {
  user: string | "";
  card_name: string | "";
  card_number: string | "";
  type: "Credit" | "Debit";
  active: number | 0;
  date_creation: string | "";
};

export const columns: ColumnDef<Cartes>[] = [
  {
    accessorKey: "user",
    header: "Utilisateur",
  },
  {
    accessorKey: "card_name",
    header: "Nom De Carte",
  },
  {
    accessorKey: "card_number",
    header: "Numero De Carte",
  },
  {
    accessorKey: "type",
    header: "Type",
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
    accessorKey: "date_creation",
    header: "Date De Creatio",
  },
];
