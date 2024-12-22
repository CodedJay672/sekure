import React from "react";
import { Sheet, SheetContent, SheetOverlay } from "../sheet";

const SheetSlider = ({
  children,
  open,
  openChange,
}: {
  children: React.ReactNode;
  open: boolean;
  openChange: () => void;
}) => {
  return (
    <Sheet open={open} onOpenChange={openChange}>
      <SheetOverlay>
        <SheetContent aria-describedby="application sheet">
          {children}
        </SheetContent>
      </SheetOverlay>
    </Sheet>
  );
};

export default SheetSlider;
