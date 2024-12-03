"use client";

import { useState } from "react";
import Actionnaires from "./Actionnaires";
import AdjourterForm from "./Adjourter/AdjourterForm";
import VousForm from "./Vous/VousForm";

const ActionnairesPage = () => {
  const [page, setPage] = useState("home");

  const handleClick = (page: string) => {
    setPage(page);
  };

  return (
    <>
      {page === "home" ? (
        <Actionnaires onPageChange={handleClick} />
      ) : page === "vous" ? (
        <VousForm onPageChange={handleClick} />
      ) : (
        <AdjourterForm onPageChange={handleClick} />
      )}
    </>
  );
};

export default ActionnairesPage;
