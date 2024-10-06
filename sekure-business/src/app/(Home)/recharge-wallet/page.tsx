import RechargeWalletForm from "@/components/Forms/RechargeWalletForm";

const Page: React.FC = () => {
  return (
    <div className="wrapper h-[580px] flex justify-center items-center">
      <div className="w-[350px] max-w-[383px] p-5 rounded-[26px] flex flex-col bg-[#F5F5F5]">
        <h2 className="text-[16px] leading-[20px] font-semibold mb-4">Recharger Wallet</h2>
        <RechargeWalletForm btnText="Recharger" />
      </div>
    </div>
  );
}

export default Page;