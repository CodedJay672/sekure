"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';

interface MenuOptionProps {
  options: {
    label: string;
    path: string;
  }[];
}

export const MenuOption: React.FC<MenuOptionProps> = ({ options }) => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col gap-4">
      {options.map((option, idx) => (
        <div
          key={idx}
          className="text-[11px] leading-[24px] flex-between cursor-pointer"
          onClick={() => router.push(option.path)}
        >
          {option.label} 
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
  );
}
