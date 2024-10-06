"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

const CustomTab: React.FC = () => {
  const pathname = usePathname();
  const id = useId();
  const [currentTab, setCurrentTab] = useState(
    pathname.split('/')[3] || 'informations'
  );
  const [prevTab, setPrevTab] = useState<string[]>([]);

  const tabs = [
    {id: `${id}information`, label: 'Informations' },
    {id: `${id}adresse`, label: 'Adresse' },
    {id: `${id}actionnaires`, label: 'Actionnaires' },
    {id: `${id}legal`, label: 'Legal' },
    {id: `${id}validation`, label: 'Validation' },
  ]

  useEffect(() => {
    tabs.map((tab) => {
      if (pathname.includes(tab.label.toLowerCase())) {
        setCurrentTab(tab.label.toLowerCase());
      } 
    })
  }, [pathname]);

  return (
    <div className="flex-between gap-2 mt-1">
      {tabs.map((tab, idx) => (
        <div key={tab.id} className={`relative flex-center py-[8px] w-[78.34px] border-t-4 mt-2 ${currentTab === tab.label.toLowerCase() ? 'border-t-primary text-primary': ''} text-[12px] leading-[24px] text-center`}>
          {prevTab.map((prev) => (
            <div className={`absolute bg-[url(/assets/icons-pack-2/success.svg)] bg-no-repeat w-[18px] h-[18px] }bg-center bg-contain -top-3 rounded-[7px]`} />
          ))}
          {tab.label}
        </div>
      ))}
    </div>
  )
}

export default CustomTab;
