"use client";

import { useState } from "react";
import Image from "next/image";
import UserDropdown from "../ui/shared/UserDropdown";
import Notifications from "../ui/shared/Notifications";
import Switch from "../ui/shared/switch/Switch";
import CustomBreadcrumb from "../ui/Breadcrumbs/Breadcrumbs";
import { useAppSelector } from "@/_lib/redux/hooks";
import { useGetUserByID } from "../react-query/queriesAndMutations";

const Topbar: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const state = useAppSelector((state) => state.connexion.user);

  //initialize the redux store with user data in the local storage
  const { data: signedInUserInfo } = useGetUserByID(state?.[0]?.id || 0);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <nav className="flex-between w-full py-3 px-6 gap-4 sticky top-0 bg-notif z-50">
      <div className="flex-center">
        <div className="mr-1">
          <Image
            src="/assets/sekure.png"
            alt="sekure business"
            width={121}
            height={23.39}
            className="object-contain"
          />
        </div>
        <div className="flex-center p-1 bg-primary rounded-[6px]">
          <h1 className="text-white font-bold text-[17px] leading-[22.19px]">
            Business
          </h1>
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <CustomBreadcrumb />
      </div>
      <div className="flex-between gap-2">
        <UserDropdown
          full_name={signedInUserInfo?.user?.[0]?.full_name}
          image={signedInUserInfo?.user?.[0]?.image}
          user_company={signedInUserInfo?.user?.[0]?.user_company?.[0]}
        />
        <Notifications />
        <Switch text="Mode test" isOn={isOn} handleToggle={handleToggle} />
      </div>
    </nav>
  );
};

export default Topbar;
