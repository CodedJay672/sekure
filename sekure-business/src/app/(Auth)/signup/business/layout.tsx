import CustomTab from "@/components/Tabs/CustomTab"
import Image from "next/image"

const Layout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <>
      <div className="w-full">
        <h2 className="text-[33px] leading-[37px] -tracking-[2px] font-semibold">Dites-nous en plus ...</h2>
        <CustomTab />
      </div>
      <div className="mt-2">
        {children}
      </div>
    </>
  )
}

export default Layout
