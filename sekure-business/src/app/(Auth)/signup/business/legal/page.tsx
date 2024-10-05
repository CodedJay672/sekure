"use client";

import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from "next/navigation";
import { LegalSchema } from '@/validation';
import { Checkbox } from '@/components/ui/checkbox';
import DocumentUploader from '@/components/ui/shared/UploadDocument';


const LegalForm: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const form = useForm<z.infer<typeof LegalSchema>>({
    resolver: zodResolver(LegalSchema),
  })

  
  function onSubmit(values: z.infer<typeof LegalSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    router.push(`${pathname}/get-otp`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <span className='text-[12px] leading-[17px] text-[#8F8F8F]'>
          Veuillez ajouter des documents conformes de votre entreprise
        </span>
        <div className='w-full px-[15px] pt-2 pb-[18px] rounded-[19px] border'>
          <FormField
            control={form.control}
            name="certificate"
            render={({ field }) => ( 
              <FormItem className='mt-3'>
                <div className='flex flex-col gap-[1px]'>
                  <span className='text-[13px] leading-[17px] font-semibold'>Certificat de Constitution</span>
                  <FormLabel className="text-[12px] leading-[24px] font-light text-placeholder-text">
                    Veuillez ajouter des documents conformes de votre entreprise
                  </FormLabel>
                </div>
                <FormControl>
                  <DocumentUploader
                    fieldOnChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="proof_of_address"
            render={({ field }) => ( 
              <FormItem className='mt-3'>
                <div className='flex flex-col gap-[1px]'>
                  <span className='text-[13px] leading-[17px] font-semibold'>Preuve d’adresse</span>
                  <FormLabel className="text-[12px] leading-[24px] font-light text-placeholder-text">
                    Ajoutez un document qui justifie l’adresse de votre entreprise
                  </FormLabel>
                </div>
                <FormControl>
                  <DocumentUploader
                    fieldOnChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="constitution_status"
            render={({ field }) => ( 
              <FormItem className='mt-3'>
                <div className='flex flex-col gap-[1px]'>
                  <span className='text-[13px] leading-[17px] font-semibold'>Acte constitutif et statuts</span>
                  <FormLabel className="text-[12px] leading-[24px] font-light text-placeholder-text">
                    Ajoutez les documents legaux des statuts de votre entreprise
                  </FormLabel>
                </div>
                <FormControl>
                  <DocumentUploader
                    fieldOnChange={field.onChange}
                  />
                </FormControl>
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
          <Button type="button" className="border-2 border-primary text-primary w-[224.24px] h-[50px] font-semibold bg-transparent">
            Retour
          </Button>
          <Button type="submit" className="primary-btn w-[224.24px] h-[50px]">
            Continuer
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default LegalForm;