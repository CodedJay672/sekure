import SignupForm from "@/components/Forms/SignupForm";

const Signup = () => {
  return (
    <>
      <div className="w-full h-full overflow-y-hidden relative md:w-[490px] bg-white bg-no-repeat bg-right-top bg-[url(/assets/images/login-vector.png)]">
        <div className="h-full px-8 pt-8 pb-12 md:px-16 md:pt-2 md:pb-12 overflow-x-hiddden overflow-y-scroll">
          <div className="flex gap-2 mt-10 mb-4">
            <span className="w-6 h-6 rounded-full bg-primary"/><span className="w-6 h-6 rounded-full bg-notif"/>
          </div>
          <h1 className="text-[35px] leading-[30px] tracking-[-2px] font-semibold text-primary mb-3">Enregistrer son entreprise</h1>
          <SignupForm />
        </div>
      </div>
    </>
  )
}

export default Signup;
