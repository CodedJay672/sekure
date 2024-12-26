"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SuccessAlertProps {
  text: string;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ text }) => {
  const router = useRouter();

  return (
    <div className="alert">
      <Image
        src="/assets/icons-pack-2/success.svg"
        alt="success"
        width={34.66}
        height={34.66}
      />
      <p className="w-[250px] font-semibold text-base leading-[19px] text-center">
        {text}
      </p>
      <Button
        type="button"
        className="w-[151px] text-dark h-[36px] rounded-[9px] bg-[#EBEBEB]"
        onClick={() => router.back()}
      >
        Ok
      </Button>
    </div>
  );
};

export default SuccessAlert;
