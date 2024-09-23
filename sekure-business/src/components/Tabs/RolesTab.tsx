import { AdminData } from "@/constants";
import { Button } from "../ui/button";
import RoleSection from "../ui/shared/RoleSection";

const RolesTab = () => {
  return (
    <>
      <div className="w-full max-w-[802px] flex justify-end">
        <Button 
          variant="default"
          type="button"
          className="primary-btn h-[34px] text-xs leading-[34.5px] tracking-[-0.5%] font-semibold -mt-12"
        >
          Créer un rôle
        </Button>
      </div>

      <RoleSection role="Admins"
        tagline="Ces clés vous permettront d’authentifier les demandes d’API"
        data={AdminData}
      />
      <RoleSection role="Support Client"
        tagline="Ces clés vous permettront d’authentifier les demandes d’API"
        data={AdminData}
      />
      <RoleSection role="Developpeurs"
        tagline="Ces clés vous permettront d’authentifier les demandes d’API"
        data={AdminData}
      />
      <RoleSection role="Equipe d’operation"
        tagline="Ces clés vous permettront d’authentifier les demandes d’API"
        data={AdminData}
      />
    </>
  )
}

export default RolesTab;
