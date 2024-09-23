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

import { businessNameSchema } from "../../validation";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const BusinessForm = () => {
  const form = useForm<z.infer<typeof businessNameSchema>>({
    resolver: zodResolver(businessNameSchema),
  })

  
  function onSubmit(values: z.infer<typeof businessNameSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-[791.86px] flex flex-wrap gap-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-light text-placeholder-text">Business name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Kamgaing Kamdem"
                  className="input pr-20 bg-notif w-[382px]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-light text-placeholder-text">Business Registration Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Steve"
                  {...field}
                  className="input pr-20 bg-notif w-[382px]"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-light text-placeholder-text">Business Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="kaamsteve@gmail.com"
                  {...field}
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
              <FormLabel className="text-xs font-light text-placeholder-text">Business Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="kaamsteve@gmail.com"
                  {...field}
                  className="input pr-20 bg-notif w-[382px]"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-light text-placeholder-text">Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="This is my description."
                  {...field}
                  className="input resize-none  w-[792px] pr-20 bg-notif"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default BusinessForm
