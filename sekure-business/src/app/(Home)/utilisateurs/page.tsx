import UserTable from "@/components/Table/UserTable/UserTable";
import React from "react";

const Utilisateurs: React.FC = () => {
  return (
    <section className="w-[78%] bg-white rounded-xl mr-8 2xl:mr-10">
      <section className="flex gap-2">
        {/* <Card key={0} {...cardDetails[0]} />
          <Card key={1} {...cardDetails[1]} />
          <Card key={1} {...cardDetails[1]} /> */}
      </section>
      <div className="w-full">
        <section className="w-full">
          <UserTable />
        </section>
      </div>
    </section>
  );
};

export default Utilisateurs;
