import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-4/5 mx-auto flex-center my-10 py-14 border border-gray-100 rounded-xl">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
