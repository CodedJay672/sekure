"use client";

import Image from "next/image";

interface SearchBarProps {
  placeholder: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar:React.FC<SearchBarProps> = ({ placeholder, setData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };
  return (
    <div className="flex-1 flex-center relative">
      <input
        type="search"
        placeholder={placeholder}
        className="form-input w-full h-8 rounded-[5px] border-none outline-none px-10 pr-12 py-3 input bg-input"
        onChange={handleChange}
      />
      <Image
        src="/assets/icons-pack-2/search-icon.svg"
        alt="search"
        width={13}
        height={14}
        className="absolute top-2 left-4 mt-[2px] cursor-pointer pointer-events-auto"
      />
      <Image
        src="/assets/icons-pack-2/send.svg"
        alt="search"
        width={13}
        height={14}
        className="absolute top-2 right-4 mt-[2px] cursor-pointer pointer-events-auto"
      />
    </div>
  );
};

export default SearchBar;