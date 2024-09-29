import React from "react";
import { IRoleSectionData } from "@/constants/types";
import { Button } from "../button";
import { Sheet, SheetContent, SheetHeader, SheetOverlay, SheetTitle, SheetTrigger } from "../sheet";
import PermissionsComponent from "./PermissionComponent";

const RoleSection: React.FC<IRoleSectionData> = ({ role, tagline, data}) => {
  return (
    
    <div className="w-full max-w-[802px] mb-10">
      <div className="w-full flex-between">
        <div className="flex-1">
          <h2 className="text-base leading-6 font-semibold">{role}</h2>
          <p className="text-xs leading-4 font-light text-placeholder-text">{tagline}</p>
        </div>
        <Sheet>
          <SheetTrigger>
            <Button
              variant="outline"
              type="button"
              className="secondary-btn h-[34px] text-xs leading-[34.5px] tracking-[-0.5%] font-semibold"
              >
              voir les accès
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-auto">
            <SheetHeader>
              <SheetTitle>Accès pour Admin</SheetTitle>
            </SheetHeader>
            <PermissionsComponent />
          </SheetContent>
        </Sheet>
      </div>

      <div className="w-[592px] grid grid-cols-3 gap-4 mt-5">
        {data.map((roles, idx) => (
          <div key={idx} className="flex gap-4">
            <span className="w-[25px] h-[25px] bg-notif rounded-full"></span>
            <p className="text-xs leading-4 font-light text-placeholder-text">{roles}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoleSection;
