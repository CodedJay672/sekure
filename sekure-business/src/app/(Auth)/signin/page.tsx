import { createPortal } from 'react-dom';
import SignInForm from '@/components/Forms/SignInForm';
import Image from 'next/image';

const SignIn = () => {
  return (
    <div className="w-full max-w-[448px] h-[285px] flex-1 flex pl-6 justify-start items-center">
      <div className='p-0 w-full'>
        <h1 className="text-[33px] leading-[41px] tracking-[-2px] font-semibold mb-3">
          Se connecter            
        </h1>
        <SignInForm />
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

export default SignIn;
