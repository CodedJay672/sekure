import PwdRecOTPFForm from '@/components/Forms/PwdRecOTPFForm'
import Image from 'next/image'
import React from 'react'

const GetOTP = () => {
  return (
    <div className="w-full max-w-[448px] h-[285px] flex-1 flex pl-6 justify-start items-center">
      <div className='p-0 w-full'>
        <h1 className="text-[33px] leading-[41px] tracking-[-2px] font-semibold mb-2">
          Entrez le code OTP            
        </h1>
        <p className='text-[12px] leading-[16px] font-normal mb-2 text-wrap'>
          Entrez le code à 5 chiffres envoyé par mail à l’adresse aib______@gmail.com
        </p>
        <PwdRecOTPFForm />
      </div>
      <Image
        src="/assets/images/login-img.png"
        alt="login image"
        width={488}
        height={770}
        className="absolute -top-6 -right-24 2xl:right-14 z-[5000]"
      />
    </div>
  )
}

export default GetOTP;
