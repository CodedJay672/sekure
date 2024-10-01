import CreateCardForm from "@/components/Forms/CreateCardForm"

const Page: React.FC = () => {
  return (
    <div className="w-full h-screen flex-center">
      <div className="w-[385px] rounded-[18px] p-6 bg-white">
        <h2 className="text-[16px] font-semibold leading-[24px] mb-4">Créer une carte</h2>
        <CreateCardForm btnText="Créer" />
      </div>
    </div>
  )
}

export default Page
