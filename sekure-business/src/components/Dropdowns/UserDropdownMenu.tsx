import React from 'react'
import { Button } from '../ui/button'
import { useRouter} from 'next/navigation'

interface ProfileProps {
  handleClick: () => void;
}

const UserDropdownMenu: React.FC<ProfileProps> = ({ handleClick }) => {
  const route = useRouter();

  const handleProfile = () => {
    route.push('/profil');

    handleClick();
  }

  return (
    <div className="w-64 absolute top-12 right-0 bg-white z-50 shadow-lg rounded-[10px] p-4">
      <div className='flex flex-col justify-center items-center mr-2 mt-6'>
        <div className='w-[50px] h-[50px] rounded-full bg-primary flex-center mb-4'>
          <span className='text-white text-[15px] leading-[34.5px] text-centerf font-[500]'>DT</span>
        </div>
        <div className='flex-center flex-col gap-2'>
          <h3 className="text-base leading-[16.5px] font-bold">Dongmo Talla Adrian</h3>
          <p className="text-sm leading-[10.5px] font-normal">WAGAPAY</p>
          <span className='text-sm leading-[10.5px] text-center font-normal'>ID: DT123</span>
        </div>
      </div>

      <Button variant="outline" type='button' className='w-full py-[3px] text-left text-sm font-semibold text-primary border border-primary rounded-[8px] mt-4 mb-10 bg-white' onClick={handleProfile}>
        Profil
      </Button>
    </div>
  )
}

export default UserDropdownMenu
