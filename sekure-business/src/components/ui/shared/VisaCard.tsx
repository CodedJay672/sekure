import Image from "next/image";

interface IVisaCardProps {
  holder: string;
  number: string;
  cvv: string;
  expiry: string;
  type: string;
}

const VisaCard: React.FC<IVisaCardProps> = ({
  holder,
  number,
  cvv,
  expiry,
  type,
}) => {
  return (
    <div className="w-[326px] h-[239px] rounded-[20px] p-5 bg-primary mt-4 relative shadow-md">
      <Image
        src="/assets/cardbg.png"
        alt="card"
        width={326}
        height={239}
        className="absolute top-0 left-0 z-2"
      />
      <div className="absolute w-full top-0 left-0 p-6 pr-8">
        <div className="w-full flex-between">
          <Image
            src="/assets/visacard.png"
            alt="card"
            width={102.37}
            height={16.7}
          />
          <Image
            src="/assets/chip.png"
            alt="chip"
            width={32.98}
            height={28.51}
          />
        </div>
        <div className="w-full mt-[34.72px]">
          <span className="text-white font-medium text-base leading-4">
            {holder.toUpperCase()}
          </span>
          <div className="flex mt-2">
            {number &&
              number.split("").map((num, index) => (
                <span>
                  {index % 4 === 0 && index !== 0 && <span> </span>}
                  {index < 12 ? "*" : num}
                </span>
              ))}
          </div>
          <div className="mt-2 flex gap-4">
            <div className="flex flex-col gap-[13px]">
              <Image
                src="/assets/cvv.png"
                alt="cvv"
                width={18.33}
                height={6.34}
                className="object-contain"
              />
              {cvv &&
                cvv.split("").map((num, index) => <span key={index}>*</span>)}
            </div>
            <div className="flex flex-col gap-2">
              <Image
                src="/assets/expiration.png"
                alt="exp"
                width={41.89}
                height={9.09}
              />
              <div className="flex gap-1">
                {expiry &&
                  expiry
                    .split("")
                    .map((num, index) => <span key={index}>{num}</span>)}
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-6">
          {type === "visa" ? (
            <Image
              src="/assets/sekurevisa.png"
              alt="sekurevisa"
              width={264}
              height={20.86}
              className="object-contain"
            />
          ) : (
            <Image
              src="/assets/sekuremastercard.png"
              alt="sekuremastercard"
              width={264}
              height={20.86}
              className="object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
