"use client";

import React, { useCallback, useEffect, useState } from "react";
import Step from "./Step";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { readFromLocalStorage } from "@/_lib/features/Auth/authAction";

export interface stepsProps {
  steps: {
    number: number;
    title: string;
    completed: boolean;
  }[];
}

const Steps: React.FC<stepsProps> = ({ steps }) => {
  const [pageSteps, setPageSteps] = useState(steps);
  const currentStep = useAppSelector((state) => state.auth.currentStep);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readFromLocalStorage());
  }, []);

  const updateStep = useCallback(
    (step: number) => {
      const newSteps = pageSteps.map((s) => {
        if (s.number < step) {
          s.completed = true;
        }
        return s;
      });
      setPageSteps(newSteps);
    },
    [currentStep.number]
  );

  useEffect(() => {
    updateStep(currentStep.number);
  }, [currentStep.number, updateStep]);

  return (
    <div className="w-full flex justify-evenly">
      {steps.map((step, idx) => (
        <Step key={idx} step={step} />
      ))}
    </div>
  );
};

export default Steps;
