"use client";

import React from "react";
import { PiSubtractSquareDuotone } from "react-icons/pi";

interface ICard {
  heading: string;
  number: string;
}

const UserCard: React.FC<ICard> = ({ heading, number }) => {
  return (
    <article className="w-full mt-2">
      <div className="w-full">
        <p className="text-base leading-4 font-semibold">{heading}</p>
      </div>
      <div className="w-full flex-between">
        <p className="text-xs leading-[34.5px] tracking-[-0.5%] font-light text-[#6f6f6f]">
          Joined on {number}
        </p>
        <PiSubtractSquareDuotone size={16.4} className="cursor-pointer ml-7" />
      </div>
    </article>
  );
};

export default UserCard;
