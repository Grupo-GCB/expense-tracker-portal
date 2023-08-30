"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";

import { Button, FormModal } from "@/components";
import { IWithoutWallet } from "./hook";

export default function WithoutWallet({
  setWithoutWalletOpen,
}: IWithoutWallet) {
  const router = useRouter();
  return (
    <FormModal>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:w-full md:justify-center">
        <Button
          type="submit"
          className="py-2 px-4 md:py-4 md:px-6 bg-red-300 w-full md:w-full rounded-md hover:bg-red-400"
          canceled={false}
          onClick={() => router.push("carteira")}
        >
          Confirmar
        </Button>
        <Dialog.Close asChild>
          <Button
            className="py-2 px-4 md:py-4 md:px-6 w-full md:w-full bg-gray-200 rounded-md  hover:bg-gray-300"
            canceled
            onClick={() => {
              setWithoutWalletOpen(false);
            }}
          >
            Cancelar
          </Button>
        </Dialog.Close>
      </div>
    </FormModal>
  );
}
