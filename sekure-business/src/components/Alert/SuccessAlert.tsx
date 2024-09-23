"use client";

import { RiCheckboxCircleFill } from "react-icons/ri";
import { Button } from "../ui/button";

const SuccessAlert = ({ text }: { text: string }) => {
  return (
    <>
      <div className="alert">
        <RiCheckboxCircleFill color="#18BC7A" size={34.66} className="fill-primary" />
        <p className="w-[250px] font-semibold text-base leading-[19px] text-center">{text}</p>
        <Button
          type="button"
          className="w-[151px] text-dark h-[36px] rounded-[9px] bg-[#EBEBEB]"
        >
          Ok
        </Button>
      </div>
    </>
  )
}

export default SuccessAlert
