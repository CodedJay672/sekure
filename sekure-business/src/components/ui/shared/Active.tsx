import React from "react";

interface active {
  active: number | string;
}

const Active: React.FC<active> = ({ active }) => {
  const isActive = active as unknown as boolean;

  return (
    <div
      className={`w-[70px] h-[29px] rounded-[22px] ${
        isActive ? "bg-primary-fade" : "bg-red-300"
      } flex-center`}
    >
      {isActive ? (
        <span className="text-primary text-[10px] leading-3 tracking-[-0.5%]">
          {typeof active === "number" ? "Active" : "Successful"}
        </span>
      ) : (
        <span className="text-red-600 text-[10px] leading-3 tracking-[-0.5%] t">
          {typeof active === "string" ? active : "Failed"}
        </span>
      )}
    </div>
  );
};

export default Active;
