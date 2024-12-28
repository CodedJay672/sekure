import React from "react";
import AccueilRowsSlider from "@/components/Table/AccueliTable/AccueilRowSlider/AccueilRowsSlider";

type TRowDetailsSlider = {
  data: any;
link: string;
};

const RowDetailsSlider: React.FC<TRowDetailsSlider> = ({ data, link }) => {
  return (
    <div className="w-full h-dvh px-2 pb-14 overflow-auto">
      <AccueilRowsSlider data={data} link={link} />
    </div>
  );
};

export default RowDetailsSlider;
