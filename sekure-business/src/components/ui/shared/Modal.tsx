"use client";

import {
  Dialog,
  DialogOverlay,
  DialogContent,
} from '../dialog';
import { useRouter } from 'next/navigation';

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  }

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent className='overflow-y-hidden w-[350px] max-w-[383px] rounded-[26px]'>
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}