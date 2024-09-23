import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Pagination = () => {
  return (
    <div className="flex gap-1">
      <span className="text-[12px] leading-[34.5px] tracking-[-0.5px] font-normal">page: </span>
      <div className="w-6 h-8 bg-[#171717] rounded-lg flex-center cursor-pointer">
      <IoIosArrowBack size="12px" color="#DDD" className="fill-[#DDDDDD]" />
      </div>
      <div className="w-[37px] h-[32px] bg-notif rounded-lg flex-center">
        <span className="text-[10px] leading-[34.5px] tracking-[-0.5px] font-normal">1/2</span>
      </div>
      <div className="w-6 h-8 bg-[#171717] rounded-lg flex-center cursor-pointer">
        <IoIosArrowForward size="12px" color="#DDD" className="fill-[#DDDDDD]" />
      </div>
    </div>
  )
}

export default Pagination
