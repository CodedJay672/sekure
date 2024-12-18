"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import EquipeTab from "@/components/Tabs/EquipeTab";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import JournalTab from "@/components/Tabs/JournalTab";
import RolesTab from "@/components/Tabs/RolesTab";
import { IoIosArrowDown } from "react-icons/io";

const Paramètres: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("tab1");

  const handleChecked = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <section className="wrapper">
      <div className="overflow-hidden w-full flex-1 bg-white rounded-[10px] p-4">
        <Input
          type="radio"
          id="tab1"
          name="tabs"
          value="tab1"
          className="tab-header"
          checked={selectedOption === "tab1"}
          onChange={handleChecked}
        />
        <label htmlFor="tab1" className="tab-label">
          Equipe
        </label>

        <Input
          type="radio"
          id="tab2"
          name="tabs"
          value="tab2"
          className="tab-header"
          checked={selectedOption === "tab2"}
          onChange={handleChecked}
        />
        <label htmlFor="tab2" className="tab-label">
          Rôles
        </label>

        <Input
          type="radio"
          id="tab3"
          name="tabs"
          value="tab3"
          className="tab-header"
          checked={selectedOption === "tab3"}
          onChange={handleChecked}
        />
        <label htmlFor="tab3" className="tab-label">
          Journal de connexions
        </label>

        <section className="tab-content" id="content1">
          <EquipeTab />
        </section>

        <section className="tab-content" id="content2">
          <RolesTab />
        </section>

        <section className="tab-content" id="content3">
          <JournalTab />
        </section>
      </div>
      <div className="w-full max-w-[300px]">
        <div className="flex flex-col gap-3">
          <div className="w-full py-3 px-[14px] rounded-[10px] bg-white">
            <div className="flex-between">
              <h2 className="text-xs flex-1 leading-[34.5px] tracking-[-0.5%] font-semibold">
                Langue
              </h2>
              <p className="text-xs leading-[34.5px] tracking-[-0.5%] font-normal text-placeholder-text">
                Francais
              </p>
              <IoIosArrowDown size={10} className="ml-10" />
            </div>
            <div className="flex-between mt-2">
              <h2 className="text-xs flex-1 leading-[34.5px] tracking-[-0.5%] font-semibold">
                Notifications
              </h2>
              <p className="text-xs leading-[34.5px] tracking-[-0.5%] font-normal text-placeholder-text">
                Activées
              </p>
              <IoIosArrowDown size={10} className="ml-10" />
            </div>
          </div>

          <div className="w-full py-3 px-[14px] rounded-[10px] bg-white">
            <div className="flex-between">
              <h2 className="text-xs leading-[34.5px] tracking-[-0.5%] font-semibold">
                Termes de confidentialité
              </h2>
              <MdOutlineKeyboardArrowRight size={13} />
            </div>
            <div className="flex-between mt-2">
              <h2 className="text-xs leading-[34.5px] tracking-[-0.5%] font-semibold">
                Police d’utilisation
              </h2>
              <MdOutlineKeyboardArrowRight size={13} />
            </div>
            <div className="flex-between mt-2">
              <h2 className="text-xs leading-[34.5px] tracking-[-0.5%] font-semibold">
                Site Web
              </h2>
              <MdOutlineKeyboardArrowRight size={13} />
            </div>
          </div>
        </div>

        <div className="mt-64">
          <h2 className="text-xs leading-[17px]">
            © 2023 Sekure Technologies LLC.
            <br />
            Tous droits réservés{" "}
          </h2>
          <p className="text-[8px] leading-[14px] font-light text-placeholder-text">
            To learn about which Revolut company serves you or if you have any
            questions, please contact us through our in-app chat.
            <br />
            <br />
            Revolut Ltd is registered in England and Wales (No. 08804411), 7
            Westferry Circus, Canary Wharf, London, England, E14 4HD and is
            authorised by the Financial Conduct Authority under the Electronic
            Money Regulations 2011 (Firm Reference 900562). Revolut Travel Ltd
            is authorised by the Financial Conduct Authority to undertake
            insurance distribution activities (FCA No: 780586). Our insurance
            products are arranged by Revolut Travel Ltd and Revolut Ltd, which
            is an appointed representative of Revolut Travel Ltd. Revolut’s
            stock trading products are provided by Revolut Trading Ltd (No.
            832790), an appointed representative of Resolution Compliance Ltd,
            which is authorised and regulated by the Financial Conduct
            Authority.
            <br />
            <br />
            Revolut Ltd is also registered with the Financial Conduct Authority
            to offer cryptocurrency services under the Money Laundering,
            Terrorist Financing and Transfer of Funds (Information on the Payer)
            Regulations 2017. Revolut’s commodities service is not regulated by
            the Financial Conduct Authority.
            <br />
            <br />
            You can read more about our Terms and Policies by clicking here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Paramètres;
