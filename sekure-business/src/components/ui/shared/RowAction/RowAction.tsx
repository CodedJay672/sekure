"use client";

import React from "react";
import { BsThreeDotsVertical, BsTrash3Fill } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";

interface RowActionProps {
  row: any;
}

const RowAction: React.FC<RowActionProps> = ({ row }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => router.push(`${pathname}/details/${row.original?.id}`)}
      >
        <BsThreeDotsVertical color="green" />
      </button>
      <button onClick={() => console.log(row)}>
        <BsTrash3Fill color="red" />
      </button>
    </div>
  );
};

export default RowAction;
