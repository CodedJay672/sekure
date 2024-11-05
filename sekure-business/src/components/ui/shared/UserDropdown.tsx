"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/_lib/redux/hooks";

const UserDropdown: React.FC = () => {
  const Router = useRouter();

  return (
    <div
      className="flex relative cursor-pointer"
      onClick={() => Router.push("/profil")}
    >
      <div className="flex flex-col justify-center items-end mr-2">
        <h3 className="text-[11px] leading-[16.5px] font-semibold">
          First name
        </h3>
        <p className="text-[7px] leading-[10.5px] font-normal">business Name</p>
        <span className="text-[7px] leading-[10.5px] text-center font-normal">
          Id: DT123
        </span>
      </div>
      <div className="w-[38.66px] h-[38.66px] rounded-full bg-primary flex-center cursor-pointer">
        <span className="text-white text-[15px] leading-[34.5px] text-centerf font-[500]">
          DT
        </span>
      </div>
    </div>
  );
};

export default UserDropdown;
