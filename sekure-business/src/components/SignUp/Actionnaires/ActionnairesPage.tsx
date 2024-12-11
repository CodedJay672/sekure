"use client";

import { useState } from "react";
import Actionnaires from "./Actionnaires";
import AdjourterForm from "./Adjourter/AdjourterForm";

const ActionnairesPage = () => {
  const [page, setPage] = useState("home");

  const handleClick = (page: string) => {
    setPage(page);
  };

  return (
    <>
      {page === "home" ? (
        <Actionnaires onPageChange={handleClick} />
      ) : (
        <AdjourterForm onPageChange={handleClick} />
      )}
    </>
  );
};

export default ActionnairesPage;
