import React from 'react'
import { RiCloseLargeLine } from 'react-icons/ri';

const Notifications = () => {
  return (
    <article className='absolute w-[383px] bg-[#F5F5F5] p-6'>
      <div className='flex-between'>
        <h2 className='text-base leading-5 font-semibold text-dark3'>Notifications</h2>
        <RiCloseLargeLine
          size="12px"
          className="fill-dark cursor-pointer"
        />
      </div>
    </article>
  )
}

export default Notifications;
