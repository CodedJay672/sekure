import CreateCardForm from "@/components/Forms/CreateCardForm";
import Modal from "@/components/ui/shared/Modal";

const Page: React.FC = () => {
  return (
    <Modal>
      <h2 className="text-[16px] leading-5 font-semibold text-[#1E1E1E]">
        Créer une carte
      </h2>
      <CreateCardForm btnText="Créer" />
    </Modal>
  )
}

export default Page;
