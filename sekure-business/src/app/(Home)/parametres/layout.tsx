const Layout = ({
  children,
  parammodal,
}: {
  children: React.ReactNode,
  parammodal: React.ReactNode
}) => {
  return (
    <>
      {parammodal}
      {children}
    </>
  )
}

export default Layout
