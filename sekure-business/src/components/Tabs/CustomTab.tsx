"use client";

import { usePathname } from "next/navigation";
import { useId } from "react";

const CustomTab: React.FC = () => {
  const pathname = usePathname();
  const id = useId();

  const tabs = [
    {id: `${id}information`, label: 'Informations'},
    {id: `${id}adresse`, label: 'Adresse'},
    {id: `${id}actionnaires`, label: 'Actionnaires'},
    {id: `${id}legal`, label: 'Legal'},
    {id: `${id}validation`, label: 'Validation'},
  ]

  const path = pathname.split('/')[3];

  return (
    <div className="flex-between gap-2 mt-1">
      {tabs.map((tab) => (
        <div key={tab.id} className={`flex-center py-[2px] w-[78.34px] border-t-4 mt-2 ${path === tab.label.toLowerCase() ? 'border-t-primary text-primary': ''} text-[12px] leading-[24px] text-center`}>
          {tab.label}
        </div>
      ))}
    </div>
  )
}

export default CustomTab
