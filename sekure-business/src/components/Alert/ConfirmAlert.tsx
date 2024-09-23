"use client";

import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { Button } from "../ui/button";

interface IConfirmAlert {
  heading: string;
  content: string;
  btnText: string;
}

const ConfirmAlert = ({heading, content, btnText}: IConfirmAlert) => {
  const [show, setShow] = useState<Boolean>(true);

  const handleClick = () => {
    setShow(false);
  }


  return (
    <>
    {show && (
    <div className="alert px-6">
      <div className="w-full flex-between flex-row">
        <h2 className="text-dark3 font-semibold text-base leading-5">{heading}</h2>
        <button>
          <RiCloseLine size={11.5} onClick={handleClick}/>
        </button>
      </div>
      <div className="w-full">
        <p className="font-normal text-[10px] text-notif leading-[15px]">{content}</p>
      </div>
      <div className="w-full flex-between">
        <Button variant="default" type="submit" className="primary-btn">{btnText}</Button>
        <Button variant="default" type="button" className="secondary-btn">Annuler</Button>
      </div>
    </div>
  )}
  </>
  )
}

export default ConfirmAlert
