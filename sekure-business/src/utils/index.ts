import { stepsProps } from "@/components/SignUp/Steps";

export const changeStatus = (steps: stepsProps, idx: number) => {
  return steps.steps.map((step) => {
    if (step.number === idx) {
      return {
        ...step,
        completed: true,
      };
    }
  });
};
