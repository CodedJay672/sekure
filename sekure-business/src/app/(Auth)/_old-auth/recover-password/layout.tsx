import type { Metadata } from "next";
import "../../../app/globals.css";
import RecoverPasswordSidebar from "@/components/ui/shared/RecoverPasswordSidebar";

export const metadata: Metadata = {
  title: "Recover Account | Sekure Business",
  description: "Sekure provides card services for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className='h-screen w-screen max-h-[725px] flex'>
      <RecoverPasswordSidebar
        text="Sekure me permet de d’accepter les paiements sur tous mes sites de E-commerce à travers le monde"
      />
      {children}
    </main>
  );
}
