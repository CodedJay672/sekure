import ConvertFundsForm from "@/components/Forms/ConvertFundsForm";
import Modal from "@/components/ui/shared/Modal";

const Page = () => {
  return (
    <Modal>
      <h2 className="text-[16px] leading-5 font-semibold text-[#1E1E1E]">
        Convertir des fonds
      </h2>
      <ConvertFundsForm btnText="Convertir" />
    </Modal>
  )
}

export default Page;
