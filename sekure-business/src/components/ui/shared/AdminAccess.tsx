import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet";
import { ArrowRightToLineIcon } from "lucide-react";
import PermissionsComponent from "./PermissionComponent";

const AdminAccess = () => {
  return (
    <div className="flex items-center w-full gap-2 my-3">
      <div className="w-[17px] h-[17px] rounded-full bg-notif" />
      <div className="flex-1 flex-between">
        <span className="text-xs leading-6 font-semibold">Admins</span>
        <Sheet>
          <SheetTrigger asChild>
            <span className="text-xs font-normal text-placeholder-text cursor-pointer">
              voir les accès
              <ArrowRightToLineIcon size={12} className="ml-1 inline-block" />
            </span>
          </SheetTrigger>
          <SheetContent className="w-[383px] overflow-auto" aria-describedby="admin access">
            <SheetHeader className="text-[16px] leading-[24px] font-semibold">Accès pour Admin</SheetHeader>
            <PermissionsComponent />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default AdminAccess
