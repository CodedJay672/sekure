"use client";

import { Button } from "../ui/button";

interface IConfirmAlert {
  heading: string;
  content: string;
  btnText: string;
  clickFn: () => void;
  cancelFn?: () => void;
}

const ConfirmAlert: React.FC<IConfirmAlert> = ({
  heading,
  content,
  btnText,
  clickFn,
  cancelFn,
}) => {
  return (
    <div className="alert px-3">
      <div className="w-full flex-between flex-row">
        <h2 className="text-dark3 font-semibold text-base leading-5">
          {heading}
        </h2>
      </div>
      <div className="mt-3 w-full">
        <div className="w-full mb-2">
          <p className="font-normal text-xs text-dark3 leading-[15px]">
            {content}
          </p>
        </div>

        <div className="w-full flex-between mt-6 gap-3">
          <Button className="flex-1 primary-btn" onClick={clickFn}>
            {btnText}
          </Button>
          <Button
            className="flex-1 secondary-btn bg-gray-300"
            onClick={cancelFn}
          >
            Annuler
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAlert;
