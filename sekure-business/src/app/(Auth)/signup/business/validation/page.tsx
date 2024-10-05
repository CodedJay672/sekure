"use client";

import UserCard from '@/components/Cards/UserCard'
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React from 'react'

const Validation: React.FC = () => {
  return (
    <div className='flex flex-col gap-4'>
      <span className='text-[12px] leading-[17px] font-normal text-[#8F8F8F]'>
        Vérifiez vos informations pour les envoyer pour validation
      </span>
      <div className='w-full px-[15px] py-[18px] rounded-[19px] border flex flex-col gap-[25px]'>
        <div className='w-[400px]'>
          <h2 className='text-[12px] leading-[17px] font-semibold mb-3'>WAGAPAY</h2>
          <p className='text-[12px] leading-[18px]'>
            wagapay est une fintech qui permet de faire des paiements de facture et en sans vous deplacer
          </p>
        </div>

        <div className='grid grid-cols-4 gap-4 place-content-stretch'>
          <div>
            <p className='text-[12px] leading-[18px] font-normal'>Nom Légal</p>
          </div>
          <div className='col-span-3 pl-1'>
            <p className='text-[12px] leading-[18px] font-normal'>WAGAPAY</p>
          </div>
          <div>
            <p className='text-[12px] leading-[18px] font-normal'>Type d’entreprise</p>
          </div>
          <div className='col-span-3 pl-1'>
            <p className='text-[12px] leading-[18px] font-normal'>WAGAPAY</p>
          </div>
          <div>
            <p className='text-[12px] leading-[18px] font-normal'>Secteur</p>
          </div>
          <div className='col-span-3 pl-1'>
            <p className='text-[12px] leading-[18px] font-normal'>WAGAPAY</p>
          </div>
          <div>
            <p className='text-[12px] leading-[18px] font-normal'>Adresse légale</p>
          </div>
          <div className='col-span-3 pl-1'>
            <p className='text-[12px] leading-[18px] font-normal'>WAGAPAY</p>
          </div>
          <div>
            <p className='text-[12px] leading-[18px] font-normal'>Numéros</p>
          </div>
          <div className='col-span-3 pl-1'>
            <p className='text-[12px] leading-[18px] font-normal'>WAGAPAY</p>
          </div>
        </div>

        <div className='flex gap-[57px]'>
          <div>
            <span className='text-[12px] leading-[18px]'>Document</span>
          </div>
          <div className='flex-1 flex flex-col gap-2'>
            <div className='flex bg-[#F3F3F3] w-[317px] py-3 px-6 gap-3 rounded-[4px]'>
              <Image
                src='/assets/icons-pack/uploadDocument.png'
                alt="uploaded document"
                width={14.22}
                height={14.65}
              />
              <div className='flex-1'>
                <span className='text-[10px] leading-[13.px] text-[#101010]'>Certificat de constitution d’entreprise</span>
              </div>
            </div>
            <div className='flex bg-[#F3F3F3] w-[317px] py-3 px-6 gap-3 rounded-[4px]'>
              <Image
                src='/assets/icons-pack/uploadDocument.png'
                alt="uploaded document"
                width={14.22}
                height={14.65}
              />
              <div className='flex-1'>
                <span className='text-[10px] leading-[13.px] text-[#101010]'>Certificat de constitution d’entreprise</span>
              </div>
            </div>
            <div className='flex bg-[#F3F3F3] w-[317px] py-3 px-6 gap-3 rounded-[4px]'>
              <Image
                src='/assets/icons-pack/uploadDocument.png'
                alt="uploaded document"
                width={14.22}
                height={14.65}
              />
              <div className='flex-1'>
                <span className='text-[10px] leading-[13.px] text-[#101010]'>Certificat de constitution d’entreprise</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserCard
        name='Kamga Kamta Steve'
        email='kamkamsteve@gmail.com'
        poste='CTO'
        parte='50%'
      />

      <UserCard
        name='Kamga Kamta Steve'
        email='kamkamsteve@gmail.com'
        poste='CTO'
        parte='50%'
      />

      <br />
      <div className="w-full flex justify-between gap-2">
        <Button type="button" className="w-[224.24px] h-[50px] bg-transparent border-2 border-primary font-semibold text-primary">
          Retour
        </Button>
        <Button type="submit" className="primary-btn w-[224.24px] h-[50px]">
          Continuer
        </Button>
      </div>
    </div>
  )
}

export default Validation
