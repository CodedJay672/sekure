"use client";

import AdminChart from "@/components/AdminChart/AdminChart";
import Card from "@/components/Cards/Cards";
import StatsCard from "@/components/StatsCard/StatsCard";
import { RiAddCircleFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { useQuery } from "@tanstack/react-query";
import { getCards, getCardStats } from "@/_data/card";
import { getCardStat } from "@/_lib/features/cards/cardSlice";
import { CardStats } from "@/utils/types/types";
import CartesTable from "@/components/Table/Cartes/CartesTable";

const Cartes: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const id = useAppSelector(
    (state) => state.connexion.user?.user_company?.[0]?.id
  );
  const state = useAppSelector((state) => state.cards.cardStat.evolution_card);

  const { data, isSuccess } = useQuery({
    queryKey: ["cards stats", id],
    queryFn: async () => {
      if (!id) return;
      return await getCardStats(id);
    },
  });

  const { numbe_card_type_visa, number_card_type_master } = data || {};

  if (isSuccess) {
    dispatch(getCardStat(data as CardStats));
    try {
      localStorage.setItem("cardStat", JSON.stringify(data));
    } catch (error) {
      console.log("cannot update storage" + error);
    }
  }

  return (
    <section className="wrapper">
      <div className="overflow-hidden flex-1 flex flex-col gap-4">
        <section className="flex gap-2 w-[80%]">
          <Card
            data1={{
              title: "Total Cartes",
              value: data?.number_card || 0,
            }}
            data2={{
              title: "activees",
              value: data?.number_card_active || 0,
            }}
            data3={{
              title: "suspendues",
              value: data?.number_card_block || 0,
            }}
          />
          <Card
            data1={{
              title: "Cartes créées auj",
              value: data?.number_card || 0,
            }}
            data2={{
              title: "Actifs",
              value: data?.number_card_active || 0,
            }}
            data3={{
              title: "inactifs",
              value: data?.number_card_inactive || 0,
            }}
          />
        </section>
        <section className="flex flex-col gap-4">
          <AdminChart variant="simple" state={state} />
        </section>
        <CartesTable />
      </div>
      <div className="w-[300px] flex flex-col gap-[13px]">
        <h2 className="text-2xl font-semibold leading-[27px] -tracking-[1px]">
          Stats
        </h2>
        <div className="w-full py-3 px-[14px] bg-white overflow-hidden rounded-[10px]">
          <StatsCard
            entry={[numbe_card_type_visa || 0, number_card_type_master || 0]}
          />
        </div>
        <div className="w-full bg-white rounded-[10px] px-[14px] py-3">
          <Button
            type="button"
            variant="default"
            className="primary-btn w-full flex-between"
            onClick={() => router.push(`${pathname}/create-card`)}
          >
            <span className="flex-1 text-center">Créer une carte</span>
            <RiAddCircleFill size={18} className="fill-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cartes;
