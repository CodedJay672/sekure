import CreateCustomerForm from "@/components/Forms/customer/createCustomerForm";
import Modal from "@/components/ui/shared/Modal";
import React from "react";

const CreateCustomer: React.FC = () => {
  return (
    <Modal>
      <CreateCustomerForm />
    </Modal>
  );
};

export default CreateCustomer;
