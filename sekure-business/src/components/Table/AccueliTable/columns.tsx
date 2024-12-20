import { ColumnDef } from "@tanstack/react-table";

export type Transactions = {
  mode_wallet_company: string;
  type: string;
  amount: number;
  balance_before_company: number;
  currency: string;
};

export const columns: ColumnDef<Transactions>[] = [
  {
    accessorKey: "mode_wallet_company",
    header: "Mode",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "balance_before_company",
    header: "Balance Before Company",
  },
  {
    accessorKey: "currency",
    header: "Currency",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
];
