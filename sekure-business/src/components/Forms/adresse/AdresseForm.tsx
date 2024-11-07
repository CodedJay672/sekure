"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
import { AdresseSchema } from "@/_validation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/_lib/redux/hooks";
import { createUser } from "@/_lib/features/Auth/authSlice";

const AdresseForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [userInfo, setUserInfo] = useState<string | null>(null);
  let userData: any;

  useEffect(() => {
    setUserInfo(
      localStorage.getItem("userData") ? localStorage.getItem("userData") : null
    );

    if (userInfo) {
      userData = JSON.parse(userInfo);
      dispatch(createUser(userData));
    }
  }, [userInfo]);

  const form = useForm<z.infer<typeof AdresseSchema>>({
    resolver: zodResolver(AdresseSchema),
    defaultValues: {
      poste_user: "",
      country_company: "",
      zip_company: "",
      city_company: "",
      street_company: "",
      address_company: "",
    },
  });

  function onSubmit(values: z.infer<typeof AdresseSchema>) {
    //update the userData
    dispatch(createUser(values));

    //add the new data to the userData
    const newDatas = {
      ...userData,
      ...values,
    };

    //persist in the localStorage
    localStorage.setItem("userData", JSON.stringify(newDatas));

    //step 3
    router.push(`/signup/business/actionnaires`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="border border-[#E5E5E5] rounded-[15px] px-3 py-4">
          <div className="flex flex-wrap justify-between">
            <FormField
              control={form.control}
              name="poste_user"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-light">Pays</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Cameroun"
                      className="input pr-20 w-[213px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs font-normal leading-6 text-red-700" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country_company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-light">
                    Region / State
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Cameroun"
                      {...field}
                      className="input pr-20 w-[213px]"
                    />
                  </FormControl>
                  <FormMessage className="text-xs font-normal leading-6 text-red-700" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="zip_company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-light">
                    Code Postal / ZIP
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Cameroun"
                      {...field}
                      className="input pr-20 w-[213px]"
                    />
                  </FormControl>
                  <FormMessage className="text-xs font-normal leading-6 text-red-700" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city_company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-light">
                    Ville / City
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Cameroun"
                      {...field}
                      className="input pr-20 w-[213px]"
                    />
                  </FormControl>
                  <FormMessage className="text-xs font-normal leading-6 text-red-700" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="street_company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">
                  Quartier / Street
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez votre nom comme sur votre pièce d’identité"
                    {...field}
                    className="input pr-20"
                  />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address_company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light">
                  Appartement / Suite / Etage/ Point repère
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez votre nom comme sur votre pièce d’identité"
                    {...field}
                    className="input pr-20"
                  />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />
        </div>

        <br />
        <div className="w-full flex justify-between">
          <Button
            type="button"
            className="border-2 border-primary w-[224.24px] h-[50px] bg-transparent text-primary font-bold"
          >
            Retour
          </Button>
          <Button type="submit" className="primary-btn w-[224.24px] h-[50px]">
            Continuer
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AdresseForm;
