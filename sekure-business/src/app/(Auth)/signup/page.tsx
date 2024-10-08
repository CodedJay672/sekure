import SignupForm from "@/components/Forms/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Sekure Business",
  description: "Sekure provides card services for businesses.",
};

const Signup = () => {
  return (
    <div className='w-full max-w-[448px] flex-1 pl-6 justify-start items-center'>
      <div className='p-0 w-full max-w-[448px]'>
        <h1 className="text-[33px] leading-[41px] tracking-[-2px] font-semibold mb-3">
          Créer un compte
        </h1>
        <SignupForm />
      </div>
    </div>
  )
}

export default Signup;
