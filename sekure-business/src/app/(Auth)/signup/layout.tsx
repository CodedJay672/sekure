import type { Metadata } from "next";
import "../../../app/globals.css";
import SignupSidebar from "@/components/ui/shared/SignupSidebar";

export const metadata: Metadata = {
  title: "Sign Up | Sekure Business",
  description: "Sekure provides card services for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className='h-screen w-screen max-h-[725px] flex'>
      <SignupSidebar
        text="je n’ai jamais été autant facilité en matiere de paiemets, surtout depuis l’afrique"
      />
      {children}
    </main>
  );
}
