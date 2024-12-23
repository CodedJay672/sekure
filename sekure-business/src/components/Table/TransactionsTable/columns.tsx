import { TCustomerCard } from "@/_data/card";
import { formatDate } from "@/utils";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { CopyIcon } from "lucide-react";

export type Transactions = {
  mode_wallet_company: string;
  type: string;
  amount: number;
  status: string;
  currency: string;
  created_at: string;
  card: TCustomerCard;
};

const columnHelper = createColumnHelper<Transactions>();

export const columns: ColumnDef<Transactions>[] = [
  columnHelper.display({
    id: "index",
    cell: (props) => <span>{props.row.index + 1}</span>,
    header: "No",
  }),
  {
    accessorKey: "card",
    cell: ({ row }) => {
      const card = row.getValue("card") as TCustomerCard;
      const card_number = card?.card_number;
      return `${card_number ? `**** **** **** ${card_number}` : "N/A"}`;
    },
    header: "ID Carte",
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
            className="ml-3"
            onClick={() => {
              navigator.clipboard.writeText(ref);
            }}
          />
        </span>
      );
    },
    header: "Référence",
  },
  {
    accessorKey: "amount",
    cell: ({ row }) => {
      const amount = row.getValue("amount") as number;
      const currency = row.getValue("currency") as string;
      return `${amount.toLocaleString("fr-FR", {
        style: "currency",
        currency: "USD",
      })}`;
    },
    header: "Montant",
  },
  {
    accessorKey: "mode_wallet_company",
    cell: ({ row }) => {
      const mode = row.getValue("mode_wallet_company") as string;
      return (
        <span className="text-[10px] py-1 px-3 rounded-xl bg-primary text-white">
          {mode.toLowerCase()}
        </span>
      );
    },
    header: "Type",
  },
  {
    accessorKey: "statut",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <span className="text-[10px] py-1 px-3 rounded-xl bg-primary text-white">
          {status}
        </span>
      );
    },
    header: "Status",
  },
  {
    accessorKey: "type",
    header: "Description",
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
