"use client";

import React from 'react'
import { RxCaretRight } from 'react-icons/rx';

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
import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from "next/navigation";
import { ActionnairesSchema } from '@/validation';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from '@/components/ui/checkbox';


const VousForm: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const form = useForm<z.infer<typeof ActionnairesSchema>>({
    resolver: zodResolver(ActionnairesSchema),
  })

  
  function onSubmit(values: z.infer<typeof ActionnairesSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    router.push(`${pathname}/get-otp`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <div className='w-full px-[15px] py-[18px] rounded-[19px] border'>
          <span className='text-[13px] leading-[17px] font-semibold'>Details</span>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light text-placeholder-text">Nom Complet</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez votre nom comme sur votre pièce d’identité"
                    className="input pr-20"
                    {...field}
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
                <FormLabel className="text-xs font-light text-placeholder-text">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Votre adresse mail"
                    className="input pr-20"
                    {...field}
                    />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="poste"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light text-placeholder-text">Poste</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez votre nom comme sur votre pièce d’identité"
                    className="input pr-20"
                    {...field}
                    />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="percentage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-light text-placeholder-text">Pourcentage d’actions</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Entrez votre nom comme sur votre pièce d’identité"
                    className="input pr-20"
                    {...field}
                    />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="director"
            render={({ field }) => (
              <FormItem className="flex-between">
                <FormLabel className='text-[12px] leading-[24px] text-[#242424]'>Le Directeur est politiquement exposé</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex-between"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl className='peer-checked:text-primary'>
                        <RadioGroupItem value="non" />
                      </FormControl>
                      <FormLabel className="text-[12px] leading-[18px] text-[#808080]">
                        Non
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="oui" />
                      </FormControl>
                      <FormLabel className="text-[12px] leading-[18px] text-[#808080]">
                        Oui
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <br />
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
                  Je certifie la conformité des informations remplies dans ce formulaire 
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <div className="w-full flex justify-between gap-2">
          <Button type="submit" className="primary-btn w-[224.24px] h-[50px]">
            Valider et continuer
          </Button>
          <Button type="button" className="w-[224.24px] h-[50px] bg-[#F2F2F2]">
            Annuler
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default VousForm;