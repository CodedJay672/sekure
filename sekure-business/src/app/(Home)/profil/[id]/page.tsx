"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useGetUserByID } from "@/components/react-query/queriesAndMutations";
import { useAppSelector } from "@/_lib/redux/hooks";
import { EditIcon, VerifiedIcon } from "lucide-react";
import { RxAvatar } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/ui/shared/Modal";
import LoadingSpinner from "@/components/Alert/Loading";

const ProfileDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = parseInt(id);
  const signedInUserId = useAppSelector(
    (state) => state.connexion?.user?.[0]?.id
  );
  const [isEditing, setIsEditing] = React.useState(false);

  const handleClick = () => {
    setIsEditing((prev) => !prev);
  };

  const userData = useGetUserByID(userId);

  if (userData.isPending) {
    return (
      <Modal>
        <LoadingSpinner />
      </Modal>
    );
  }

  if (userData.isError) {
    return (
      <Modal>
        <div className="text-base font-semibold text-gray-400">
          {userData.error && userData?.error?.message}
        </div>
      </Modal>
    );
  }

  const isPermitted = userId === signedInUserId;
  const role = userData.data?.user?.[0]?.roles?.[0]?.name;

  return (
    <section className="wrapper flex-col">
      <div className="w-full flex gap-6 mb-2 bg-white p-4 rounded-lg shadow-md flex-between">
        <div className="flex-1">
          <h2 className="text-sm leading-24 font-semibold">
            Détails personnels
          </h2>
          <p className="text-xs font-light mt-1">
            Vos informations personnelles
          </p>
        </div>
        {(isPermitted || role === "admin") && (
          <div
            className={`w-6 h-6 rounded-full border border-gray-200 flex-center group ${
              isEditing ? "border-gray-300" : ""
            } hover:border-gray-300 transition-all hover:cursor-pointer`}
            onClick={() => handleClick()}
          >
            <EditIcon
              fontSize={1}
              className={`w=3 h-3 text-gray-300 ${
                isEditing ? "text-gray-500" : ""
              } group-hover:text-gray-500 transition-all`}
            />
          </div>
        )}
      </div>
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="col-span-4 bg-white rounded-lg shadow-md px-10 py-6">
          <div className="w-36 h-36 rounded-full overflow-hidden mx-auto bg-gray-300">
            {userData.data?.user?.[0]?.image ? (
              <RxAvatar className="w-full h-full object-cover rounded-full" />
            ) : (
              <Image
                src={userData.data?.user?.[0]?.image || "/avatar.png"}
                alt="avatar"
                width={144}
                height={144}
                className="w-full h-full object-cover rounded-full"
              />
            )}
          </div>
          <div className="mt-6 w-full flex-center flex-col">
            <div className="w-full flex-center">
              <p className="flex text-base font-semibold text-primary">
                {userData.data?.user?.[0]?.full_name}{" "}
                {userData.data?.user?.[0]?.step === "completed" && (
                  <VerifiedIcon
                    size={16}
                    color="green"
                    fill="green"
                    stroke="white"
                    className="ml-[2px]"
                  />
                )}
              </p>
            </div>
            <p className="text-xs font-semibold text-gray-500">
              {userData.data?.user?.[0]?.poste}
            </p>
            <p className="text-[10px] font-normal text-gray-500">
              {userData.data?.user?.[0]?.email}
            </p>
            <p className="text-[10px] font-normal text-gray-500">
              Joined on{" "}
              {new Date(
                userData.data?.user?.[0]?.created_at || ""
              ).toLocaleDateString("fr-FR", {
                dateStyle: "long",
              })}
            </p>
          </div>
        </div>
        <div className="flex gap-10 col-span-8 bg-white rounded-lg shadow-md  p-6">
          <div className="w-1/2">
            <h3 className="text-xs font-medium">Personnelles</h3>
            <div className="mt-2">
              <label className="text-xs font-thin">Nom complet</label>
              <div className="flex-between">
                <span className="text-sm font-semibold leading-2">
                  {userData.data?.user?.[0]?.full_name}
                </span>
                {userData.data?.user?.[0]?.active ? (
                  <span className="bg-primary-fade text-primary px-2 py-1 rounded-full text-[10px]">
                    Actif
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-[10px]">
                    Inactif
                  </span>
                )}
              </div>
            </div>
            <div className="mt-2">
              <label className="text-xs font-thin">Email</label>
              <span className="text-[12px] font-normal tracking-wider leading-2 block">
                {userData.data?.user?.[0]?.email}
              </span>
            </div>
            <div className="mt-2">
              <label className="text-xs font-thin">Nationality</label>
              <span className="text-[12px] font-normal tracking-wider leading-2 block">
                {userData.data?.user?.[0]?.nationality}
              </span>
            </div>
            <div className="mt-2">
              <label className="text-xs font-thin">Localisation</label>
              <span className="text-[12px] font-normal tracking-wider leading-2 block">
                {userData.data?.user?.[0]?.localisation}
              </span>
            </div>
            <div className="mt-2">
              <label className="text-xs font-thin">Appartement</label>
              <span className="text-[12px] font-normal tracking-wider leading-2 block">
                {userData.data?.user?.[0]?.appartement}
              </span>
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="text-xs font-medium">D&lsquo;enterprise</h3>
            <div className="mt-2">
              <label className="text-xs font-thin">
                Nom de l&lsquo;entreprise
              </label>
              <div className="flex-between">
                <span className="text-sm font-semibold leading-2">
                  {userData.data?.user?.[0]?.user_company?.[0]?.name}
                </span>
                {userData.data?.user?.[0]?.active ? (
                  <span className="bg-primary-fade text-primary px-2 py-1 rounded-full text-[10px]">
                    Actif
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-[10px]">
                    Inactif
                  </span>
                )}
              </div>
            </div>
            <div className="mt-2">
              <label className="text-xs font-thin">Email</label>
              <span className="text-[12px] font-normal tracking-wider leading-2 block">
                {userData.data?.user?.[0]?.user_company?.[0]?.email}
              </span>
            </div>
            <div className="mt-2">
              <label className="text-xs font-thin">Description</label>
              <span className="text-[12px] font-normal tracking-wider leading-2 block">
                {
                  userData.data?.user?.[0]?.user_company?.[0]
                    ?.description_company
                }
              </span>
            </div>
            <div className="mt-2">
              <label className="text-xs font-thin">Country</label>
              <span className="text-[12px] font-normal tracking-wider leading-2 block">
                {userData.data?.user?.[0]?.user_company?.[0]?.country}
              </span>
            </div>
            <div className="mt-2">
              <label className="text-xs font-thin">Localisation</label>
              <span className="text-[12px] font-normal tracking-wider leading-2 block">
                {userData.data?.user?.[0]?.user_company?.[0]?.localisation}
              </span>
            </div>
            <div className="mt-2">
              <label className="text-xs font-thin">Addresse</label>
              <span className="text-[12px] font-normal tracking-wider leading-2 block">
                {userData.data?.user?.[0]?.user_company?.[0]?.address}
              </span>
            </div>
            <div className="mt-2">
              <label className="text-xs font-thin">Website</label>
              <Link
                href={
                  userData.data?.user?.[0]?.user_company?.[0]?.website_link ||
                  "#"
                }
                target="_blank"
                className="text-[12px] font-normal tracking-wider leading-2 block"
              >
                {userData.data?.user?.[0]?.user_company?.[0]?.website_link}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
