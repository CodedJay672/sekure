"use client";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/_lib/redux/hooks";
import Image from "next/image";

const UserDropdown: React.FC = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.connexion?.user?.[0]);

  return (
    <div className="flex relative cursor-pointer">
      <div
        className="flex flex-col justify-center items-end mr-2"
        onClick={() => router.push("/profil")}
      >
        <h3 className="text-[11px] leading-[16.5px] font-semibold">
          {user?.full_name}
        </h3>
        <p className="text-[7px] leading-[10.5px] font-normal">
          {user?.user_company?.[0]?.name}
        </p>
        <span className="text-[7px] leading-[10.5px] text-center font-normal">
          ID: DT{user?.user_company?.[0]?.registry_number}
        </span>
      </div>

      <div className="w-11 h-11 flex flex-center flex-col rounded-full bg-primary">
        {user?.image ? (
          <Image
            src={user?.image}
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
