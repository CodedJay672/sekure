import PwdRecOTPFForm from '@/components/Forms/PwdRecOTPFForm'
import Image from 'next/image'
import React from 'react'

const GetOTP = () => {
  return (
    <div className="w-full max-w-[448px] h-[285px] flex-1 flex pl-6 justify-start items-center">
      <div className='p-0 w-full'>
        <h1 className="text-[33px] leading-[41px] tracking-[-2px] font-semibold mb-1">
          Entrez le code OTP            
        </h1>
        <p className='text-[12px] leading-[16px] font-normal mb-1'>
          Entrez le code à 5 chiffres envoyé par mail à l’adresse aib______@gmail.com
        </p>
        <PwdRecOTPFForm />
      </div>
      <Image
        src="/assets/images/signup-hero.png"
        alt="signup image"
        width={450}
        height={817}
        className="absolute -top-20 -right-24 2xl:right-14 z-[5000]"
      />
    </div>
  )
}

export default GetOTP;
