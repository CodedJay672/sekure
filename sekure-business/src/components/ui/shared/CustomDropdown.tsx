"use client";

import {SetStateAction, useState, useId} from 'react';
import { MenuOption } from './MenuOption';
import Image from 'next/image';

const CustomDropdown = () => {
  const [selected, setSelected] = useState('jour');
  const [open, setOpen] = useState(false);
  const id = useId();

  const selectOption = [
    {id: `${id}jour`, label: 'jour'},
    {id: `${id}semine`, label: 'semaine'},
    {id: `${id}mois`, label: 'mois'},
    {id: `${id}année`, label: 'année'},
  ]

  return (
    <div  className="form-select select py-[12px] relative" onClick={() => setOpen(!open)}>
      <p className='text-[12px] leading-3 tracking-[-0.5px] font-medium text-center'>{selected}</p>
      {open && (<div className={`animate-in fade-in-10 slide-in-from-top-10 top-[40px] left-0 w-[213px] rounded-[15px] px-[22px] py-[12px] absolute flex-between gap-1 flex-col before:absolute before:-top-3 before:left-10 before:w-[30px] before:h-[30px] before:rotate-45 before:rounded-[9px] bg-white shadow-xl before:bg-white`}>
        {selectOption.map((option) => (
          <div key={option.id} className="w-full text-[11px] leading-[24px] flex-between" onClick={() => {
            setSelected(option.label);
          }}>
            <span className='text-black flex-1'>per {option.label}</span>
            <Image
              src="/assets/icons-pack-2/arrow-forward.svg"
              alt="menu"
              width={10}
              height={10}
              className="object-contain"
              />
          </div>
        ))}
      </div>)}
    </div>
  )
}

export default CustomDropdown;