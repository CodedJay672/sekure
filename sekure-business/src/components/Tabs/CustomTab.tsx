"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomTab: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-2">
      <Link href={`${pathname}/information`} className={`text-[12px] leading-[24px] text-center border-t-2 ${pathname === 'information' ? 'border-t-primary' : 'border-t-gray-300'}`}>
        information
      </Link>
      <Link href={`${pathname}/adresse`} className={`text-[12px] leading-[24px] text-center border-t-2  ${pathname === 'adresse' ? 'border-t-primary' : 'border-t-gray-300'}`}>
        adresse
      </Link>
    </div>
  )
}

export default CustomTab
