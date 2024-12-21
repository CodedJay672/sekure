import RowAction from "@/components/ui/shared/RowAction/RowAction";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

export type Transactions = {
  mode_wallet_company: string;
  type: string;
  amount: number;
  balance_before_company: number;
  currency: string;
};

const columnHelper = createColumnHelper<Transactions>();

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
    header: "Prev. Balance",
  },
  {
    accessorKey: "currency",
    header: "Currency",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  columnHelper.display({
    id: "actions",
    cell: (props) => <RowAction row={props.row} />,
  }),
];
