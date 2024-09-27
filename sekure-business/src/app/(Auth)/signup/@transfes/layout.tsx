import CustomTab from "@/components/Tabs/CustomTab";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="w-full flex flex-col gap-2">
      <h1 className="text-[33px] leading-[37px] -tracking-[2px] font-semibold">
        Dites-nous en plus...
      </h1>
      <CustomTab />
      <div className="flex-1">
        {children}
      </div>
    </section>
  )
}

export default Layout
