import PwdRecOTPFForm from '@/components/Forms/PwdRecOTPFForm'
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
    </div>
  )
}

export default GetOTP;
