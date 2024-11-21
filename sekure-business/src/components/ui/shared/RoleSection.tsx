import React from "react";
import { Button } from "../button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";
import PermissionsComponent from "./PermissionComponent";
import { IRoleSectionData } from "@/constants/types";

const RoleSection: React.FC<IRoleSectionData> = ({ role, tagline, data }) => {
  return (
    <div className="w-full max-w-[802px] mb-10">
      <div className="w-full flex-between">
        <div className="flex-1">
          <h2 className="text-base leading-6 font-semibold">{role}</h2>
          <p className="text-xs leading-4 font-light text-placeholder-text">
            {tagline}
          </p>
        </div>
        <Sheet>
          <SheetTrigger>
            <div className="secondary-btn h-[34px] text-xs leading-[34.5px] tracking-[-0.5%] font-semibold px-5 py-3 bg-gray-200 flex-center">
              voir les accès
            </div>
          </SheetTrigger>
          <SheetContent
            className="overflow-auto"
            aria-describedby="admin permissions"
          >
            <SheetHeader>
              <SheetTitle>Accès pour Admin</SheetTitle>
            </SheetHeader>
            <PermissionsComponent />
          </SheetContent>
        </Sheet>
      </div>

      <div className="w-[592px] grid grid-cols-3 gap-4 mt-5">
        {data.map((roles) =>
          roles?.users.map((role, idx) => (
            <div key={idx} className="flex gap-4 items-center">
              <span className="w-[25px] h-[25px] bg-notif rounded-full"></span>
              <p className="text-xs leading-4 font-light text-placeholder-text">
                {role?.poste}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RoleSection;
