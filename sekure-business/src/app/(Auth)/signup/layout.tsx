import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-3/5 mx-auto flex-center my-10 py-6  border border-gray-100 rounded-xl">
      {children}
    </div>
  );
};

export default Layout;
