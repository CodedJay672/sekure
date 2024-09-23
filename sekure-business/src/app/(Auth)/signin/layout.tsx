import type { Metadata } from "next";
import SigninSidebar from "@/components/ui/shared/SigninSidebar";
import "../../../app/globals.css";

export const metadata: Metadata = {
  title: "Sign In | Sekure Business",
  description: "Sekure provides card services for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className='h-screen w-screen max-h-[725px] flex'>
      <SigninSidebar
      text="Aujourd’hui je n’ai plus problèmes à gerer les paiement dans toutes mes filiales au cameroun et au senegal"
      />
      {children}
    </main>
  );
}
