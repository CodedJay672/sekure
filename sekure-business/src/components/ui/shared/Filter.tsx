"use client";

import { useState } from "react";
import Image from "next/image";
import FilterForm from "./FilterForm";
import SheetSlider from "./SheetSlider";

const Filter = () => {
  const [open, setOpen] = useState(false);

  const openChange = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className="outline-none cursor-pointer rounded-[9px]"
        onClick={openChange}
      >
        <Image
          src="/assets/icons-pack-2/filter.svg"
          alt="filter"
          width={89}
          height={32}
          className="object-cover"
        />
      </div>
      <SheetSlider open={open} openChange={openChange}>
        <FilterForm />
      </SheetSlider>
    </>
  );
};

export default Filter;
