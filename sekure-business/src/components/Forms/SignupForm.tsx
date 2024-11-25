"use client";

import { useEffect, useState } from "react";
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

import { signupSchema } from "../../_validation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/_lib/redux/hooks";
import { createUser } from "@/_lib/features/Auth/authSlice";
import { CgSpinner } from "react-icons/cg";

const SignupForm = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  //clear the userData from the localStorage
  useEffect(() => {
    localStorage.removeItem("userData");
  }, []);

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      full_name_user: "",
      name_company: "",
      receive_mail: false,
      country_company: "",
      email_user: "",
      password_user: "",
    },
  });

  function onSubmit(values: z.infer<typeof signupSchema>) {
    setIsLoading(true);
    dispatch(createUser(values));

    //persist in the localStorage
    localStorage.setItem("userData", JSON.stringify(values));
    router.push(`${pathname}/business/informations`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="full_name_user"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[12px] leading-6">
                Nom complet
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Entrez votre nom comme sur votre pièce d’identité"
                  className="form-input h-[50px] bg-[#F3F3F3] text-[12px] leading-3 text-black font-medium invalid:ring-red-500 focus:ring-primary placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name_company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[12px] leading-6">
                Nom de l’entreprise
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Entrez le nom de votre entreprise"
                  {...field}
                  className="form-input h-[50px] bg-[#F3F3F3] text-[12px] text-black leading-3 font-medium invalid:ring-red-500 focus:ring-primary placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="receive_mail"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-1 text-white font-bold"
                />
              </FormControl>
              <div className="leading-none">
                <FormLabel className="text-[10px] leading-[15px] font-normal text-[#808080]">
                  Je confirme que mon entreprise est dument enregistrée et
                  possède les autorisations et licences légales pour opérer
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country_company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[10px] leading-[15px] font-normal">
                Pays
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Entrez le nom de votre entreprise"
                  {...field}
                  className="form-input h-[50px] bg-[#F3F3F3] text-[12px] leading-3 text-black font-medium invalid:ring-red-500 focus:ring-primary placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email_user"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[10px] leading-[15px] font-normal">
                Adresse email proféssionnelle
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Votre adresse mail"
                  {...field}
                  className="form-input h-[50px] bg-[#F3F3F3] text-[12px] leading-3 text-black font-medium invalid:ring-red-500 focus:ring-primary placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password_user"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[10px] leading-[15px] font-normal">
                Mot de passe
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Votre mot de passe"
                  {...field}
                  className="form-input h-[50px] bg-[#F3F3F3] text-[12px] leading-3 text-black font-medium invalid:ring-red-500 focus:ring-primary placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <div className="py-3 flex items-center gap-2">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-[186px] h-[50px] bg-primary rounded-md text-white  my-3"
          >
            {isLoading ? (
              <CgSpinner size={20} className="animate-spin" />
            ) : (
              "Créer mon compte"
            )}
          </Button>
          <Link
            href="/signin"
            className="flex-center rounded-md inline-block flex-1 h-[50px] text-[12px] leading-[19px] bg-background"
          >
            Déjà inscrit?{" "}
            <span className="font-bold ml-[2px]">Connectez-vous</span>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default SignupForm;
