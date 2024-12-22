"use client";

import { useState } from "react";
import Image from "next/image";
import SheetSlider from "./SheetSlider";

const Notifications: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className="w-[40.58px] h-[40.58px] relative rounded-full flex justify-center items-center hover:cursor-pointer"
        onClick={handleOpen}
      >
        <Image
          src="/assets/icons-pack-2/notifications.svg"
          alt="notification"
          width={40.58}
          height={40.58}
          className="object-cover"
        />
        <div className="flex-center max-w-[17.48px] max-h-[17.48px] px-[5px] bg-dark3 absolute bottom-0 right-0 rounded-full animate-pulse ease-in-out duration-1000">
          <p className="text-[9px] font-bold leading-6 text-white">3</p>
        </div>
      </div>
      <SheetSlider open={open} openChange={handleOpen}>
        <div className="w-full md:w-[334px] flex flex-col gap-4 mt-3">
          <h1 className="text-base leading-5 font-semibold text-dark3">
            Notifications
          </h1>
          <div className="w-full flex">
            <div className="w-[81px] h-[23px] bg-primary  rounded-[7px] flex-center">
              <p className="text-white text-[9px] leading-[13.5px] font-medium text-center">
                Numero (0)
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            {/* Notification list goes here */}
          </div>
        </div>
      </SheetSlider>
    </>
  );
};

export default Notifications;
