import Image from "next/image";
import Link from "next/link";

interface MenuOptionProps {
  options: {
    label: string;
    path: string;
  }[];
}

export const MenuOption: React.FC<MenuOptionProps> = ({ options }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {options.map((option, idx) => (
        <Link href={option.path} key={idx} className=" text-[11px] leading-[24px] flex-between">
          {option.label} 
          <Image
            src="/assets/icons-pack-2/arrow-forward.svg"
            alt="menu"
            width={10}
            height={10}
            className="object-contain"
          />
        </Link>
      ))}
    </div>
  );
}
