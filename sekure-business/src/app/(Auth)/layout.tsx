import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "../../app/globals.css";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { Toaster } from "@/components/ui/toaster";

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
        <main className="max-w-[1552px] h-auto pl-20 flex bg-white pb-7 relative">
          <div className="flex flex-col h-auto flex-between mr-16">
            <div className="mt-10">{children}</div>
            <footer className="w-[448px] h-[143px] mt-10">
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
                  Revolut Ltd is registered in England and Wales (No. 08804411),
                  7 Westferry Circus, Canary Wharf, London, England, E14 4HD and
                  is authorised by the Financial Conduct Authority under the
                  Electronic Money Regulations 2011 (Firm Reference 900562).
                  Revolut Travel Ltd is authorised by the Financial Conduct
                  Authority to undertake insurance distribution activities (FCA
                  No: 780586). Our insurance products are arranged by Revolut
                  Travel Ltd and Revolut Ltd, which is an appointed
                </p>
              </div>
            </footer>
          </div>
          <div className="relative flex-1 flex flex-col gap-6 bg-[url(/assets/images/signin-bg.png)] pl-10 py-10">
            <div className=" flex gap-4">
              <div className="relative flex justify-center items-center w-[88px] h-[88px] rounded-full bg-[#DFFCE3]">
                <Image
                  src="/assets/images/arrowstrokewhite.png"
                  alt="left arrow down"
                  width={28}
                  height={28}
                  className="object-contain absolute"
                />
              </div>
              <div className="flex flex-col w-[250px] pt-2">
                <h2 className="text-[15px] leading-[17px] font-semibold">
                  Collectez de l’argent
                </h2>
                <p className="text-[12px] leading-[18px] text-[#808080]">
                  Recevez vos paiements facilement depuis différents pays
                  d&apos;Afrique et du monde et à travers différents moyens de
                  paiement
                </p>
              </div>
            </div>
            <hr className="border border-[#CDCDCD]" />
            <div className="flex gap-4">
              <div className="relative flex justify-center items-center w-[88px] h-[88px] rounded-full bg-[#DFFCE3]">
                <Image
                  src="/assets/images/icon2.png"
                  alt="left arrow down"
                  width={44}
                  height={39}
                  className="object-contain absolute"
                />
              </div>
              <div className="flex flex-col w-[250px] pt-2">
                <h2 className="text-[15px] leading-[17px] font-semibold">
                  Transfert de devises
                </h2>
                <p className="text-[12px] leading-[18px] text-[#808080]">
                  Envoyez des fonds sous toutes les devises et directement dans
                  des comptes d’utilisateurs
                </p>
              </div>
            </div>
            <hr className="border border-[#CDCDCD]" />
            <div className="flex gap-4">
              <div className="relative flex justify-center items-center w-[88px] h-[88px] rounded-full bg-[#DFFCE3]">
                <Image
                  src="/assets/images/icon3.png"
                  alt="left arrow down"
                  width={36}
                  height={27}
                  className="object-contain absolute"
                />
              </div>
              <div className="flex flex-col w-[250px] pt-2">
                <h2 className="text-[15px] leading-[17px] font-semibold">
                  Cartes virtuelles
                </h2>
                <p className="text-[12px] leading-[18px] text-[#808080]">
                  Offres des cartes virtuelles en USD VISA et MASTERCARD stables
                  , économiques et faciles à prendre en main pour vos
                  utilisateurs
                </p>
              </div>
            </div>
            <hr className="border border-[#CDCDCD]" />
            <div className="flex gap-4">
              <div className="relative flex justify-center items-center w-[88px] h-[88px] rounded-full bg-[#DFFCE3]">
                <Image
                  src="/assets/images/icon4.png"
                  alt="left arrow down"
                  width={35}
                  height={26}
                  className="object-contain absolute"
                />
              </div>
              <div className="flex flex-col w-[250px] pt-2">
                <h2 className="text-[15px] leading-[17px] font-semibold">
                  Paiements en ligne
                </h2>
                <p className="text-[12px] leading-[18px] text-[#808080]">
                  Offres et gerez des paiements flexibles pour les achats en
                  ligne en toute sécurité et rapidité de vos utilisateurs.
                </p>
              </div>
            </div>
            <hr className="border border-[#CDCDCD]" />
            <div className="flex gap-4">
              <div className="relative flex justify-center items-center w-[88px] h-[88px] rounded-full bg-[#DFFCE3]">
                <Image
                  src="/assets/images/icon5.png"
                  alt="left arrow down"
                  width={25}
                  height={30}
                  className="object-contain absolute"
                />
              </div>
              <div className="flex flex-col w-[250px] pt-2">
                <h2 className="text-[15px] leading-[17px] font-semibold">
                  Gestion des utilisateurs
                </h2>
                <p className="text-[12px] leading-[18px] text-[#808080]">
                  Visualisez et analyser les mouvements d’argent de vos
                  différents utilisateurs, découvrez comment vos volumes de
                  transactions evoluent avec le temps
                </p>
              </div>
            </div>
          </div>
          <Toaster />
        </main>
      </body>
    </html>
  );
}
