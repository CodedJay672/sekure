import React from "react";
import CreateCustomerForm from "@/components/Forms/customer/createCustomerForm";

const CreateCustomer: React.FC = () => {
  return (
    <div className="w-3/4 flex-center flex-col py-24 bg-white gap-10 mx-auto rounded-lg">
      <CreateCustomerForm />
    </div>
  );
};

export default CreateCustomer;
