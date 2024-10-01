"use client";

import React, { useState, useId } from "react";
import { Input } from "../input";
import { Label } from "../label";

interface StatusSwitchProps {
  items: {
    id: string;
    text: string;
  }[];
}

const StatusSwitch: React.FC<StatusSwitchProps> = ({ items }) => {
  const [switchStates, setSwitchStates] = useState(
    Object.fromEntries(items.map(config => [config.id, false]))
  );
  const id = useId();

  const handleChecked = (switchId: string) => {
    setSwitchStates(prevState => ({
      ...prevState,
      [switchId]: !prevState[switchId]
    }));
  }

  return (
    <div className="w-[800px] 2xl:w-[830px] flex-between flex-wrap">
      {items.map((config) => (
        <div className="w-[381px] flex-between" key={config.id}>
          <span className="text-[12px] leading-4 font-light">{config.text}</span>
          <div className="mt-2">
            <Input
              type="checkbox"
              className="hidden"
              id={`${config.id}-${id}`}
              onChange={() => handleChecked(config.id)}
              checked={switchStates[config.id]}
            />
            <Label htmlFor={`${config.id}-${id}`} className="relative inline-block w-[93px] h-[18px]">
              <span className={`absolute cursor-pointer pr-4 inset-0 bg-ff transition-[0.4s] rounded-[36px] bg-[#DFEEE7] before:absolute before:h-[12px] before:w-[32px] before:left-[4px] before:bottom-[2.5px] before:transition-[0.4s] before:rounded-[9px] ${switchStates[config.id] ? 'before:translate-x-[53px] before:bg-primary' : 'before:bg-[#B8A16B]'}`} />
            </Label>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatusSwitch;
