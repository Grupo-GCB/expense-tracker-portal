import * as Dialog from "@radix-ui/react-dialog";
import { CircleNotch } from "phosphor-react";

import { Button, CustomSelect } from "@/components";
import { FormModal } from "@/components/Modal/FormModal";
import { accountTypes } from "@/utils/constants";

import { IRegisterWallet } from "@/app/carteira/types";
import { useUpdateWallet } from "./update-wallet.hooks";

export function UpdateWallet({ setOpen }: IRegisterWallet) {
  const { actions, states } = useUpdateWallet({ setOpen });

  return (
    <FormModal action={actions.handleUpdateWallet}>
      <CustomSelect
        options={accountTypes}
        placeholder="Tipo da conta"
        name="account_type"
      />
      <CustomSelect
        options={states.bankList}
        placeholder="Banco"
        name="bank_id"
      />
      <textarea
        name="description"
        id="description"
        cols={30}
        rows={3}
        maxLength={32}
        placeholder="Descrição"
        className="mb-3 md:mb-10 bg-gray-900 pl-4 pt-4 rounded ou focus:outline-none focus:ring focus:ring-green-300 resize-none"
      ></textarea>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:w-full md:justify-center">
        <Button
          type="submit"
          className="py-2 px-4 md:py-4 md:px-6 bg-green-500 w-full md:w-full rounded-[6px]"
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
            <span>Confirmar!</span>
          )}
        </Button>
        <Dialog.Close asChild>
          <Button
            className="py-2 px-4 md:py-4 md:px-6 w-full md:w-full rounded-[6px]"
            canceled
          >
            Cancelar
          </Button>
        </Dialog.Close>
      </div>
    </FormModal>
  );
}
