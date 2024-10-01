import { Button } from "../ui/button";
import Modal from "../ui/shared/Modal";
import Image from "next/image";

interface SuccessAlertProps {
  text: string
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ text }) => {
  return (
    <Modal>
      <div className="alert">
        <Image
          src="/assets/icons-pack-2/success.svg"
          alt="success"
          width={34.66}
          height={34.66}
        />
        <p className="w-[250px] font-semibold text-base leading-[19px] text-center">{text}</p>
        <Button
          type="button"
          className="w-[151px] text-dark h-[36px] rounded-[9px] bg-[#EBEBEB]"
        >
          Ok
        </Button>
      </div>
    </Modal>
  )
}

export default SuccessAlert
