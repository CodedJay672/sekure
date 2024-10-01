import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NotificationItem from "./NotificationItem";
import { info } from "@/constants";
import Image from "next/image";

const Notifications: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className='w-[40.58px] h-[40.58px] relative rounded-full flex justify-center items-center'>
          <Image
            src='/assets/icons-pack-2/notifications.svg'
            alt='notification'
            width={40.58}
            height={40.58}
            className="object-cover"
          />
          <div className='flex-center max-w-[17.48px] max-h-[17.48px] px-[5px] bg-dark3 absolute bottom-0 right-0 rounded-full'>
            <p className='text-[9px] font-bold leading-6 text-white'>3</p>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="w-[383px] h-[795px]" aria-describedby="notifications">
        <SheetHeader>
          <SheetTitle className="text-base leading-5">Notifications</SheetTitle>
        </SheetHeader>
        <div className="w-full md:w-[334px] flex flex-col gap-4 mt-3">
          <div className="w-full flex">
            <div className="w-[81px] h-[23px] bg-primary  rounded-[7px] flex-center">
              <p className="text-white text-[9px] leading-[13.5px] font-medium text-center">
                Numero (12)
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            {info.map((data, idx) => (
              <NotificationItem info={data} key={idx} />
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Notifications
