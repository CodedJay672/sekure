"use client";

import React, { useState } from "react";
import PermissionsComponent from "./PermissionComponent";
import { IRoleSectionData } from "@/constants/types";
import SheetSlider from "./SheetSlider";

const RoleSection: React.FC<IRoleSectionData> = ({ role, tagline, data }) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full max-w-[802px] mb-10">
      <div className="w-full flex-between">
        <div className="flex-1">
          <h2 className="text-base leading-6 font-semibold">{role}</h2>
          <p className="text-xs leading-4 font-light text-placeholder-text">
            {tagline}
          </p>
        </div>

        <div
          className="secondary-btn h-[34px] text-xs leading-[34.5px] tracking-[-0.5%] font-semibold px-5 py-3 bg-gray-200 flex-center hover:cursor-pointer"
          onClick={handleOpenChange}
        >
          voir les accès
        </div>
        <SheetSlider open={open} openChange={handleOpenChange}>
          <PermissionsComponent />
        </SheetSlider>
      </div>

      <div className="w-[592px] grid grid-cols-3 gap-4 mt-5">
        {data.map((roles) =>
          roles?.users.map((role, idx) => (
            <div key={idx} className="flex gap-4 items-center">
              <span className="w-[25px] h-[25px] bg-notif rounded-full"></span>
              <p className="text-xs leading-4 font-light text-placeholder-text">
                {role?.full_name}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RoleSection;
