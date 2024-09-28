const ModalLayout = ({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <>
      {modal}
      {children}
      <div id="app" />
    </>
  )
}

export default ModalLayout
