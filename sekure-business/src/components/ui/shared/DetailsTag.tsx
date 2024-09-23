interface IData {
  data: {
    key: string;
    value: string;
  }
}

const DetailsTag = ({ data }: IData) => {
  return (
    <div className="flex justify-start px-[10px] rounded-[6px] bg-primary-fade">
      <span className="text-primary text-[8px] leading-6 font-normal">{data.key}: {data.value}</span>
    </div>
  )
}

export default DetailsTag
