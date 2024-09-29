import { useState } from "react";
import { Label } from "../label";
import { Input } from "../input";

const SheetForm: React.FC = () => {
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="w-full">
      <Label htmlFor="role" className="text-[10px] leading-[24px] font-normal">
        Nom du rôle
        <Input
          type="text"
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full text-[10px] leading-[24px] font-normal bg-notif rounded-md mt-1"
          defaultValue="exemple@exemple.com"
        />
      </Label>
      <Label htmlFor="description" className="text-[10px] leading-[24px] font-normal">
        Nom du rôle
        <Input
          type="text"
          id="description"
          name="role"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full text-[10px] leading-[24px] font-normal bg-notif rounded-md mt-1"
          defaultValue="exemple@exemple.com"
        />
      </Label>
    </div>
  )
}

export default SheetForm;
