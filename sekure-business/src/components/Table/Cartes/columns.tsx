import { ICustomer, TCustomerCard } from "@/_data/card";
import RowAction from "@/components/ui/shared/RowAction/RowAction";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

// create column helper to define a column action
const columnHelper = createColumnHelper<Partial<TCustomerCard>>();

export const columns: ColumnDef<Partial<TCustomerCard>>[] = [
  {
    accessorKey: "customer",
    header: "Utilisateur",
    cell: ({ row }) => {
      const customer = row.getValue("customer") as ICustomer;
      return `${customer?.first_name} ${customer?.last_name}`;
    },
  },
  {
    accessorKey: "name",
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
    accessorKey: "created_at",
    header: "Date De Creatio",
    cell: ({ row }) => {
      const date = row.getValue("created_at") as Date;
      return new Date(date).toLocaleDateString();
    },
  },
  columnHelper.display({
    id: "actions",
    cell: (props) => <RowAction row={props.row} />,
  }),
];
