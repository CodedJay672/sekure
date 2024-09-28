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
      <SheetContent className="overflow-auto" side="right">
        <SheetHeader>
          <SheetTitle>
            Filtrer
          </SheetTitle>
          <SheetDescription>
            Filtrer les transactions par date, montant, type, etc.
          </SheetDescription>
        </SheetHeader>
        <FilterForm />
      </SheetContent>
    </Sheet>
  )
}

export default Filter
