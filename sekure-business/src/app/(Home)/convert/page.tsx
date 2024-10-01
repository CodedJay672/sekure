import ConvertFundsForm from "@/components/Forms/ConvertFundsForm";

const Page: React.FC = () => {
  return (
    <div className="wrapper h-[580px] flex justify-center items-center">
      <div className="w-[350px] max-w-[383px] p-5 rounded-[26px] flex flex-col bg-[#F5F5F5]">
        <h2 className="text-[16px] leading-[20px] font-semibold mb-4">Convertir des fonds</h2>
        <ConvertFundsForm btnText="Convertir" />
      </div>
    </div>
  );
}

export default Page;