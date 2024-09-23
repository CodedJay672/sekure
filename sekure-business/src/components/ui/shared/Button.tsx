interface IButton {
  variant:  string;
  text: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ variant, text, type }: IButton) => {
  return (
    <button type={type} className={`${variant === 'primary' ? 'bg-primary text-white' : 'bg-dark2 text-dark'} btn w-[151px] h-[36px]`}>
      {text}
    </button>
  )
}

export default Button
