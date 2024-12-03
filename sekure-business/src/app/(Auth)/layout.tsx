import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "../globals.css";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "../StoreProvider";
import Provider from "@/utils/providers/tanstackProvider";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full pl-20 py-6 bg-white">
          <nav className="w-full flex items-center gap-10">
            <Link href="/" className="flex gap-2">
              <Image
                src="/assets/sekure.png"
                alt="sekure business"
                width={121}
                height={23.39}
                className="object-contain"
              />
              <div className="flex-center p-1 bg-primary rounded-[6px]">
                <h1 className="text-white font-bold text-[17px] leading-[22.19px]">
                  Business
                </h1>
              </div>
            </Link>

            <Link
              href="/contacter"
              className="text-[12.5px] leading-[15.13px] text-black font-normal"
            >
              Contacter
            </Link>
            <Link
              href="/termes-conditions"
              className="text-[12.5px] leading-[15.13px] text-black font-normal"
            >
              Termes et conditions
            </Link>

            <Link
              href="/termes-conditions"
              className="text-[12.5px] leading-[15.13px] flex text-black font-normal"
            >
              <Image
                src="/assets/images/union.png"
                alt="locale"
                width={18}
                height={18}
                className="mr-2"
              />
              FR
              <IoIosArrowDown className="ml-3" />
            </Link>
          </nav>
        </header>
        <main className="w-full  min-h-dvh bg-white px-28 overflow-hidden">
          <StoreProvider>
            <Provider>
              <div className="w-full min-h-dvh">{children}</div>
            </Provider>
          </StoreProvider>
          <footer className="w-[448px] h-[143px]">
            <div className="w-full flex">
              <Image
                src="/assets/images/footer-img.png"
                alt="footer image"
                width={204}
                height={27}
              />
            </div>
            <div>
              <p className="text-[9px] leading-[15px] font-normal text-[#B7B7B7]">
                To learn about which Revolut company serves you or if you have
                any questions, please contact us through our in-app chat.
                Revolut Ltd is registered in England and Wales (No. 08804411), 7
                Westferry Circus, Canary Wharf, London, England, E14 4HD and is
                authorised by the Financial Conduct Authority under the
                Electronic Money Regulations 2011 (Firm Reference 900562).
                Revolut Travel Ltd is authorised by the Financial Conduct
                Authority to undertake insurance distribution activities (FCA
                No: 780586). Our insurance products are arranged by Revolut
                Travel Ltd and Revolut Ltd, which is an appointed
              </p>
            </div>
          </footer>
          <Toaster />
        </main>
      </body>
    </html>
  );
}
