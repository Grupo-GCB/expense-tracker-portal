import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

import { Button, Modal } from "@/components";
import { RegisterTransaction } from "../RegisterTransaction";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="w-full h-48 bg-gray-900 flex items-center md:justify-start lg:justify-end sm:px-8 2xl:px-40 pb-16">
      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Button asChild>
          <Button
            id="newTransactionButton"
            type="submit"
            className="h-12 bg-green-500 decoration-white font-bold px-6 cursor-pointer rounded"
            canceled={false}
          >
            Nova transação
          </Button>
        </Modal.Button>
        <Modal.Content>
          <div className="flex justify-start">
            <Dialog.Title className="text-lg md:text-xl">
              Nova transação
            </Dialog.Title>
          </div>
          <RegisterTransaction setOpen={setOpen} />
        </Modal.Content>
      </Modal>
    </header>
  );
}
