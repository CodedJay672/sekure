"use client";

import {SetStateAction, useState} from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const CustomDropdown = () => {
  const [selected, setSelected] = useState('Semaine');

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelected(e.target.value)
  }

  return (
    <select name="duration" className="select" value={selected} onChange={handleChange}>
      <option className='text-[11px] leading-6 font-normal text-dark3 flex-between bg-white'>par jour</option>
      <option className='text-[11px] leading-6 font-normal text-dark3 flex-between bg-white'>par semaine</option>
      <option className='text-[11px] leading-6 font-normal text-dark3 flex-between bg-white'>par mois</option>
      <option className='text-[11px] leading-6 font-normal text-dark3 flex-between bg-white'>par année</option>
    </select>
  )
}

export default CustomDropdown;
