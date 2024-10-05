import SignupForm from "@/components/Forms/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Sekure Business",
  description: "Sekure provides card services for businesses.",
};

const Signup = () => {
  return (
    <div className='p-0 w-full'>
      <h1 className="text-[33px] leading-[41px] tracking-[-2px] font-semibold mb-3">
        Créer un compte
      </h1>
      <div className="static">
        <SignupForm />
      </div>
    </div>
  )
}

export default Signup;
