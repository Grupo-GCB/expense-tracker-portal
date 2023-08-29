"use client"

import * as Dialog from "@radix-ui/react-dialog";
import router from "next/router";

import { Button, FormModal } from "@/components";
import { IUseTransaction } from "@/app/inicio/types";

export default function WithoutWallet({setOpen}: IUseTransaction) {

  return (
    <FormModal>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:w-full md:justify-center">
        <Button
          type="submit"
          className="py-2 px-4 md:py-4 md:px-6 bg-red-300 w-full md:w-full rounded-md hover:bg-red-400"
          canceled={false}
          onClick={() => {router.push("carteira")}}
        >
          Confirmar
        </Button>
        <Dialog.Close asChild>
          <Button
            className="py-2 px-4 md:py-4 md:px-6 w-full md:w-full bg-gray-200 rounded-md  hover:bg-gray-300"
            canceled
            onClick={() => {setOpen(false)}}
          >
            Cancelar
          </Button>
        </Dialog.Close>
      </div>
    </FormModal>
  );
}
