"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/_lib/redux/hooks";
import { ProfileSchema } from "@/_validation";
import ProfileHeader from "./ProfileHeader";

const UserDropdown: React.FC = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.connexion?.user);

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
  });

  async function onSubmit(values: z.infer<typeof ProfileSchema>) {
    console.log(values);
  }

  return (
    <div className="flex relative cursor-pointer">
      <div
        className="flex flex-col justify-center items-end mr-2"
        onClick={() => router.push("/profil")}
      >
        <h3 className="text-[11px] leading-[16.5px] font-semibold">
          {user?.poste}
        </h3>
        <p className="text-[7px] leading-[10.5px] font-normal">
          {user?.user_company?.[0]?.name}
        </p>
        <span className="text-[7px] leading-[10.5px] text-center font-normal">
          Id: DT{user?.id}
        </span>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ProfileHeader fieldOnChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default UserDropdown;
