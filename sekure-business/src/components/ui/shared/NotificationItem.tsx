import { NotificationItemProps } from "@/constants/types";
import Image from "next/image";
import React from "react";

const NotificationItem: React.FC<NotificationItemProps> = ({ info }) => {
  return (
    <article className="w-full flex gap-3 cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-[url(/assets/images/eclipse.png)] bg-center flex-center">
        <Image
          src="/assets/images/arr-dwn.png"
          alt="notication"
          width={10}
          height={10}
          className="object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-between">
          <h2 className="text-[10px] leading-[15px] font-medium text-dark1">
            {info.title}
          </h2>
          <span className="text-[10px] leading-[15px] font-normal align-right text-[#AEAEAE]">
            {info.date}
          </span>
        </div>

        <div className="mt-[2px]">
          <p className="text-[10px] leading-[15px] font-normal text-[#AEAEAE]">
            {info.description}
          </p>
        </div>
      </div>
    </article>
  )
}

export default NotificationItem
