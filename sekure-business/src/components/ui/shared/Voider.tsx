import {
  DialogTrigger,
  Dialog,
  DialogContent,
} from "../dialog";
import { Button } from "../button";
import { ArrowRightIcon } from "lucide-react";
import LoadingSpinner from "@/components/Alert/Loading";
import SuccessAlert from "@/components/Alert/SuccessAlert";

interface FormProps {
  form: {
    [key: string]: string;
  };
}

const Voider = ({ form }: FormProps) => {
  const { type, compte, montant, numero, total } = form;

  return (
    <>
      <div className="rounded-[26px] bg-[#F5F5F5] flex flex-col gap-6">
        <div className="flex-between">
          <span className="text-[10px] leading-6 font-normal">Type</span>
          <span className="text-[10px] leading-6 font-medium text-right">{type}</span>
        </div>
        <div className="flex-between">
          <span className="text-[10px] leading-6 font-normal">Type de compte </span>
          <span className="text-[10px] leading-6 font-medium text-right">{compte}</span>
        </div>
        <div className="flex-between">
          <span className="text-[10px] leading-6 font-normal">Numero à recharger </span>
          <span className="text-[10px] leading-6 font-medium text-right">{numero}</span>
        </div>
        <div className="flex-between">
          <span className="text-[10px] leading-6 font-normal">Montant à recharger </span>
          <span className="text-[10px] leading-6 font-medium text-right">{montant}</span>
        </div>
        <div className="flex-between">
          <span className="text-[10px] leading-6 font-normal">Type de compte </span>
          <span className="text-[10px] leading-6 font-medium text-right">{compte}</span>
        </div>
        <div className="flex-between">
          <span className="text-[10px] leading-6 font-normal">Montant Total à debiter </span>
          <span className="text-[10px] leading-6 font-medium text-right">{total}</span>
        </div>
        <Dialog>
          <DialogTrigger>
            <Button type="submit" className="primary-btn w-full flex">
              <span className="flex-1 text-[10px] leading-6 font-normal">Valider</span>
              <ArrowRightIcon size={10} color="#fff" />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[383px]">
            <LoadingSpinner />
{/* 
            <SuccessAlert text="Cette carte a été bloquée avec succès !!" /> */}
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

export default Voider;
