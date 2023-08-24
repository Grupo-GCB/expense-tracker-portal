import * as Dialog from "@radix-ui/react-dialog";
import { CircleNotch } from "phosphor-react";
import { Dispatch, SetStateAction } from "react";

import { Button, FormModal } from "@/components";
import { useDeleteTransaction } from "./hook";

interface IUseTransaction {
  setOpen: Dispatch<SetStateAction<boolean>>;
  idTransaction: string;
}

export function DeleteTransaction({ setOpen, idTransaction }: IUseTransaction) {
  const { deleteStates, deleteActions } = useDeleteTransaction();

  setTimeout(() => {
    setOpen(false);
  }, 2000);

  return (
    <FormModal>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:w-full md:justify-center">
        <Button
          type="submit"
          className="py-2 px-4 md:py-4 md:px-6 bg-red-300 w-full md:w-full rounded-md hover:bg-red-400"
          onClick={() => deleteActions.deleteTransaction(idTransaction)}
          disabled={deleteStates.isSavingDataForms}
          canceled={false}
        >
          {deleteStates.isSavingDataForms ? (
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
