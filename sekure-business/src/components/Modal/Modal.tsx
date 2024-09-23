import { ReactNode } from "react"

const Modal = ({ ui }: { ui: ReactNode}) => {
  return (
    <section className="absolute w-full min-h-dvh flex-center backdrop-blur-md">
      {ui}
    </section>
  )
}

export default Modal
