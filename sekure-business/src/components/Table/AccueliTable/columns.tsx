import { TCustomerCard } from "@/_data/card";
import { formatDate } from "@/utils";
import { ColumnDef } from "@tanstack/react-table";
import { CopyIcon } from "lucide-react";
import { Transaction } from "../TransactionsTable/validation";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "index",
    cell: (props) => <span>{props.row.index + 1}</span>,
    header: "No",
  },
  {
    accessorKey: "reference",
    cell: ({ row }) => {
      const ref = row.getValue("reference") as string;
      return (
        <span className="flex items-center">
          {ref}{" "}
          <CopyIcon
            size={10}
            className="ml-2"
            onClick={() => {
              navigator.clipboard.writeText(ref);
            }}
          />
        </span>
      );
    },
    header: "Reference",
  },
  {
    accessorKey: "card",
    cell: ({ row }) => {
      const card = row.getValue("card") as TCustomerCard;
      return `${card?.name}`;
    },
    header: "De/Vers",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "amount",
    cell: ({ row }) => {
      const amount = row.getValue("amount") as number;
      return amount.toLocaleString("fr-FR", {
        style: "currency",
        currency: "USD",
      });
    },
    header: "Montant",
  },
  {
    accessorKey: "status",
    header: "Statut",
  },
  {
    accessorKey: "created_at",
    cell: ({ row }) => {
      const data = row.getValue("created_at") as string;
      return formatDate(data);
    },
    header: "Date",
  },
];
