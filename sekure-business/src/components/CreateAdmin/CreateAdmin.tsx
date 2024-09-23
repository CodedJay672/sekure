import { Button } from "../ui/button"
import { Label } from "../ui/label"
import AdminAccess from "../ui/shared/AdminAccess"
import { ArrowRightFromLine } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog"
import LoadingSpinner from "../Alert/Loading"

const CreateAdmin = () => {
  return (
    <article className="w-full">
      <div className="my-4">
        <Label htmlFor="role" className="text-[10px] leading-6 text-[#242424]">Adresse mail du membre</Label>
        <input
          type="email"
          id="role"
          name="role"
          className="w-full py-3 px-4 rounded-[10px] border-none outline-none ring-0 bg-[#E9E9E9] text-[10px] leading-6 text-placeholder-text focus:outline-none focus:border-none"
          placeholder="exemple@exemple.com"
        />
      </div>
      <div className="flex-between mb-2">
        <span className="text-[10px] leading-6 text-[#242424]">Choisir le role</span>
        <span className="text-[10px] leading-6 text-[#242424]">Créer un nouveau rôle +</span>
      </div>
      <AdminAccess />
      <hr className="border-[1px] border-[#E5E5E5] my-3" />
      <AdminAccess />
      <hr className="border-[1px] border-[#E5E5E5] my-3" />
      <AdminAccess />
      <hr className="border-[1px] border-[#E5E5E5] my-3" />
      <AdminAccess />

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="default"
            type="button"
            className="flex w-full text-xs leading-[34.5px] tracking-[-0.5%] font-medium text-white bg-primary h-[34px] mt-8 rounded-[9px]"
            >
            <span className="flex-1">
              inviter
            </span>
            <ArrowRightFromLine size={12} className="inline-block" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[383px]">
          <LoadingSpinner />
        </DialogContent>
      </Dialog>
    </article>
  )
}

export default CreateAdmin
