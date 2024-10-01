import { AdminData } from "@/constants";
import { Button } from "../ui/button";
import RoleSection from "../ui/shared/RoleSection";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "../ui/sheet";
import SheetForm from "../ui/shared/SheetForm";
import PermissionsComponent from "../ui/shared/PermissionComponent";

const RolesTab: React.FC = () => {
  return (
    <>
      <div className="w-full max-w-[802px] flex justify-end">
        <Sheet>
          <SheetTrigger>
            <Button 
              variant="default"
              type="button"
              className="primary-btn h-[34px] text-xs leading-[34.5px] tracking-[-0.5%] font-semibold -mt-12 mb-2"
              >
              Créer un rôle
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col w-[380px] overflow-auto">
            <SheetHeader>
              <SheetTitle>Créer un nouveau rôle</SheetTitle>
            </SheetHeader>
            <SheetForm />
            <div className="overflow-auto">
              <PermissionsComponent />
            </div>
            <Button 
              variant="default"
              type="button"
              className="primary-btn w-[330px] h-[34px] my-[2px] text-xs leading-[34.5px] rounded-[9px] tracking-[-0.5%] font-semibold"
              >
              Créer un rôle
            </Button>
          </SheetContent>
        </Sheet>
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
