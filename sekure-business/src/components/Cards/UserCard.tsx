import Image from "next/image";
import React, { useState } from "react";
import { RxCaretRight } from "react-icons/rx";

interface UserCardProps {
  name: string;
  poste: string;
  email: string;
  parte: number;
}

const UserCard: React.FC<Partial<UserCardProps>> = ({
  name,
  poste,
  email,
  parte,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-[473px] ${
        isOpen ? "max-h-[300px]" : "h-auto"
      } py-[18px] px-[15px] border rounded-[14px]`}
    >
      <div
        className="w-full flex gap-5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-[48px] h-[48px] rounded-full bg-primary" />
        <div className="flex-1 flex items-center">
          <div className="flex-1 flex flex-col gap-[2px]">
            <div>
              <span className="text-[13px] leading-[17px] mr-[10px] font-semibold">
                {name}
              </span>
              <span className="inline-block text-[10px] leading-[17px] px-[6px] bg-[#F5F5F5]">
                En revue
              </span>
            </div>
            <div>
              <span className="text-[12px] leading-[24px] text-[#242424]">
                {poste},
              </span>
              <span className="text-[12px] leading-[24px] text-[#242424]">
                {" "}
                {email}
              </span>
            </div>
          </div>
          <RxCaretRight size={30} />
        </div>
      </div>

      <div
        className={`${
          isOpen ? "max-h-[270px] mt-[25px]" : "max-h-0"
        } transition-all overflow-hidden duration-300 ease-in-out`}
      >
        <div className="grid grid-cols-4 gap-4 place-content-stretch">
          <div>
            <p className="text-[12px] leading-[18px] font-normal">Poste</p>
          </div>
          <div className="col-span-3 pl-1">
            <p className="text-[12px] leading-[18px] font-normal">{poste}</p>
          </div>
          <div>
            <p className="text-[12px] leading-[18px] font-normal">Parte</p>
          </div>
          <div className="col-span-3 pl-1">
            <p className="text-[12px] leading-[18px] font-normal">{parte}%</p>
          </div>
        </div>

        <div className="flex gap-[57px] mt-[20px]">
          <div>
            <span className="text-[12px] leading-[18px]">Document</span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex bg-[#F3F3F3] w-[317px] py-3 px-6 gap-3 rounded-[4px]">
              <Image
                src="/assets/icons-pack/uploadDocument.png"
                alt="uploaded document"
                width={14.22}
                height={14.65}
              />
              <div className="flex-1">
                <span className="text-[10px] leading-[13.px] text-[#101010]">
                  Certificat de constitution d’entreprise
                </span>
              </div>
            </div>
            <div className="flex bg-[#F3F3F3] w-[317px] py-3 px-6 gap-3 rounded-[4px]">
              <Image
                src="/assets/icons-pack/uploadDocument.png"
                alt="uploaded document"
                width={14.22}
                height={14.65}
              />
              <div className="flex-1">
                <span className="text-[10px] leading-[13.px] text-[#101010]">
                  Certificat de constitution d’entreprise
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
