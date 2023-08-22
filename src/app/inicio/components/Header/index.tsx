import * as Dialog from "@radix-ui/react-dialog";

import { Button } from "@/components";

export default function Header() {
  return (
    <header className="w-full h-48 bg-black flex items-center justify-end px-40">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button
            id="newTransactionButton"
            type="submit"
            className="h-12 bg-green-500 decoration-white font-bold px-6 cursor-pointer rounded"
            canceled={false}
          >
            Nova transação
          </Button>
        </Dialog.Trigger>
      </Dialog.Root>
    </header>
  );
}
