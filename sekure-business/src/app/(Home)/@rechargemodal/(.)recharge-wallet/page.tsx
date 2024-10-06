import RechargeWalletForm from "@/components/Forms/RechargeWalletForm";
import Modal from "@/components/ui/shared/Modal";

const Page: React.FC = () => {
  return (
    <Modal>
      <h2 className="text-[16px] leading-5 font-semibold text-[#1E1E1E]">
        Recharger Wallet
      </h2>
      <RechargeWalletForm btnText="Recharger" />
    </Modal>
  );
}

export default Page;