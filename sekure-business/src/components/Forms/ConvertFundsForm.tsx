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
} from "@/components/ui/form"

import { conversionSchema } from "../../validation";
import { ArrowRightIcon } from "lucide-react";
import { Input } from "../ui/input";
import Currency from "../ui/shared/Currency";
import DetailsTag from "../ui/shared/DetailsTag";
import { Button } from "../ui/button";


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Voider from "../ui/shared/Voider";


const ConvertFundsForm = ({ btnText, handleSubmit }: { btnText: string; handleSubmit: () => void; }) => {
  const form = useForm<z.infer<typeof conversionSchema>>({
    resolver: zodResolver(conversionSchema),
  })

  function onSubmit(values: z.infer<typeof conversionSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    handleSubmit();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="receiveAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="labels">Je veux recevoir</FormLabel>
              <FormControl>
                <div className="flex-between w-full bg-notif rounded-[7px] relative">
                  <Input
                    placeholder="50 000"
                    {...field}
                    className="input pr-20 bg-inherit"
                  />
                  <Currency currency="XAF" country="/assets/cam-flag.png" />
                </div>
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="convertAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="labels">Je serai débité de</FormLabel>
              <FormControl>
                <div className="flex-between w-full bg-notif rounded-[7px] relative">
                  <Input
                    placeholder="50 000"
                    {...field}
                    className="input pr-20 bg-notif"
                  />
                  <Currency currency="USD" country="/assets/usa-flag.png" />
                </div>
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <div className="mb-44 flex gap-2">
          <DetailsTag data={{ key: 'Frais', value: '2.5%' }} />
          <DetailsTag data={{ key: 'Montant debité', value: '51 500 XAF' }} />
        </div>

        <Dialog>
          <DialogTrigger>
            <Button type="submit" className="primary-btn w-[330px]">
              <span className="flex-1">
                {btnText}
              </span>
              <ArrowRightIcon size={10} color="#fff" />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[383px]">
            <DialogHeader>
              <DialogTitle>Vaider la transaction</DialogTitle>
              <DialogDescription className="sr-only">Vaider la transaction</DialogDescription>
            </DialogHeader>
            <Voider form={{
              type: "Recharge de solde utilisateur ",
              compte: "Orange Money",
              montant: "5000 XAF",
              numero: "+237 699887766",
              total: "5150 FCFA"
            }}/>
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  )
}

export default ConvertFundsForm;