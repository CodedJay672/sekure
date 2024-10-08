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
import { AdresseInfoSchema } from '@/validation';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import FileUploader from '@/components/ui/shared/FileUploader';


const AdjourterForm: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const form = useForm<z.infer<typeof AdresseInfoSchema>>({
    resolver: zodResolver(AdresseInfoSchema),
  })

  
  function onSubmit(values: z.infer<typeof AdresseInfoSchema>) {
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
            name="nom"
            render={({ field }) => (
              <FormItem className='mt-3'>
                <FormLabel className="text-xs font-light">Nom Complet</FormLabel>
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
            name="poste"
            render={({ field }) => (
              <FormItem className='mt-3'>
                <FormLabel className="text-xs font-light">Poste</FormLabel>
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
            name="date"
            render={({ field }) => (
              <FormItem className='mt-3'>
                <FormLabel className="text-xs font-light">Date de Naissance</FormLabel>
                <FormControl>
                  <Input
                    type="text"
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
            name="percentage"
            render={({ field }) => (
              <FormItem className='mt-3'>
                <FormLabel className="text-xs font-light">Pourcentage d’actions</FormLabel>
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
              <FormItem className='mt-3'>
                <FormLabel className="text-xs font-light">Email</FormLabel>
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
            name="tel"
            render={({ field }) => (
              <FormItem className='mt-3'>
                <FormLabel className="text-xs font-light">Numéro de Téléphone</FormLabel>
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
          <br />
          <span className='text-[13px] leading-[17px] font-semibold'>Adresse Personnelle</span>
          <FormField
            control={form.control}
            name="naionalite"
            render={({ field }) => (
              <FormItem className='mt-3'>
                <FormLabel className="text-xs font-light">Nationalité</FormLabel>
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
            name="rue"
            render={({ field }) => (
              <FormItem className='mt-3'>
                <FormLabel className="text-xs font-light">Rue</FormLabel>
                <FormControl>
                  <Input
                    type="text"
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
            name="apartment"
            render={({ field }) => (
              <FormItem className='mt-3'>
                <FormLabel className="text-xs font-light">Appartement, etage</FormLabel>
                <FormControl>
                  <Input
                    type="text"
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
            name="cite"
            render={({ field }) => (
              <FormItem className='mt-3'>
                <FormLabel className="text-xs font-light">Cité</FormLabel>
                <FormControl>
                  <Input
                    type="text"
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
            name="etat"
            render={({ field }) => (
              <FormItem className='mt-3'>
                <FormLabel className="text-xs font-light">Etat</FormLabel>
                <FormControl>
                  <Input
                    type="text"
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
            name="zip"
            render={({ field }) => (
              <FormItem className='mt-3'>
                <FormLabel className="text-xs font-light">Zip Code</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Votre adresse mail"
                    className="input pr-20"
                    {...field}
                    />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />

          <br />
          <span className='text-[13px] leading-[17px] font-semibold'>Adresse Personnelle</span>
          <FormField
            control={form.control}
            name="id_card"
            render={({ field }) => ( 
              <FormItem className='mt-3'>
                <FormLabel className="text-[12px] leading-[24px] font-light">
                  Ajoutez un document de vérification d’identité ( CNI, Passeport, etc )
                </FormLabel>
                <FormControl>
                  <FileUploader
                    fieldOnChange={field.onChange}
                  />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="id_card"
            render={({ field }) => ( 
              <FormItem className='mt-3'>
                <FormLabel className="text-[12px] leading-[24px] font-light">
                  Ajoutez un document qui justifie votre adresse ( CNI, Passeport, etc )
                </FormLabel>
                <FormControl>
                  <FileUploader
                    fieldOnChange={field.onChange}
                  />
                </FormControl>
                <FormMessage className="text-xs font-normal leading-6 text-red-700" />
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

export default AdjourterForm;