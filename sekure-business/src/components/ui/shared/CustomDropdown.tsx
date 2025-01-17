"use client";

import { useState, useEffect, useId } from "react";
import Image from "next/image";

interface ICustomDropdown {
  period: string;
  onChange: (period: string) => void;
}

const CustomDropdown: React.FC<ICustomDropdown> = ({ period, onChange }) => {
  const [open, setOpen] = useState(false);
  const id = useId();

  const selectOption = [
    { id: `${id}jour`, label: "per Jour" },
    { id: `${id}semine`, label: "per Semaine" },
    { id: `${id}mois`, label: "per Mois" },
    { id: `${id}année`, label: "per Année" },
  ];

  useEffect(() => {
    const handleToggle = (e: MouseEvent) => {
      if (open) {
        const target = e.target as HTMLElement;
        if (!target.closest(".parent-div")) {
          setOpen(false);
        }
      }
    };

    document.addEventListener("click", handleToggle);

    return () => document.removeEventListener("click", handleToggle);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [open]);

  return (
    <div
      className="parent-div form-select select py-[12px] relative"
      onClick={() => setOpen(!open)}
    >
      <p className="text-[12px] leading-3 -tracking-[0.5px] font-medium text-center select-none">
        {period}
      </p>
      {open && (
        <>
          <div className="fixed top-0 left-0 animate-in fade-in-10 w-full h-full bg-black/30 z-10 cursor-default" />
          <div
            className={`animate-in fade-in-10 slide-in-from-top-10 ease-in-out flex flex-col gap-[3px] top-10 right-1 w-[213px] rounded-[15px] py-[12px] z-50 absolute cursor-default before:absolute before:-top-3 before:left-40 before:w-[30px] before:h-[30px] before:-z-10 before:rotate-45 before:rounded-[9px] bg-white shadow-xl before:bg-white`}
          >
            {selectOption.map((option) => (
              <div
                key={option.id}
                className="w-full flex-between px-[22px] cursor-pointer hover:bg-gray-100 transition-all"
                onClick={() => {
                  onChange(option.label);
                }}
              >
                <span className="text-[11px] text-black leading-[24px] flex-1 text-nowrap select-none">
                  {option.label}
                </span>
                <Image
                  src="/assets/icons-pack-2/arrow-forward.svg"
                  alt="menu"
                  width={10}
                  height={10}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CustomDropdown;
