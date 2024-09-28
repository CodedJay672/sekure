import CreateCardForm from "@/components/Forms/CreateCardForm";
import Modal from "@/components/ui/shared/Modal";

const Page = () => {
  return (
    <Modal>
      <CreateCardForm btnText="Créer" />
    </Modal>
  )
}

export default Page;
