"use client";

import { BsFillTriangleFill } from "react-icons/bs";
import CustomDropdown from "../ui/shared/CustomDropdown";
import BarChart from "../ui/shared/BarChart";
import { useState } from "react";

interface AdminChartProps {
  variant?: "detailed" | "simple";
  state: {
    date: string;
    total: number;
  }[];
  total?: string | number;
}

const AdminChart: React.FC<AdminChartProps> = ({ variant, state, total }) => {
  const [period, setPeriod] = useState("per Jour");

  return (
    <article className="flex flex-col flex-1 bg-white px-[27px] py-[14px] rounded-[10px]">
      <div className="flex-between w-full">
        <div className="flex flex-col gap-1 flex-1">
          <h2 className="text-base leading-5 text-dark3 font-semibold">{`${
            variant !== "detailed"
              ? "Évolution des cartes crées"
              : `Évolution des transactions effectuées`
          }`}</h2>
          {variant !== "detailed" && (
            <p className="text-[12px] leading-4 font-light text-[#6F6F6F]">
              visualisez la courbe d’evolution en nombre de cartes parrainées
              par periode sur votre plateforme
            </p>
          )}
        </div>
        <div className="flex-center w-64 max-w-max">
          <CustomDropdown period={period} onChange={setPeriod} />
          {variant === "detailed" && (
            <div className="ml-3">
              <h2 className="text-xs font-light">Cette {period}</h2>
              <div className="flex-between gap-4">
                <p className="text-[16px] font-bold leading-[16px]">
                  {total?.toLocaleString("fr-FR", {
                    style: "currency",
                    currency: "XAF",
                  })}
                </p>
                <div className="flex-center gap-1">
                  <BsFillTriangleFill size={8} className="fill-primary" />
                  <span className="text-primary text-[12px]">8%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full overflow-hidden mt-3 pb-4">
        <BarChart state={state} />
      </div>
    </article>
  );
};

export default AdminChart;
