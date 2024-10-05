import Image from "next/image"

const Layout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <>
      {children}
      <Image
        src="/assets/images/login-img.png"
        alt="login image"
        width={488}
        height={770}
        className="absolute -top-6 -right-24 2xl:right-14 z-[5000]"
      />
    </>
  )
}

export default Layout;