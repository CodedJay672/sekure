"use client";

import { navLinks, bottomNav } from "@/constants"
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { icon8 } from "../../../public/assets/images/import";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-[234px] flex-between flex-col gap-24 sticky top-16">
      <div className="w-full">
        {navLinks.map((link, idx) => (
          <Link href={link.path} key={`${idx}-${link.name}`} className={`w-full h-9 px-6 mb-3 flex flex-start items-center hover:bg-white group ${pathname === link.path ? 'bg-white' : ''} transition-all`}>
            <div className="border border-dark3 rounded-lg mr-4 p-1">
              <Image
                src={link.icon}
                alt={link.name}
                width={10}
                height={10}
                className={`group-hover:color-primary object-contain ${pathname === link.path ? 'color-primary' : 'color-dark3'} transition-all`}
                />
            </div>
            <span className={`text-dark3 text-[11px] font-normal leading-[16.5px] group-hover:text-primary ${pathname === link.path ? 'text-primary' : 'text-dark3'} transition-all`}>{link.name}</span>
          </Link>
        ))}
      </div>
      <div className="w-full border-t pt-10 border-t-dark3">
        {bottomNav.map((link, idx) => (
          <Link href={link.path} key={`${idx}-${link.name}`} className={`w-full h-9 px-6 mb-3 flex flex-start items-center hover:bg-white group ${pathname === link.path ? 'bg-white' : ''} transition-all`}>
          <Image
            src={link.icon}
            alt={link.name}
            width={14}
            height={14}
            className={`group-hover:color-primary object-contain ${pathname === link.path ? 'color-primary' : 'color-dark3'} transition-all`}
            />
          <span className={`text-dark3 text-[11px] font-normal leading-[16.5px] group-hover:text-primary ${pathname === link.path ? 'text-primary' : 'text-dark3'} ml-4 transition-all`}>{link.name}</span>
        </Link>
        ))}
        <Link href='/déconnexion' className="w-full h-9 px-6 mb-3 flex flex-start items-center hover:bg-white group transition-all">
          <Image
            src={icon8}
            alt="logout"
            width={14}
            height={14}
            className="group-hover:color-primary object-contain transition-all"
            />
          <span className="text-dark3 text-[11px] font-normal leading-[16.5px] group-hover:text-primary ml-4">Déconnexion</span>
        </Link>
      </div>
    </nav>
  )
}

export default Sidebar
