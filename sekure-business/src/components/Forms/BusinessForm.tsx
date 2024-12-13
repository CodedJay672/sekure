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
  FormMessage,
} from "@/components/ui/form";

import { businessNameSchema } from "../../_validation";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { Button } from "../ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ICompanyUpdate, updateCompany } from "@/_data/company";
import { setCompany } from "@/_lib/features/company/CompanySlice";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "../ui/checkbox";
import { CgSpinner } from "react-icons/cg";
import { updateConnexionData } from "@/_lib/features/users/connexionSlice";
import { setEditUserInfo } from "@/_lib/features/Edit/editUserInformationSlice";
import { useRouter } from "next/navigation";

const BusinessForm = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.connexion?.user?.[0]);
  const edit = useAppSelector((state) => state.edit.editUserInfo);
  const company = user?.user_company?.[0];

  const {
    mutate: editCompany,
    data,
    isPending,
  } = useMutation({
    mutationKey: ["editCompany", company?.id],
    mutationFn: async (data: ICompanyUpdate) => {
      if (company?.id && user.id) {
        return await updateCompany(company?.id, user.id, data);
      }
    },
    onSuccess: (data) => {
      if (data.success) {
        dispatch(setCompany(data.company));
        dispatch(updateConnexionData(data.company));
        queryClient.invalidateQueries({ queryKey: ["company", company?.id] });
      }
      toast({
        description: data.message,
      });
    },
    onError: (error) => {
      toast({
        description: error.message,
      });
    },
  });

  const form = useForm<z.infer<typeof businessNameSchema>>({
    resolver: zodResolver(businessNameSchema),
    defaultValues: {
      ...company,
      email: company?.email ?? undefined,
      name: company?.name ?? undefined,
      address: company?.address ?? undefined,
      phone: company?.phone ?? undefined,
      active: (company?.active as unknown as boolean) ?? false,
    },
  });

  function onSubmit(values: z.infer<typeof businessNameSchema>) {
    editCompany({ ...values, active: values.active ?? false });
    if (data?.success) {
      router.replace("/profil");
      dispatch(setEditUserInfo(false));
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[791.86px] flex flex-wrap gap-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-light">
                Business name
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Kamgaing Kamdem"
                  disabled={!edit}
                  className="input pr-20 bg-notif w-[382px]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-light">
                Business Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Steve"
                  disabled={!edit}
                  {...field}
                  className="input pr-20 bg-notif w-[382px]"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-light">
                Business Address
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="kaamsteve@gmail.com"
                  disabled={!edit}
                  {...field}
                  className="input pr-20 bg-notif w-[382px]"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-light">
                Business Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="kaamsteve@gmail.com"
                  disabled={!edit}
                  {...field}
                  className="input pr-20 bg-notif w-[382px]"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="active"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-light">Status</FormLabel>

              <div className="flex items-center gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={!edit}
                    className="text-white font-bold"
                  />
                </FormControl>
                <span className="text-[10px] leading-[15px] font-normal text-[#808080]">
                  Active/Inactive
                </span>
              </div>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />
        {edit && (
          <div className="w-full flex-end">
            <Button
              disabled={isPending}
              type="submit"
              className="btn-primary w-44 text-gray-50"
            >
              {isPending ? (
                <CgSpinner className="animate-spin h-5 w-5" />
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
};

export default BusinessForm;
