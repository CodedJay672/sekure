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
          src="/assets/icons-pack-2/filter.svg"
          alt="filter"
          width={89}
          height={32}
          className="object-cover cursor-pointer rounded-[9px]"
        />
      </SheetTrigger>
      <SheetContent className="overflow-auto" side="right">
        <SheetHeader>
          <SheetTitle>
            Filtrer
          </SheetTitle>
        </SheetHeader>
        <FilterForm />
      </SheetContent>
    </Sheet>
  )
}

export default Filter
