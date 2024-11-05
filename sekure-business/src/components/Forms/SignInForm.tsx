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

import { signinSchema } from "../../_validation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { authenticateUser } from "@/_lib/actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

//import the redux store deps
import { updateConnexionData } from "@/_lib/features/users/connexionSlice";
import {
  useAppDispatch,
  useAppSelector,
  useAppStore,
} from "@/_lib/redux/hooks";

const SignInForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    mutate: getAuthorizedUser,
    data,
    isPending,
    error,
  } = useMutation({
    mutationFn: async (values: { email: string; password: string }) => {
      return await authenticateUser(values);
    },
    onSuccess: (data) => {
      if (data && "user" in data) {
        dispatch(updateConnexionData(data));
        toast({
          description: "Vous êtes connecté",
        });

        //redirect to the get otp page
        router.replace("/signin/get-otp");
      } else {
        toast({
          description: "Erreur de connexion",
        });
      }
    },
    onError: (error) => {
      toast({
        description: error.message,
      });
    },
  });

  async function onSubmit(values: z.infer<typeof signinSchema>) {
    getAuthorizedUser(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] leading-4 text-black">
                Adresse Mail
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Votre adresse mail"
                  className="form-input h-[50px] bg[#F3F3F3] text-black focus:ring-primary invalid:border-red-500 placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[11px] leading-4 text-black">
                Mot de passe
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Votre mot de passe"
                  className="form-input h-[50px] bg-[#F3F3F3] text-black focus:ring-primary invalid:border-red-500 placeholder:text-[#B3B3B3] placeholder:text-[12px] placeholder:leading-3 placeholder:font-medium"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <div className="py-3 flex items-center gap-2">
          <Button
            type="submit"
            className="w-[186px] h-[50px] bg-primary rounded-md text-white  my-3"
            disabled={isPending}
          >
            Suivant
          </Button>
          <Link
            href="/signup"
            className="flex-center rounded-md inline-block flex-1 h-[50px] text-[12px] leading-[19px] bg-background px-1"
          >
            Pas encore de compte?{" "}
            <strong className="ml-[2px]">Inscrivez vous</strong>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
