"use client";

import { AdminData } from "@/constants";
import RoleSection from "../ui/shared/RoleSection";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import SheetForm from "../ui/shared/SheetForm";
import PermissionsComponent from "../ui/shared/PermissionComponent";
import { getRoles } from "@/_data/roles";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import LoadingSpinner from "../Alert/Loading";

const RolesTab: React.FC = () => {
  const queryClient = useQueryClient();

  queryClient.invalidateQueries({
    queryKey: ["roles"],
  });

  const { data, isPending, error } = useQuery({
    queryKey: ["roles"],
    queryFn: async () => {
      return await getRoles();
    },
  });

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

  return (
    <>
      <div className="w-full max-w-[802px] flex justify-end">
        <Sheet>
          <SheetTrigger>
            <div className="primary-btn h-[34px] text-xs leading-[34.5px] tracking-[-0.5%] font-semibold -mt-12 mb-2 px-5 py-2 flex-center">
              <span className="text-center">Créer un rôle</span>
            </div>
          </SheetTrigger>
          <SheetContent className="flex flex-col w-[380px] overflow-auto">
            <SheetHeader>
              <SheetTitle>Créer un nouveau rôle</SheetTitle>
            </SheetHeader>
            <SheetForm />
            <div className="overflow-auto">
              <PermissionsComponent />
            </div>
            <div className="primary-btn w-[330px] h-[34px] my-[2px] text-xs leading-[34.5px] rounded-[9px] tracking-[-0.5%] font-semibold px-6 py-4 flex-center">
              <span className="text-center">Créer le rôle</span>
            </div>
          </SheetContent>
        </Sheet>
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
