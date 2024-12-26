"use client";

import { Button } from "../ui/button";
import { signOut } from "@/_lib/actions";
import { useAppDispatch } from "@/_lib/redux/hooks";
import { logout } from "@/_lib/features/users/connexionSlice";
import { useRouter } from "next/navigation";

interface IConfirmAlert {
  heading: string;
  content: string;
  btnText: string;
  clickFn: () => void;
}

const ConfirmAlert: React.FC<IConfirmAlert> = ({
  heading,
  content,
  btnText,
  clickFn,
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClose = () => {
    clickFn();
  };

  const handleConfirm = async () => {
    await signOut();
    dispatch(logout());

    // return to signin page
    router.replace("/signin");
    clickFn();
  };

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
          <Button className="flex-1 primary-btn" onClick={handleConfirm}>
            {btnText}
          </Button>
          <Button
            className="flex-1 secondary-btn bg-gray-300"
            onClick={handleClose}
          >
            Annuler
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAlert;
