"use client";

import React, { useCallback } from "react";
import { useAppSelector } from "@/_lib/redux/hooks";

interface StepProps {
  step: {
    number: number;
    title: string;
    completed: boolean;
  };
}

const Step: React.FC<StepProps> = ({ step }) => {
  const currentStep = useAppSelector((state) => state.auth.currentStep);

  return (
    <div className="flex-between mt-3 gap-2">
      <div
        className={`relative flex-center py-[8px] w-[78.34px] border-t-4 ${
          currentStep.number === step.number || step.completed
            ? "border-t-primary text-primary group"
            : ""
        } text-[12px] leading-[24px] text-center`}
      >
        {step.completed && (
          <div
            className={`absolute -top-[12px] left-[30px] bg-[url(/assets/icons-pack-2/success.svg)] bg-no-repeat w-[18px] h-[18px] bg-center bg-contain rounded-[7px]`}
          />
        )}
        <span className="group-active:text-primary">{step.title}</span>
      </div>
    </div>
  );
};

export default Step;
