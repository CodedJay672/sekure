"use client";

import { bigTable, data } from "@/constants";
import { Button } from "../ui/button";
import TableComponent from "../ui/shared/TableComponent";
import { usePathname, useRouter } from "next/navigation";

const EquipeTab: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center">
        <h1 className="flex-1 text-xs font-light text-placeholder-text">
          Ces clés vous permettront d’authentifier les demandes d’API
        </h1>
        <Button
          variant="default"
          type="button"
          className="text-xs leading-[34.5px] font-semibold text-white bg-primary h-[34px]"
          onClick={() => router.push(`${pathname}/invite-members`)}
          >
          Inviter un membre
        </Button>
      </div>

      <TableComponent variant="big" columns={bigTable} data={data} />
    </>
  )
}

export default EquipeTab;
