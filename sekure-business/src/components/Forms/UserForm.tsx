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
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { Button } from "../ui/button";
import FileUploader from "../ui/shared/FileUploader";
import { Checkbox } from "../ui/checkbox";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "@/_data/user";
import { PiSpinnerLight } from "react-icons/pi";
import { updateConnexionData } from "@/_lib/features/users/connexionSlice";

const UserForm = () => {
  const state = useAppSelector((state) => state.connexion?.user);
  const edit = useAppSelector((state) => state.edit.editUserInfo);
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const {
    mutate: updateUserInfo,
    isSuccess,
    isPending,
    data,
  } = useMutation({
    mutationKey: ["updateUserInfo", state?.[0]?.id, 4],
    mutationFn: async (updatedInfo: FormData) => {
      return await updateUser(state?.[0]?.id as number, 4, updatedInfo);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["updateUserInfo"] });
      dispatch(updateConnexionData(data.user));
    },
  });

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      first_name: state?.[0]?.full_name?.split(" ")[0],
      last_name: state?.[0]?.full_name?.split(" ").pop(),
      email: state?.[0]?.email,
      active: state?.[0]?.active as unknown as boolean,
      phone: state?.[0]?.phone,
      image: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof userSchema>) {
    //create a new formData object
    const formData = new FormData();

    //append the values to the formData object
    for (const key in values) {
      formData.append(key, values[key as keyof typeof values] as any);
    }

    updateUserInfo(formData);
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
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-light">Phone</FormLabel>
              <FormControl>
                <Input
                  placeholder="kaamsteve@gmail.com"
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
