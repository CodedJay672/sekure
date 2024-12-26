import React from "react";

interface active {
  active: number;
}

const Active: React.FC<active> = ({ active }) => {
  const isActive = active as unknown as boolean;

  return (
    <div
      className={`w-[70px] h-[29px] rounded-[22px] ${
        isActive ? "bg-primary-fade" : "bg-red-400"
      } flex-center`}
    >
      {isActive ? (
        <span className="text-primary text-xs leading-3 tracking-[-0.5%]">
          Active
        </span>
      ) : (
        <span className="text-red-600 text-xs leading-3 tracking-[-0.5%] t">
          Inactive
        </span>
      )}
    </div>
  );
};

export default Active;
