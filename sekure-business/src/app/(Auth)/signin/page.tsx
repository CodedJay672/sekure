import SignInForm from '@/components/Forms/SignInForm';

const SignIn = () => {
  return (
    <div className="w-full max-w-[448px] h-[285px] flex-1 flex pl-6 justify-start items-center">
      <div className='p-0 w-full'>
        <h1 className="text-[33px] leading-[41px] tracking-[-2px] font-semibold mb-3">
          Se connecter            
        </h1>
        <SignInForm />
      </div>
    </div>
  )
}

export default SignIn;
