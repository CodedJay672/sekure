"use client";

import { useId, useState } from "react";
import { Input } from "../input";
import { Label } from "../label";

interface StatusSwitchProps {
  text: string;
}

const StatusSwitch: React.FC<StatusSwitchProps> = ({ text }) => {
  const [checked, setChecked] = useState(false);
  const id = useId();

  const handleChecked = () => {
    setChecked(!checked);
  }

  return (
    <div className="w-[300px] 2xl:w-[381px] flex-between">
      <h2 className="text-[12px] leading-4 font-light" id={id}>{text}</h2>
      <div>
        <Input
          type="checkbox"
          checked={checked}
          id="statut-switch"
          className="hidden"
          onChange={handleChecked}
          aria-describedby={id}
        />
        <Label htmlFor="statut-switch" className="relative inline-block w-[93px] h-[18px]">
          <span className={`absolute cursor-pointer pr-4 inset-0 bg-ff transition-[0.4s] rounded-[36px] bg-[#DFEEE7] before:absolute before:h-[12px] before:w-[32px] before:left-[4px] before:bottom-[2.5px] before:transition-[0.4s] before:rounded-[9px] ${checked ? 'before:translate-x-[53px] before:bg-primary' : 'before:bg-[#B8A16B]'}`} />
        </Label>
      </div>
    </div>
  )
}

export default StatusSwitch;
