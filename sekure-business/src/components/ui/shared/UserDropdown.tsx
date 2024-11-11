"use client";

import { useRouter } from "next/navigation";
import { useAppSelector } from "@/_lib/redux/hooks";

const UserDropdown: React.FC = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.connexion.user);

  return (
    <div
      className="flex relative cursor-pointer"
      onClick={() => router.push("/profil")}
    >
      <div className="flex flex-col justify-center items-end mr-2">
        <h3 className="text-[11px] leading-[16.5px] font-semibold">
          {user?.poste}
        </h3>
        <p className="text-[7px] leading-[10.5px] font-normal">
          {user?.user_company[0].name}
        </p>
        <span className="text-[7px] leading-[10.5px] text-center font-normal">
          Id: DT{user?.id}
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
