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

import { cardCreateSchema } from "../../_validation";
import { ArrowRightIcon } from "lucide-react";
import { Input } from "../ui/input";
import DetailsTag from "../ui/shared/DetailsTag";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { createCard, getCards } from "@/_data/card";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface CreateCardFormProps {
  btnText: string;
}

const CreateCardForm: React.FC<CreateCardFormProps> = ({ btnText }) => {
  const { toast } = useToast();
  const state = useAppSelector((state) => state.connexion?.user?.[0]);
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof cardCreateSchema>>({
    resolver: zodResolver(cardCreateSchema),
  });

  const {
    mutate: newCard,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: ["createCard"],
    mutationFn: async ({
      id,
      customer_id,
      version,
    }: {
      id: number;
      customer_id: number;
      version: string;
    }) => {
      if (state?.id !== id) {
        return await createCard({ id, customer_id, version });
      } else {
        throw new Error("User ID is undefined");
      }
    },
    onSuccess: () => {
      console.log("Card created successfully");
    },
  });

  function onSubmit(values: z.infer<typeof cardCreateSchema>) {
    if (values.email !== state?.email) {
      toast({
        description: "L'email ne correspond pas à l'utilisateur connecté",
      });
      return;
    }

    if (state?.id !== undefined) {
      newCard({ id: state?.id, customer_id: 0, version: values.cardType });
    } else {
      toast({
        description: "User ID is undefined",
      });
    }
  }

  if (isSuccess) {
    toast({
      description: "Carte créée avec succès",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="cardType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="labels">Type de carte</FormLabel>
              <FormControl>
                <div className="w-full rounded-[7px]">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select card type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="visa" className="hover:bg-gray-50">
                        Visa
                      </SelectItem>
                      <SelectItem
                        value="mastercard"
                        className="hover:bg-gray-50"
                      >
                        Mastercard
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="text-[8px] font-normal leading-6 text-placeholder-text">
                    Ideake pour les paiements sur Alibab et Netflix, taux du
                    dollars à 685 Fcfa
                  </span>
                </div>
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
              <FormLabel className="labels">Mail de l’utilisateur</FormLabel>
              <FormControl className="flex-between w-full bg-notif pr-3 rounded-[7px]">
                <Input
                  placeholder="user@mail.com"
                  className="input bg-notif w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <div className="mb-44 flex gap-2">
          <DetailsTag data={{ key: "Montant debité", value: "51 500 XAF" }} />
        </div>

        <Button
          variant="default"
          type="submit"
          className="primary-btn flex-between w-full"
        >
          <span className="flex-1 text-center">{btnText}</span>
          <ArrowRightIcon size={16} color="#fff" />
        </Button>
      </form>
    </Form>
  );
};

export default CreateCardForm;
