"use client";

import AdminChart from "@/components/AdminChart/AdminChart";
import Card from "@/components/Cards/Cards";
import StatsCard from "@/components/StatsCard/StatsCard";
import { RiAddCircleFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useAppSelector } from "@/_lib/redux/hooks";
import CartesTable from "@/components/Table/Cartes/CartesTable";
import { useGetCompanyCardsDetails } from "@/components/react-query/queriesAndMutations";
import LoadingSpinner from "@/components/Alert/Loading";
import Modal from "@/components/ui/shared/Modal";

const Cartes: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const id = useAppSelector(
    (state) => state.connexion.user?.[0]?.user_company?.[0]?.id
  );
  const {
    data: getCompanyCardDetails,
    isError,
    isPending,
    error,
  } = useGetCompanyCardsDetails(id as number);

  if (isPending) {
    return (
      <Modal>
        <LoadingSpinner />
      </Modal>
    );
  }

  if (isError) {
    console.log(error?.message);
    return (
      <section className="wrapper">
        <div>{error?.message}</div>
      </section>
    );
  }

  const { numbe_card_type_visa, number_card_type_master } =
    getCompanyCardDetails || {};

  return (
    <section className="wrapper">
      <div className="tables-charts">
        <section className="flex gap-2 w-[70%]">
          <Card
            data1={{
              title: "Total Cartes",
              value: getCompanyCardDetails?.number_card,
            }}
            data2={{
              title: "MasterCard",
              value: getCompanyCardDetails?.number_card_type_master,
            }}
            data3={{
              title: "VisaCard",
              value: getCompanyCardDetails?.numbe_card_type_visa,
            }}
          />
          <Card
            data1={{
              title: "Actifs",
              value: getCompanyCardDetails?.number_card_active,
            }}
            data2={{
              title: "inactifs",
              value: getCompanyCardDetails?.number_card_inactive,
            }}
            data3={{
              title: "Bloquées",
              value: getCompanyCardDetails?.number_card_block,
            }}
          />
        </section>
        <section className="flex flex-col gap-4">
          <AdminChart
            variant="simple"
            state={getCompanyCardDetails?.evolution_card}
          />
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
