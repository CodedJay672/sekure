"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

const CustomTab: React.FC = () => {
  const pathname = usePathname();
  const id = useId();
  const currentTab = pathname.split('/')[3];
  const [tabs, setTabs] = useState([
    { id: `${id}information`, label: 'Informations', completed: false },
    { id: `${id}adresse`, label: 'Adresse', completed: false },
    { id: `${id}actionnaires`, label: 'Actionnaires', completed: false },
    { id: `${id}legal`, label: 'Legal', completed: false },
    { id: `${id}validation`, label: 'Validation', completed: false },
  ]);

  useEffect(() => {
    const visitedTabs = tabs.slice(0, tabs.findIndex((tab) => tab.label.toLowerCase() === currentTab)).map((tab) => tab.label.toLowerCase());

    const newTabs = tabs.map((tab) => {
      if (visitedTabs.includes(tab.label.toLowerCase())) {
        return { ...tab, completed: true };
      }
      return tab;
    });
    
    setTabs([...newTabs]);

    console.log(tabs);
  }, [pathname]);

  return (
    <div className="flex-between mt-3 gap-2">
      {tabs.map((tab) => (
        <div key={tab.id} className={`relative flex-center py-[8px] w-[78.34px] border-t-4 ${currentTab === tab.label.toLowerCase() || tab.completed ? 'border-t-primary text-primary group': ''} text-[12px] leading-[24px] text-center`}>
          {tab.completed && (
            <div className={`absolute -top-[12px] left-[30px] bg-[url(/assets/icons-pack-2/success.svg)] bg-no-repeat w-[18px] h-[18px] bg-center bg-contain rounded-[7px]`} />
          )}
          <span className="group-active:text-primary">{tab.label}</span>
        </div>
      ))}
    </div>
  )
}

export default CustomTab;
