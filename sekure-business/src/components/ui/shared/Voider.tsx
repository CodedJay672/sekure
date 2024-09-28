import { Button } from "../button";
import { ArrowRightIcon } from "lucide-react";

interface FormProps {
  form: {
    [key: string]: string;
  };
}

const Voider = ({ form }: FormProps) => {
  const { type, compte, montant, numero, total } = form;

  return (
    <div className="w-full h-screen flex justify-center items-center border border-white">
      <div className="w-[350px] p-6 rounded-[26px] bg-[#F5F5F5] flex flex-col gap-6">
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
        <Button type="submit" className="primary-btn w-full flex">
          <span className="flex-1 text-[10px] leading-6 font-normal">Valider</span>
          <ArrowRightIcon size={10} color="#fff" />
        </Button>
      </div>
    </div>
  )
}

export default Voider;
