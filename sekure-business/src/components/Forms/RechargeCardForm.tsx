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

import { rechargeCardSchema } from "../../_validation";
import { ArrowRightIcon } from "lucide-react";
import { Input } from "../ui/input";
import Currency from "../ui/shared/Currency";
import DetailsTag from "../ui/shared/DetailsTag";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import SuccessAlert from "../Alert/SuccessAlert";

const RechargeCardForm = ({ btnText }: { btnText: string }) => {
  const form = useForm<z.infer<typeof rechargeCardSchema>>({
    resolver: zodResolver(rechargeCardSchema),
  });

  function onSubmit(values: z.infer<typeof rechargeCardSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="labels">Montant à recharger</FormLabel>
              <FormControl>
                <div className="flex-between w-full bg-notif rounded-[7px] relative">
                  <Input
                    placeholder="500"
                    {...field}
                    className="input px-3 pr-20 bg-inherit"
                  />
                  <Currency currency="USD" country="/assets/usa-flag.png" />
                </div>
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <div className="mb-44 flex gap-2">
          <DetailsTag data={{ key: "Frais", value: "1%" }} />
          <DetailsTag data={{ key: "Montant debité", value: "51 500 XAF" }} />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="labels">ID de carte</FormLabel>
              <FormControl>
                <div className="w-full bg-notif rounded-[7px]">
                  <Input
                    placeholder="user@mail.com"
                    {...field}
                    className="input px-3 pr-20 bg-notif"
                  />
                </div>
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <Dialog>
          <DialogTrigger className="w-[330px]">
            <Button type="submit" className="primary-btn w-full">
              <span className="flex-1">{btnText}</span>
              <ArrowRightIcon size={10} color="#fff" />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[383px]">
            <SuccessAlert text="Cette carte a été bloquée avec succès !!" />
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  );
};

export default RechargeCardForm;
