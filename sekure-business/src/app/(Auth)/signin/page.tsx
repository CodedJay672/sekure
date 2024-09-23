import SignInForm from "@/components/Forms/SignInForm";
import SignupForm from "@/components/Forms/SignupForm";

const Signin = () => {
  return (
    <>
      <div className="w-full h-full overflow-y-hidden relative md:w-[490px] bg-white bg-no-repeat bg-right-top bg-[url(/assets/images/login-vector.png)]">
        <div className="h-full px-16 py-12 overflow-x-hiddden overflow-y-scroll">
          <h1 className="text-[35px] leading-[30px] tracking-[-2px] font-semibold text-primary mb-3">
            Connexion à Mon entreprise            
          </h1>
          <SignInForm />
        </div>
      </div>
    </>
  )
}

export default Signin;
