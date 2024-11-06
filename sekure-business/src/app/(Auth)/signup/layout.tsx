import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Image
        src="/assets/images/signup-hero.png"
        alt="signup image"
        width={450}
        height={817}
        className="absolute -top-20 -right-24 2xl:right-14 z-50"
      />
    </>
  );
};

export default Layout;
