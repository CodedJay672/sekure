"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import UserDropdown from "../ui/shared/UserDropdown";
import Notifications from "../ui/shared/Notifications";
import Switch from "../ui/shared/switch/Switch";
import CustomBreadcrumb from "../ui/Breadcrumbs/Breadcrumbs";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { updateConnexionData } from "@/_lib/features/users/connexionSlice";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/_data/user";

const Topbar: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.connexion?.user);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      try {
        const parsedUser = JSON.parse(loggedInUser);
        dispatch(updateConnexionData(parsedUser));
      } catch (error) {
        console.log("failed to initialize user" + error);
      }
    }
  }, []);

  //initialize the redux store with user data in the local storage
  const { data, isSuccess } = useQuery({
    queryKey: ["getUser", state?.id],
    queryFn: async () => {
      if (state?.id) {
        return await getUser(state?.id);
      }
    },
  });

  //dispatch the user info on Success
  if (isSuccess) {
    if (data?.user[0]) {
      try {
        localStorage.setItem("user", JSON.stringify(data?.user[0]));
        dispatch(updateConnexionData(data.user[0]));
      } catch (error) {
        console.log("cannot update storage" + error);
      }
    }
  }

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
        <UserDropdown />
        <Notifications />
        <Switch text="Mode test" isOn={isOn} handleToggle={handleToggle} />
      </div>
    </nav>
  );
};

export default Topbar;
