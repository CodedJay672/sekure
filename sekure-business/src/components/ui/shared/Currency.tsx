import Image from "next/image"


type TCurrencyArray = {
  country: string,
  currency: string,
};

const Currency = ({ country, currency }: TCurrencyArray) => {
  return (
    <div className="flex-center absolute right-2">
      <div className="mr-2">
        <p className="font-bold text-[10px] leading-6 text-right">{currency}</p>
      </div>
      <div className="w-[17px] h-[17px] rounded-full">
        <Image
          src={country}
          alt="country"
          className="rounded-full object-contain"
          width={17}
          height={17}
        />
      </div>
    </div>
  )
}

export default Currency
