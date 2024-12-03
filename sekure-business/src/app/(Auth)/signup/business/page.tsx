import StepForm from "@/components/SignUp/StepForm";
import Steps from "@/components/SignUp/Steps";
import React from "react";

export const steps = [
  {
    number: 1,
    title: "Informations",
    completed: false,
  },
  {
    number: 2,
    title: "Adresse",
    completed: false,
  },
  {
    number: 3,
    title: "Actionaires",
    completed: false,
  },
  {
    number: 4,
    title: "Legal",
    completed: false,
  },
  {
    number: 5,
    title: "Validation",
    completed: false,
  },
];

const Business = () => {
  return (
    <section className="w-full">
      <div className="w-full">
        <h2 className="text-[33px] leading-[37px] -tracking-[2px] font-semibold px-10">
          Dites-nous en plus ...
        </h2>
        <Steps steps={steps} />
      </div>
      <div className="w-full p-6">
        <StepForm />
      </div>
    </section>
  );
};

export default Business;
