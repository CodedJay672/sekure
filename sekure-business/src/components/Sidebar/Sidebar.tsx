"use client";

import { navLinks, bottomNav } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { icon8 } from "../../../public/assets/images/import";
import { useState } from "react";
import ConfirmAlert from "../Alert/ConfirmAlert";
import { Dialog, DialogContent, DialogOverlay } from "../ui/dialog";
import { PiPlusBold } from "react-icons/pi";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [showCustomers, setShowCustomers] = useState(false);

  const handleToggle = () => {
    setShowCustomers((prev) => !prev);
  };

  return (
    <nav className="min-w-[234px] flex-between flex-col gap-24">
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

      <div className="w-full flex flex-col gap-1 pl-10">
        <div className="w-full">
          <h2 className="text-dark1 py-1 text-bold text-xs leading-[21px] mb-3">
            Personalized information
          </h2>
        </div>
        <div className="w-full">
          <h2
            className={`text-dark1 px-3 py-1 text-bold text-xs leading-[21px] mb-3 cursor-pointer hover:text-primary hover:border-b-2 border-primary ${
              showCustomers
                ? "bg-gray-300 border-b-2 border-primary text-primary"
                : ""
            } hover:bg-white transition-all`}
            onClick={() => handleToggle()}
          >
            CUSTOMERS
          </h2>
          {showCustomers && (
            <div>
              <Link
                href="/customers"
                className="w-full h-9 text-sm px-6 mb-1 flex flex-start items-center gap-3 hover:bg-white group transition-all"
              >
                all customers
              </Link>
              <Link
                href="/create-customer"
                className="w-full h-9 text-sm px-6 mb-3 flex flex-start items-center gap-3 hover:bg-white group transition-all"
              >
                <PiPlusBold />
                create customer
              </Link>
            </div>
          )}
        </div>
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
        <div
          className="w-full mb-3 ml-0 hover:bg-white group transition-all"
          onClick={() => setOpen(true)}
        >
          <div className="w-full h-9 px-6  bg-transparent group hover:bg-white hover:decoration-transparent hover:cursor-pointer flex justify-start items-center gap-3">
            <Image
              priority
              unoptimized
              src={icon8}
              alt="logout"
              width={14}
              height={14}
              className="group-hover:color-primary object-contain transition-all"
            />
            <span className="text-dark3 text-[11px] font-normal group-hover:text-primary leading-[16.5px]">
              Déconnexion
            </span>
          </div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogOverlay>
            <DialogContent
              aria-describedby="dialog-description"
              className="w-[383px]"
            >
              <ConfirmAlert
                heading="Déconnecter?"
                content="Terminez cette carte pour la supprimer et la rendre inactive. Cette opération est non-reversible. les fonds à l’interieur sont automatiquelenlt reversés dans la Wallet USD"
                btnText="Se déconnecter"
                clickFn={() => setOpen(false)}
              />
            </DialogContent>
          </DialogOverlay>
        </Dialog>
      </div>
    </nav>
  );
};

export default Sidebar;
