"use client";

import React, { useState } from "react";
import { Label } from "../label";
import { Input } from "../input";
import PermissionsComponent from "./PermissionComponent";
import { useCreateRoleMutation } from "@/components/react-query/queriesAndMutations";
import { Button } from "../button";
import { CgSpinner } from "react-icons/cg";
import { useToast } from "@/hooks/use-toast";

const SheetForm: React.FC = () => {
  const [role, setRole] = useState<string>("");
  const [emptyError, setEmptyError] = useState<string>("");

  const {
    mutateAsync: createRole,
    isPending: isCreatingRole,
    error: createRoleError,
  } = useCreateRoleMutation();
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!role) {
      setEmptyError("Role name cannot be empty");
      return;
    }
    const createdRole = await createRole(role);

    if (createdRole.success) {
      setRole("");
      toast({
        description: createdRole.message,
      });
    }

    if (createRoleError) {
      toast({
        description: createRoleError.message,
      });
    }
  };

  return (
    <>
      <div className="w-full">
        <Label
          htmlFor="role"
          className="text-[10px] leading-[24px] font-normal"
        >
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
          <small className="text-red-500">{emptyError}</small>
        </Label>
      </div>
      <div className="overflow-auto">
        <PermissionsComponent />
      </div>
      <Button
        className="primary-btn w-[330px] h-[34px] my-[2px] text-xs leading-[34.5px] rounded-[9px] tracking-[-0.5%] font-semibold px-6 py-4 flex-center"
        onClick={handleSubmit}
        disabled={isCreatingRole}
      >
        {isCreatingRole ? (
          <CgSpinner size={20} className="animate-spin" />
        ) : (
          "Créer le rôle"
        )}
      </Button>
    </>
  );
};

export default SheetForm;
