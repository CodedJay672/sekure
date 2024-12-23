import { ICustomer, TCustomerCard } from "@/_data/card";
import { formatDate } from "@/utils";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

// create column helper to define a column action
const columnHelper = createColumnHelper<Partial<TCustomerCard>>();

export const columns: ColumnDef<Partial<TCustomerCard>>[] = [
  columnHelper.display({
    id: "index",
    cell: (props) => <span>{props.row.index + 1}</span>,
    header: "No",
  }),
  {
    accessorKey: "customer",
    header: "Utilisateur",
    cell: ({ row }) => {
      const customer = row.getValue("customer") as ICustomer;
      return `${customer?.first_name} ${customer?.last_name}`;
    },
  },
  {
    accessorKey: "card_number",
    cell: ({ row }) => {
      const card = row.getValue("card_number") as string;
      return `**** **** **** ${card}`;
    },
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
    accessorKey: "created_at",
    header: "Date De Creatio",
    cell: ({ row }) => {
      const data = row.getValue("created_at") as string;
      return formatDate(data);
    },
  },
];
