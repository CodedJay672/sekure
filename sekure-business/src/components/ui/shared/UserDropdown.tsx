"use client";

import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/_lib/redux/hooks";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/_data/user";
import { updateConnexionData } from "@/_lib/features/users/connexionSlice";
import { Login } from "@/utils/types/types";

const UserDropdown: React.FC = () => {
  const Router = useRouter();
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => (state.connexion.user as Login)?.id);

  const { data, isPending, isSuccess } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      return await getUser(id);
    },
  });

  const user = data?.user[0];

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    dispatch(updateConnexionData({ user }));
    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <div
      className="flex relative cursor-pointer"
      onClick={() => Router.push("/profil")}
    >
      <div className="flex flex-col justify-center items-end mr-2">
        <h3 className="text-[11px] leading-[16.5px] font-semibold">
          {user?.first_name}
        </h3>
        <p className="text-[7px] leading-[10.5px] font-normal">business Name</p>
        <span className="text-[7px] leading-[10.5px] text-center font-normal">
          Id: DT{user?.id}
        </span>
      </div>
      <div className="w-[38.66px] h-[38.66px] rounded-full bg-primary flex-center cursor-pointer">
        <span className="text-white text-[15px] leading-[34.5px] text-centerf font-[500]">
          DT
        </span>
      </div>
    </div>
  );
};

export default UserDropdown;
