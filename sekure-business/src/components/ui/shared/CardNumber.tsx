import React from "react";
import { PiSubtractSquareDuotone } from "react-icons/pi";


interface ICard {
  heading: string;
  number: string;
}

const CardNumber: React.FC<ICard> = ({ heading, number }) => {
  return (
    <article className="w-full mt-2">
      <div className="flex flex-col">
        <p className="text-xs leading-4 font-light text-[#6f6f6f]">{heading}</p>
      </div>
      <div className="w-full flex-between">
        <p className="text-xs leading-[34.5px] tracking-[-0.5%] font-medium">{number}</p>
        <PiSubtractSquareDuotone size={20.4} className="cursor-pointer ml-7" />
      </div>
    </article>
  )
}

export default CardNumber;
