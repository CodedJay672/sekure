import Topbar from "@/components/Topbar/Topbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

export default async function layout({
  children,
  convertmodal,
  rechargemodal,
  customermodal,
}: Readonly<{
  children: React.ReactNode;
  convertmodal: React.ReactNode;
  rechargemodal: React.ReactNode;
  customermodal: React.ReactNode;
}>) {
  return (
    <>
      <Topbar />
      <section className="w-full flex justify-between items-start mt-3">
        <Sidebar />
        {convertmodal}
        {rechargemodal}
        {customermodal}
        {children}
      </section>
    </>
  );
}
