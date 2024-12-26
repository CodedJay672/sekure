"use client";

import React from "react";
import { PiSubtractSquareDuotone } from "react-icons/pi";
import toast, { Toaster } from "react-hot-toast";

interface ICard {
  heading: string;
  number: string;
}

const CardNumber: React.FC<ICard> = ({ heading, number }) => {
  return (
    <article className="w-full mt-2">
      <div className="w-full">
        <p className="text-xs leading-4 font-light text-[#6f6f6f]">{heading}</p>
      </div>
      <div className="w-full flex-between">
        <p className="text-xs leading-[34.5px] tracking-[-0.5%] font-medium">
          {number}
        </p>
        <PiSubtractSquareDuotone
          size={16.4}
          className="cursor-pointer ml-7"
          onClick={() => {
            try {
              navigator.clipboard.writeText(number);
              toast.success("copied!!");
            } catch (error) {
              toast.error("copying failed.");
            }
          }}
        />
      </div>
      <Toaster />
    </article>
  );
};

export default CardNumber;
