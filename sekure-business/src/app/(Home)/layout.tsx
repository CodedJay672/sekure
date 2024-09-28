import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import Topbar from "@/components/Topbar/Topbar";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sekure Business",
  description: "Sekure provides card services for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <main className="w-full flex justify-between items-start">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
