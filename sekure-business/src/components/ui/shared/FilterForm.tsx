"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { filterSchema } from "@/validation";

const FilterForm = () => {
  const form = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
  })

  function onSubmit(data: z.infer<typeof filterSchema>) {
    alert(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-2">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="border-b border-b-[#e9e9e9]">
              <FormLabel className="text-[10px] leading-[24px] font-normal">Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[306px] h-[45px] bg-[#e9e9e9] text-[10px] font-normal leading-6 text-[#a9a9a9]"
                  >
                    <SelectValue placeholder="montant de depart" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-[10px] font-normal leading-6 text-[#a9a9a9]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="statut"
          render={({ field }) => (
            <FormItem className="border-b border-b-[#e9e9e9]">
              <FormLabel>Statut</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[306px] h-[45px] bg-[#e9e9e9] text-[10px] font-normal leading-6 text-[#a9a9a9]"
                  >
                    <SelectValue placeholder="montant de depart" className="w-[306px] h-[45px] border border-[#AEAEAE] bg-[#AEAEAE]" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-[10px] font-normal leading-6 text-[#a9a9a9]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pays"
          render={({ field }) => (
            <FormItem className="border-b border-b-[#e9e9e9]">
              <FormLabel>Pays</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[306px] h-[45px] bg-[#e9e9e9] text-[10px] font-normal leading-6 text-[#a9a9a9]"
                  >
                    <SelectValue placeholder="montant de depart" className="w-[306px] h-[45px] border border-[#AEAEAE] bg-[#AEAEAE]" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-[10px] font-normal leading-6 text-[#a9a9a9]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="montant"
          render={({ field }) => (
            <FormItem className="border-b border-b-[#e9e9e9]">
              <FormLabel>Montant de à</FormLabel>
              <div>
                <Select onValueChange={field.onChange} defaultValue={field.value?.depart}>
                  <FormControl>
                    <SelectTrigger className="w-[306px] h-[45px] bg-[#e9e9e9] text-[10px] font-normal leading-6 text-[#a9a9a9]"
                    >
                      <SelectValue placeholder="montant de depart" className="w-[306px] h-[45px] border border-[#AEAEAE] bg-[#AEAEAE]" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-[10px] font-normal leading-6 text-[#a9a9a9]" />
                <Select onValueChange={field.onChange} defaultValue={field.value?.fin}>
                  <FormControl>
                    <SelectTrigger className="w-[306px] h-[45px] bg-[#e9e9e9] text-[10px] font-normal leading-6 text-[#a9a9a9]"
                    >
                      <SelectValue placeholder="montant de fin" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-[10px] font-normal leading-6 text-[#a9a9a9]" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date de à</FormLabel>
              <div>
                <Select onValueChange={field.onChange} defaultValue={field.value?.depart}>
                  <FormControl>
                    <SelectTrigger className="w-[306px] h-[45px] bg-[#e9e9e9] text-[10px] font-normal leading-6 text-[#a9a9a9]">
                      <SelectValue placeholder="Date de depart (JJ/MM/AA)" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-[10px] font-normal leading-6 text-[#a9a9a9]" />
                <Select onValueChange={field.onChange} defaultValue={field.value?.fin}>
                  <FormControl>
                    <SelectTrigger className="w-[306px] h-[45px] bg-[#e9e9e9] text-[10px] font-normal leading-6 text-[#a9a9a9]">
                      <SelectValue placeholder="Date de fin (JJ/MM/AA)" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-[10px] font-normal leading-6 text-[#a9a9a9]" />
              </div>
            </FormItem>
          )}
        />
        <div className="w-[306px] flex flex-col justify-center items-center gap-1">
          <Button type="submit" className="w-full bg-primary text-white text-[10px] leading-[34.5px] rounded-[9px]">
            Valider le filtre
          </Button>
          <Button type="button" className="w-full bg-notif text-black text-[10px] leading-[34.5px] rounded-[9px]">
            Réinitialiser
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default FilterForm
