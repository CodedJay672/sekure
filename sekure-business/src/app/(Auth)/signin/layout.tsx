import Image from "next/image";
import Provider from "@/utils/providers/tanstackProvider";
import StoreProvider from "@/app/StoreProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex-center pl-4 relative">
      <div>{children}</div>
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
              Envoyez des fonds sous toutes les devises et directement dans des
              comptes d’utilisateurs
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
              Offres des cartes virtuelles en USD VISA et MASTERCARD stables ,
              économiques et faciles à prendre en main pour vos utilisateurs
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
              Offres et gerez des paiements flexibles pour les achats en ligne
              en toute sécurité et rapidité de vos utilisateurs.
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
              Visualisez et analyser les mouvements d’argent de vos différents
              utilisateurs, découvrez comment vos volumes de transactions
              evoluent avec le temps
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -right-32 top-0 ">
        <Image
          src="/assets/images/login-img.png"
          alt="login image"
          width={410}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Layout;
