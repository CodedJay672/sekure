"use client";

import { useState } from "react";
import RoleSection from "../ui/shared/RoleSection";
import SheetForm from "../ui/shared/SheetForm";
import LoadingSpinner from "../Alert/Loading";
import { useGetAllRoles } from "../react-query/queriesAndMutations";
import SheetSlider from "../ui/shared/SheetSlider";

const RolesTab: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { data, isPending, error } = useGetAllRoles();

  if (isPending) {
    return (
      <div className="flex-center min-h-dvh">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div>Error fetching roles</div>;
  }

  const roles = data?.data;

  const adminRoles = roles?.data.filter((role) => role.name === "admin");

  const handleOpenChange = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="w-full max-w-[802px] flex justify-end">
        <div
          className="primary-btn h-[34px] text-xs leading-[34.5px] tracking-[-0.5%] font-semibold -mt-12 mb-2 px-5 py-2 flex-center hover:cursor-pointer"
          onClick={handleOpenChange}
        >
          <span className="text-center">Créer un rôle</span>
        </div>

        <SheetSlider open={open} openChange={handleOpenChange}>
          <SheetForm />
        </SheetSlider>
      </div>

      <RoleSection
        role="Admins"
        tagline="Ces clés vous permettront d’authentifier les demandes d’API"
        data={adminRoles}
      />
      {/* <RoleSection
        role="Support Client"
        tagline="Ces clés vous permettront d’authentifier les demandes d’API"
        data={AdminData}
      />
      <RoleSection
        role="Developpeurs"
        tagline="Ces clés vous permettront d’authentifier les demandes d’API"
        data={AdminData}
      />
      <RoleSection
        role="Equipe d’operation"
        tagline="Ces clés vous permettront d’authentifier les demandes d’API"
        data={AdminData}
      /> */}
    </>
  );
};

export default RolesTab;
