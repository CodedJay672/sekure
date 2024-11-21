"use client";

import React, { useState } from "react";
import Card from "@/components/Cards/Cards";
import { Button } from "@/components/ui/button";
import Active from "@/components/ui/shared/Active";
import CardNumber from "@/components/ui/shared/CardNumber";
import SearchBar from "@/components/ui/shared/SearchBar";
import TableComponent from "@/components/ui/shared/TableComponent";
import { IoCopyOutline } from "react-icons/io5";
import { RiAddCircleFill } from "react-icons/ri";
import { RxPinRight } from "react-icons/rx";

const UtilisateursDetails: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <section className="wrapper flex gap-4">
      <div className="flex flex-col gap-3 border max-w-[354px]">
        <div className="flex px-3 py-4 bg-white rounded-[10px] items-center">
          <div className="flex-none bg-notif w-[69px] h-[69px] rounded-full mr-4" />
          <CardNumber
            heading="xxxx xxxx xxxx 4565"
            number="Ajouté le 14 Aout 2024"
          />
        </div>
        <div className="px-3 py-4 bg-white rounded-[10px]">
          <div className="flex-between">
            <h2 className="text-xs leading-5 font-semibold">
              Details de Compte
            </h2>
            <Active />
          </div>
          <div className="mt-3">
            <CardNumber heading="ID Utilisateur" number="xxxx xxxx xxxx 4565" />
            <CardNumber heading="Email" number="xxxx xxxx xxxx 4565" />
            <CardNumber
              heading="Num de telephone"
              number="xxxx xxxx xxxx 4565"
            />
            <CardNumber heading="Date Naissance" number="xxxx xxxx xxxx 4565" />
          </div>
        </div>
        <div className="flex-between py-4 px-3 bg-white rounded-[10px] gap-2">
          <Button
            variant="default"
            type="button"
            className="text-xs w-[154px] pr-[3px] text-white leading-[34.5px] tracking-[-0.5%] text-center flex-between"
          >
            <span className="flex-1">Modifier</span>
            <RiAddCircleFill size={24} className="fill-white" />
          </Button>
          <Button
            variant="default"
            type="button"
            className="bg-dark3 w-[154px] pr-[5px] text-xs text-white leading-[34.5px] tracking-[-0.5%] text-center flex-between"
          >
            <span className="flex-1">Blacklister</span>
            <div className="w-[21px] h-[21px] rounded-full flex-none border bg-white flex-center">
              <RxPinRight size={14} color="black" />
            </div>
          </Button>
        </div>

        <div className="bg-white rounded-[10px] w-full py-4 px-3">
          <div className="flex-between">
            <h2 className="text-base leading-5 font-semibold">Cartes (4)</h2>
            <Button
              variant="default"
              type="button"
              className="text-xs w-[154px] pr-[3px] text-white leading-[34.5px] tracking-[-0.5%] text-center flex-between"
            >
              <span className="flex-1">Créer une carte</span>
              <RiAddCircleFill size={24} className="fill-white" />
            </Button>
          </div>
          <div className="flex-between my-2">
            <h2 className="text-xs leading-[34.5px] tracking-[-0.5%] font-medium">
              Solde Total de la carte
            </h2>
            <span className="text-xs leading-[34.5px] tracking-[-0.5%] font-bold">
              $54200.50
            </span>
          </div>
          {/* <TableComponent columns={smallTable} data={smallData} /> */}
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="w-full flex-between gap-2">
          <Card
            data1={{ title: "Total paiements", value: "$54200.50" }}
            data2={{ title: "activées", value: "1437" }}
            data3={{ title: "suspendues", value: "46" }}
          />
          <Card
            data1={{ title: "Total paiements", value: "$54200.50" }}
            data2={{ title: "activées", value: "1437" }}
            data3={{ title: "suspendues", value: "46" }}
          />
          <Card
            data1={{ title: "Total paiements", value: "$54200.50" }}
            data2={{ title: "activées", value: "1437" }}
            data3={{ title: "suspendues", value: "46" }}
          />
        </div>
        <div className="w-full bg-white mt-3  px-2 py-3 rounded-[10px] overflow-hidden">
          <h2 className="text-base leading-6 font-semibold">
            Liste des transactions
          </h2>
          <div className="w-full flex-between mt-2 gap-2">
            {/* <SearchBar placeholder="Enter search term..." setData={setQuery} /> */}
            <div className="max-w-[108px] h-8 rounded-[5px] bg-notif">
              <span className="text-xs leading-[34.5px] tracking-[-0.5px] text-center font-normal text-placeholder-text px-2">
                Date de debut
              </span>
            </div>
            <div className="max-w-[108px] h-8 rounded-[5px] bg-notif">
              <span className="text-xs leading-[34.5px] tracking-[-0.5px] text-center font-normal text-placeholder-text px-2">
                Date de Fin
              </span>
            </div>
            <div className="max-w-[108px] h-8 rounded-[5px] bg-primary-fade flex-center px-3 gap-1">
              <IoCopyOutline size={12} color="#18BC7A" />
              <span className="text-xs leading-[34.5px] tracking-[-0.5px] text-center font-normal text-[#18BC7A]">
                Filtrer
              </span>
            </div>
          </div>
          {/* <TableComponent variant="big" columns={bigTable} data={filteredData} /> */}
        </div>
      </div>
    </section>
  );
};

export default UtilisateursDetails;
