import * as Dialog from "@radix-ui/react-dialog";
import { CircleNotch } from "phosphor-react";

import { IUseWallet } from "@/app/carteira/types";
import { useWallet } from "@/app/carteira/wallet.hook";
import { Button, FormModal } from "@/components";
import { useDeleteWallet } from "./hook";

export function DeleteWallet({ setOpen }: IUseWallet) {
  const { actions, states } = useWallet({ setOpen });
  const { deleteActions } = useDeleteWallet();

  return (
    <FormModal action={deleteActions.handleDeleteWallet}>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:w-full md:justify-center">
        <Button
          type="submit"
          className="py-2 px-4 md:py-4 md:px-6 bg-red-300 w-full md:w-full rounded-md hover:bg-red-400"
          onClick={actions.handleSaveForm}
          disabled={states.isSavingDataForms}
          canceled={false}
        >
          {states.isSavingDataForms ? (
            <CircleNotch
              className="animate-spin w-full justify-center"
              data-testid="loading-icon"
            />
          ) : (
            <span>Deletar</span>
          )}
        </Button>
        <Dialog.Close asChild>
          <Button
            className="py-2 px-4 md:py-4 md:px-6 w-full md:w-full bg-gray-200 rounded-md  hover:bg-gray-300"
            canceled
          >
            Cancelar
          </Button>
        </Dialog.Close>
      </div>
    </FormModal>
  );
}
