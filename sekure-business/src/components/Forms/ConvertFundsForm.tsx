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

import { conversionSchema } from "../../_validation";
import { ArrowRightIcon } from "lucide-react";
import { Input } from "../ui/input";
import Currency from "../ui/shared/Currency";
import DetailsTag from "../ui/shared/DetailsTag";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const ConvertFundsForm = ({ btnText }: { btnText: string }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof conversionSchema>>({
    resolver: zodResolver(conversionSchema),
  });

  function onSubmit(values: z.infer<typeof conversionSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.back();
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
                    type="number"
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
                    type="number"
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
          <DetailsTag data={{ key: "Frais", value: "2.5%" }} />
          <DetailsTag data={{ key: "Montant debité", value: "51 500 XAF" }} />
        </div>

        <Button type="submit" className="primary-btn w-full">
          <span className="flex-1">{btnText}</span>
          <ArrowRightIcon size={10} color="#fff" />
        </Button>
      </form>
    </Form>
  );
};

export default ConvertFundsForm;
