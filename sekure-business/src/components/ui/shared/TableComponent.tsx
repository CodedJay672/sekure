"use client";

import React from "react";

interface TableComponentProps {
  heading: string;
  tagline: string;
}

const TableComponent: React.FC<TableComponentProps> = ({
  heading,
  tagline,
}) => {
  return (
    <div className="w-full">
      <h2 className="text-base leading-6 font-semibold">{heading}</h2>
      <p className="text-xs leading-4 font-light">{tagline}</p>
    </div>
  );
};

export default TableComponent;
