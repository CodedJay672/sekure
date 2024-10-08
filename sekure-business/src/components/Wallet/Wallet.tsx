"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuOption } from "../ui/shared/MenuOption";
interface IWalletDetails {
  type: string;
  deposit: string;
  withdraw: string;
}

const Wallet: React.FC<IWalletDetails> = ({ type, deposit, withdraw }) => {
  const [open, setOpen] = useState(false);

  const handleClick =(e: any) => {
    setOpen(!open);
  }

  useEffect(() => {
    const handleToggle = (e: MouseEvent) => {
      if (open) {
        const target = e.target as HTMLElement;
        if (!target.closest('parent-div')) {
          setOpen(false);
        }
      }
    }

    document.addEventListener('mousedown', handleToggle);

    return () => document.removeEventListener('mousedown', handleToggle);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [open]);

  return (
    <article className="w-[304px] py-3 px-[14px] flex flex-col justify-between gap-2 bg-white rounded-[10px]">
      <div className="flex-1 flex-between">
        <div className="flex-between">
          <Image
            src={`${type === 'XAF' ? '/assets/cam-flag.png' : (type === 'IVC' ? '/assets/ivc-flag.png' : '/assets/usa-flag.png')}`}
            alt={type}
            width={21}
            height={21}
            className="object-contain rounded-full"
          />
          <h2 className="text-[12px] leading-[34.5px] tracking-[-0.5px] font-semibold text-dark3 ml-2">Wallet {type}</h2>
        </div>
        <div className="flex-between gap-2">
          <div className="w-6 h-6 flex-center rounded-full overflow-hidden bg-gray-200">
            <Image
              src="/assets/icons-pack/dots.svg"
              alt="menu"
              width={2.5}
              height={10}
              className="object-contain"
            />
          </div>
          <div className="w-6 h-6 flex-center rounded-full overflow-hidden bg-gray-200">
            <Image
              src="/assets/icons-pack/refresh.svg"
              alt="menu"
              width={10}
              height={10}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex-between">
          <span className="text-[12px] leading-[34.5px] tracking-[-0.5px] font-semibold text-placeholder-text flex-1">Solde disponible</span><span className="text-[12px] leading-[34.5px] tracking-[-0.5px] font-normal text-dark3 text-right flex-1">{deposit} {type}</span>
        </div>
        <div className="flex-between">
          <span className="text-[12px] leading-[34.5px] tracking-[-0.5px] font-semibold text-placeholder-text flex-1">Solde Collecte</span><span className="text-[12px] leading-[34.5px] tracking-[-0.5px] font-normal text-dark3 text-right flex-1">{withdraw} {type}</span>
        </div>
      </div>
      <div className="flex-between w-full gap-1 relative">
        <div className="parent-div flex-1 flex flex-col">
          <div
            className="primary-btn flex-between flex-1 h-[34px] px-2 cursor-pointer"
            onClick={handleClick}
            >
            <span className="text-[12px] leading-[34.5px] tracking-[-0.5%] flex-1 text-center">
              Recharger
            </span>
            <div className="bg-white w-6 h-6 rounded-full flex-center">
              <Image
                src="/assets/icons-pack/forward-arrow.svg"
                alt="deposit"
                width={9}
                height={9}
                className="object-contain"
                />
            </div>
          </div>
          {open && (
            <>
            <div className="fixed top-0 left-0 animate-in fade-in-10 w-full h-full bg-black/30 z-[3px]" />
            <div className="top-[29px] left-0 w-[213px] h-[87px] animate-in fade-in-10 slide-in-from-top-10 ease-in-out rounded-[15px] px-[22px] absolute flex-center flex-col gap-[18px] before:absolute before:-top-3 before:left-10 before:w-[30px] before:h-[30px] before:rotate-45 before:rounded-[9px] bg-white shadow-xl before:bg-white beforeshadow-xl">
              <MenuOption options={[
                {label: 'par montant', path: '/recharge-wallet'},
                {label: 'Via dépôt bancaire', path: '/recharge-wallet'},
              ]} />
            </div>
            </>
          )}
        </div>
        <div
          className="bg-dark3 flex-between flex-1 h-[34px] px-2 cursor-pointer rounded-[9px]"
        >
          <div className="w-full flex items-center">
            <Link href='/convert' className="text-[12px] text-white leading-[34.5px] tracking-[-0.5%] flex-1 text-center">
              Convertir
            </Link>
            <div className="bg-white w-6 h-6 rounded-full flex-center">
              <Image
                src="/assets/icons-pack/reset.svg"
                alt="deposit"
                width={10}
                height={10}
                className="object-contain fill-white"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Wallet
