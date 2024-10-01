import CreateAdmin from "@/components/CreateAdmin/CreateAdmin";

const Page: React.FC = () => {
  return (
    <div className="w-full h-screen flex-center">
      <div className="w-[385px] rounded-[18px] p-6 bg-white">
        <h2 className="text-[16px] font-semibold leading-[24px] mb-4">Créer une carte</h2>
        <CreateAdmin />
      </div>
    </div>
  )
}

export default Page;