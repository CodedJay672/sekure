"use client";

import { useState } from "react";
import { bigTable, data } from "@/constants";
import { Button } from "../ui/button";
import TableComponent from "../ui/shared/TableComponent";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import Voider from "../ui/shared/Voider";
import CreateAdmin from "../CreateAdmin/CreateAdmin";

const EquipeTab = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center">
        <h1 className="flex-1 text-xs font-light text-placeholder-text">Ces clés vous permettront d’authentifier les demandes d’API</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="default"
              type="button"
              className="text-xs leading-[34.5px] font-semibold text-white bg-primary h-[34px]"
              >
              Inviter un membre
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[385px] rounded-[26px]" aria-describedby="Inviter un membre">
            <DialogHeader>
              <DialogTitle className="text-[16px] leading-[20px] font-semibold">Inviter un membre</DialogTitle>
            </DialogHeader>
            <CreateAdmin />
          </DialogContent>
        </Dialog>
      </div>

      <TableComponent variant="big" columns={bigTable} data={data} />
    </>
  )
}

export default EquipeTab;
