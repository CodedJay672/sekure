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

import { userSchema } from "../../_validation";
import { Input } from "../ui/input";
import { useAppSelector } from "@/_lib/redux/hooks";
import { Button } from "../ui/button";
import FileUploader from "../ui/shared/FileUploader";
import { Checkbox } from "../ui/checkbox";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IUpdateUser, updateUser } from "@/_data/user";
import { PiSpinnerLight } from "react-icons/pi";

const UserForm = () => {
  const state = useAppSelector((state) => state.connexion?.user);
  const edit = useAppSelector((state) => state.edit.editUserInfo);
  const queryClient = useQueryClient();

  const {
    mutate: updateUserInfo,
    isSuccess,
    isPending,
    data,
  } = useMutation({
    mutationKey: ["updateUserInfo", state?.id, 4],
    mutationFn: async (updatedInfo: IUpdateUser) => {
      return await updateUser(state?.id as number, 4, updatedInfo);
    },
  });

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
  });

  function onSubmit(values: z.infer<typeof userSchema>) {
    const updatedInfo = {
      ...values,
      image: values.image?.[0]?.name || "",
      active: values.active ?? false,
    };

    updateUserInfo(updatedInfo);
  }

  if (isSuccess) {
    queryClient.invalidateQueries({ queryKey: ["users"] });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[791.86px] flex flex-wrap gap-5"
      >
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-light">First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Kamgaing Kamdem"
                  defaultValue={state?.full_name}
                  {...field}
                  disabled={!edit}
                  className="input pr-20 bg-notif w-[382px]"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-light">Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Steve"
                  defaultValue={state?.street}
                  {...field}
                  disabled={!edit}
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
              <FormLabel className="text-xs font-light">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="kaamsteve@gmail.com"
                  defaultValue={state?.email}
                  {...field}
                  disabled={!edit}
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
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-light">Phone</FormLabel>
              <FormControl>
                <Input
                  placeholder="kaamsteve@gmail.com"
                  defaultValue={state?.email}
                  {...field}
                  disabled={!edit}
                  className="input pr-20 bg-notif w-[382px]"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-light">Image</FormLabel>
              <FormControl>
                <FileUploader fieldOnChange={field.onChange} />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        {edit && (
          <div className="w-full flex-end flex-col">
            <Button
              type="submit"
              disabled={isPending}
              className="btn-primary w-44 text-gray-50"
            >
              {isPending ? <PiSpinnerLight /> : "Save Changes"}
            </Button>
            <span
              className={`${
                isSuccess ? "text-primary" : "text-red-500"
              } text-xs font-medium`}
            >
              {data?.message}
            </span>
          </div>
        )}
      </form>
    </Form>
  );
};

export default UserForm;
