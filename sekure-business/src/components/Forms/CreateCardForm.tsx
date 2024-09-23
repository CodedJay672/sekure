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

import { cardCreateSchema } from "../../validation";
import { ArrowRightIcon } from "lucide-react";
import { Input } from "../ui/input";
import DetailsTag from "../ui/shared/DetailsTag";
import { Button } from "../ui/button";
import { Dialog, DialogContent,  DialogTrigger } from "../ui/dialog";
import LoadingSpinner from "../Alert/Loading";
import SuccessAlert from "../Alert/SuccessAlert";


interface CreateCardFormProps {
  btnText: string;
}

const CreateCardForm = (props: CreateCardFormProps) => {
  const form = useForm<z.infer<typeof cardCreateSchema>>({
    resolver: zodResolver(cardCreateSchema),
  })

  function onSubmit(values: z.infer<typeof cardCreateSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
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
                  <Input
                    placeholder="VISA 1"
                    className="input w-full bg-notif"
                    {...field}
                  />
                  <span className="text-[8px] font-normal leading-6 text-placeholder-text">Ideake pour les paiements sur Alibab et Netflix, taux du dollars à 685 Fcfa</span>
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
          <DetailsTag data={{ key: 'Montant debité', value: '51 500 XAF' }} />
        </div>

        <Dialog>
          <DialogTrigger className="w-full">
            <Button variant="default" type="submit" className="primary-btn flex-between w-full">
              <span className="flex-1 text-center" {...props} >
                {props.btnText} 
              </span>
              <ArrowRightIcon size={16} color="#fff" />
            </Button>
          </DialogTrigger>
          <DialogContent
            className="w-[383px]"
            aria-describedby="en traitment"
          >
            <SuccessAlert text="Cette carte a été bloquée avec succès !!" />
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  )
}

export default CreateCardForm;