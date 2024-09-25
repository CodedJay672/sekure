import SignupForm from "@/components/Forms/SignupForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sign Up | Sekure Business",
  description: "Sekure provides card services for businesses.",
};

const Signup = () => {
  return (
    <div className="w-full max-w-[448px] h-[285px] flex-1 flex justify-start items-center">
      <div className='p-0 w-full'>
        <h1 className="text-[33px] leading-[41px] tracking-[-2px] font-semibold mb-3">
          Créer un compte
        </h1>
        <SignupForm />
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

export default Signup;
