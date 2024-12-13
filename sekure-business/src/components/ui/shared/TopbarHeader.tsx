"use client";

import { useEffect, useState } from "react";
import { EditIcon } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { setEditUserInfo } from "@/_lib/features/Edit/editUserInformationSlice";

const TopbarHeader = () => {
  const dispatch = useAppDispatch();
  const editing = useAppSelector((state) => state.edit.editUserInfo);

  useEffect(() => {
    dispatch(setEditUserInfo(false));
  }, []);

  const handleClick = () => {
    dispatch(setEditUserInfo(!editing || false));
  };

  return (
    <div className="w-[76%] flex gap-6">
      <div className="flex-1">
        <h2 className="text-sm leading-24 font-semibold">Détails personnels</h2>
        <p className="text-xs font-light mt-1">
          liste en temps réel des dernieres transactions effectuées avec les
          cartes
        </p>
      </div>
      <div
        className="w-10 h-10 rounded-full border border-gray-200 flex-center group hover:border-gray-300 transition-all hover:cursor-pointer"
        onClick={() => handleClick()}
      >
        <EditIcon className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-all" />
      </div>
    </div>
  );
};

export default TopbarHeader;
