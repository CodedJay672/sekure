import Image from "next/image";

const VisaCard = () => {
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
          <Image
            src="/assets/cardholder.png"
            alt="cardholder"
            width={202.32}
            height={12.07}
          />
          <div className="flex mt-2">
            <Image
              src="/assets/cardnumber.png"
              alt="cardnumber"
              width={165.61}
              height={7.64}
              className="mr-2 object-contain"
            />
            <Image
              src="/assets/cardnumber2.png"
              alt="cardnumber"
              width={34.92}
              height={11.42}
            />
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
              <Image
                src="/assets/cvvnumber.png"
                alt="cvv"
                width={33.36}
                height={7.64}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Image
                src="/assets/expiration.png"
                alt="cvv"
                width={41.89}
                height={9.09}
              />
              <div className="flex gap-1">
                <Image
                  src="/assets/expirationnumber.png"
                  alt="cvv"
                  width={20.52}
                  height={7.64}
                  className="object-contain"
                />
                <Image
                  src="/assets/expnum.png"
                  alt="cvv"
                  width={28.19}
                  height={14.43}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-6">
          <Image
            src="/assets/sekurevisa.png"
            alt="sekurevisa"
            width={264}
            height={20.86}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default VisaCard
