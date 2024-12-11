"use client";

import AdresseForm from "../Forms/adresse/AdresseForm";
import InformationForm from "../Forms/Information/InformationForm";
import { useAppSelector } from "@/_lib/redux/hooks";
import LegalForm from "./Legal/Legal";
import Validation from "./Validation/Validation";
import ActionnairesPage from "./Actionnaires/ActionnairesPage";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const StepForm = () => {
  const currentStep = useAppSelector((state) => state.auth.currentStep);
  const step = useAppSelector((state) => state.auth.userObj.user.step);
  const router = useRouter();

  useEffect(() => {
    if (step === "completed") {
      router.replace("/signin/get-otp");
    }
  }, [step]);

  const renderFormByStep = (step: number) => {
    switch (step) {
      case 2:
        return <AdresseForm />;
      case 3:
        return <ActionnairesPage />;
      case 4:
        return <LegalForm />;
      case 5:
        return <Validation />;
      default:
        return <InformationForm />;
    }
  };
  return <div>{renderFormByStep(currentStep.number)}</div>;
};

export default StepForm;
