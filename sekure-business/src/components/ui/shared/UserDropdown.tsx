"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useGetUserByID } from "@/components/react-query/queriesAndMutations";

type TUser = {
  id: number;
};

const UserDropdown: React.FC<TUser> = ({ id }) => {
  const router = useRouter();
  const userInfo = useGetUserByID(id);

  if (userInfo.isPending) {
    return (
      <div className="flex relative cursor-pointer">
        <div className="flex flex-col justify-center items-end mr-2">
          <div className="h-4 bg-gray-300 rounded w-24 mb-1 animate-pulse"></div>
          <div className="h-2 bg-gray-300 rounded w-16 mb-1 animate-pulse"></div>
          <div className="h-2 bg-gray-300 rounded w-12 animate-pulse"></div>
        </div>
        <div className="w-11 h-11 flex flex-center flex-col rounded-full bg-gray-300 animate-pulse"></div>
      </div>
    );
  }

  if (userInfo.isError) {
    return <div>Error loading user information</div>;
  }

  const { full_name, user_company, image } = userInfo?.data?.user?.[0];

  return (
    <div className="flex relative cursor-pointer">
      <div
        className="flex flex-col justify-center items-end mr-2"
        onClick={() => router.push(`/profil/${id}`)}
      >
        <h3 className="text-[11px] leading-[16.5px] font-semibold">
          {full_name}
        </h3>
        <p className="text-[7px] leading-[10.5px] font-normal">
          {user_company?.[0].name}
        </p>
        <span className="text-[7px] leading-[10.5px] text-center font-normal">
          ID: DT{user_company?.[0]?.registry_number}
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
            {full_name?.slice(0, 2).toUpperCase()}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserDropdown;
