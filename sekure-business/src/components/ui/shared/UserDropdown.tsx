"use client";

import { useRouter } from "next/navigation";
import { useAppSelector } from "@/_lib/redux/hooks";
import Image from "next/image";
import { UserCompany } from "@/_validation/SignIn";

type TUser = {
  full_name: string | undefined;
  image: string | undefined;
  user_company: UserCompany | undefined;
};

const UserDropdown: React.FC<TUser> = ({ full_name, image, user_company }) => {
  const router = useRouter();

  return (
    <div className="flex relative cursor-pointer">
      <div
        className="flex flex-col justify-center items-end mr-2"
        onClick={() => router.push("/profil")}
      >
        <h3 className="text-[11px] leading-[16.5px] font-semibold">
          {full_name}
        </h3>
        <p className="text-[7px] leading-[10.5px] font-normal">
          {user_company?.name}
        </p>
        <span className="text-[7px] leading-[10.5px] text-center font-normal">
          ID: DT{user_company?.registry_number}
        </span>
      </div>

      <div className="w-11 h-11 flex flex-center flex-col rounded-full bg-primary">
        {image ? (
          <Image
            src={image}
            alt="user"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        ) : (
          <p className="text-base text-center leading-[15px] mt-[2px] font-bold text-white">
            DT
          </p>
        )}
      </div>
    </div>
  );
};

export default UserDropdown;
