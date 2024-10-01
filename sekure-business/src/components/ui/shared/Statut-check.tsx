import React, { useState } from 'react'
import StatusSwitch from './StatusSwitch';

interface Props {
  title: string;
  items: {
    id: string;
    text: string;
  }[];
}

const StatutCheck: React.FC<Props> = ({ title, items }) => {
  return (
    <div className="mt-10">
      <h2 className="text-[12px] leading-4 font-bold">{title}</h2>
      <div className="flex flex-wrap space-y-2 gap-x-16">
        <StatusSwitch
          items={items}
        />
      </div>
    </div>
  )
}

export default StatutCheck;
