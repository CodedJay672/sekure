import Image from "next/image"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Pagination = () => {
  return (
    <div className="flex gap-1">
      <span className="text-[12px] leading-[34.5px] tracking-[-0.5px] font-normal">page: </span>
      <Image
        src='/assets/icons-pack-2/prev.svg'
        alt="next"
        width={24}
        height={32}
        className="cursor-pointer"
      />
      <div className="w-[37px] h-[32px] bg-notif rounded-lg flex-center">
        <span className="text-[10px] leading-[34.5px] tracking-[-0.5px] font-normal">1/2</span>
      </div>
      <Image
        src='/assets/icons-pack-2/next.svg'
        alt="next"
        width={24}
        height={32}
        className="cursor-pointer"
      />
    </div>
  )
}

export default Pagination
