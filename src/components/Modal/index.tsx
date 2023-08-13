'use client' 

import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { ReactNode } from "react";

interface IModal {
  children: ReactNode
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Modal({children, open,
  onOpenChange}: IModal){
  return(
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  )
}

function ModalContent({
  children,
}: {
  children: ReactNode;
}){
  return(
    <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
    <Dialog.Content >
      <div className='w-10/12 md:w-1/2 bg-gray-800 text-white fixed left-1/2 top-1/2  max-w-md -translate-x-1/2 -translate-y-1/2 rounded-[6px] p-8 shadow data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms]'>
        <div className='flex justify-end'>
          <Dialog.Close asChild>
              <button className="focus:outline-none focus:ring focus:ring-green-300 ">
                <X width={24} height={24}/>
              </button>
          </Dialog.Close>
        </div>
        {children}
      </div>
    </Dialog.Content>
  </Dialog.Portal>
  )
}

Modal.Button = Dialog.Trigger;
Modal.Close = Dialog.Close;
Modal.Content = ModalContent;