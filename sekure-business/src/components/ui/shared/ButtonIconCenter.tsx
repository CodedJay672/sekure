import { ReactNode } from "react";

interface IButtonIconCenter {
  variant:  string;
  text: string;
  icon: ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonIconCenter = ({variant, text, icon, type }: IButtonIconCenter) => {
  return (
    <button type={type} className={`btn ${variant === 'primary' ? 'bg-primary' : 'bg-dark'} gap-5 w-full`}>
      {icon}<span className="text-white">{text}</span>
    </button>
  )
}

export default ButtonIconCenter
