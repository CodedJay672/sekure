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
    </>
  )
}

export default ModalLayout
