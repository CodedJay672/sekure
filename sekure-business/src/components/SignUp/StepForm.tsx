"use client";

import AdresseForm from "../Forms/adresse/AdresseForm";
import InformationForm from "../Forms/Information/InformationForm";
import { useAppSelector } from "@/_lib/redux/hooks";
import LegalForm from "./Legal/Legal";
import Validation from "./Validation/Validation";
import ActionnairesPage from "./Actionnaires/ActionnairesPage";

const StepForm = () => {
  const currentStep = useAppSelector((state) => state.auth.currentStep);

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
