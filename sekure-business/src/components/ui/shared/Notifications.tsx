import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiNotification2Line } from 'react-icons/ri';
import { Button } from "../button";
import NotificationItem from "./NotificationItem";
import { NotificationItemProps } from "@/constants/types";
import { info } from "@/constants";

const Notifications = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className='w-[37.58px] h-[37.58px] bg-primary relative rounded-full'>
          <RiNotification2Line size={40} color='white' />
          <div className='flex-center max-w-[17.48px] max-h-[17.48px] px-[5px] bg-dark3 absolute bottom-0 right-0 rounded-full'>
            <p className='text-[9px] font-bold leading-6 text-white'>3</p>
          </div>
        </Button>
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

          <div className="w-full flex flex-col gap-3">
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
