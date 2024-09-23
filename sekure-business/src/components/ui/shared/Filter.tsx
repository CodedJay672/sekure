import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image"
import FilterForm from "./FilterForm";

const Filter = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/assets/images/filter.png"
          alt="filter"
          width={89}
          height={32}
          className="w-auto h-auto object-cover cursor-pointer mx-3 rounded-[9px]"
        />
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>
            Filtrer
          </SheetTitle>
          <SheetDescription>
            Filtrer les transactions par date, montant, type, etc.
          </SheetDescription>
        </SheetHeader>
        <div className="w-[383px] min-h-max mt-2">
          <FilterForm />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Filter
