"use client";

import { navLinks, bottomNav } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { icon8 } from "../../../public/assets/images/import";
import { signOut } from "@/_lib/actions";
import { useRouter } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="w-[234px] flex-between flex-col gap-24 sticky">
      <div className="w-full">
        {navLinks.map((link, idx) => (
          <Link
            href={link.path}
            key={`${idx}-${link.name}`}
            className={`w-full h-9 px-6 mb-3 flex flex-start items-center gap-3 hover:bg-white group ${
              pathname === link.path ? "bg-white" : ""
            } transition-all`}
          >
            <Image
              priority
              unoptimized
              src={link.icon}
              alt={link.name}
              width={20}
              height={20}
              className={`group-hover:fill-green group-hover:stroke-white object-contain ${
                pathname === link.path
                  ? "fill-primary stroke-white"
                  : "color-dark3"
              } transition-all`}
            />
            <span
              className={`text-dark3 text-[11px] font-normal leading-[16.5px] group-hover:text-primary ${
                pathname === link.path ? "text-primary" : "text-dark3"
              } transition-all`}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="w-full border-t pt-10 border-t-dark3">
        {bottomNav.map((link, idx) => (
          <Link
            href={link.path}
            key={`${idx}-${link.name}`}
            className={`w-full h-9 px-6 mb-3 flex flex-start items-center gap-3 hover:bg-white group ${
              pathname === link.path ? "bg-white" : ""
            } transition-all`}
          >
            <Image
              priority
              unoptimized
              src={link.icon}
              alt={link.name}
              width={16}
              height={16}
              className={`group-hover:color-primary object-contain ${
                pathname === link.path ? "color-primary" : "color-dark3"
              } transition-all`}
            />
            <span
              className={`text-dark3 text-[11px] font-normal leading-[16.5px] group-hover:text-primary ${
                pathname === link.path ? "text-primary" : "text-dark3"
              } transition-all`}
            >
              {link.name}
            </span>
          </Link>
        ))}
        <button
          type="submit"
          className="w-full h-9 px-6 mb-3 flex items-center hover:bg-white group transition-all"
          onClick={async () => {
            await signOut();
            router.replace("/signin");
          }}
        >
          <Image
            priority
            unoptimized
            src={icon8}
            alt="logout"
            width={14}
            height={14}
            className="group-hover:color-primary object-contain transition-all"
          />
          <span className="text-dark3 text-[11px] font-normal leading-[16.5px] group-hover:text-primary group-hover:decoration-transparent ml-4">
            Déconnexion
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
