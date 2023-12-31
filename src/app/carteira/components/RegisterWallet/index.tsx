import * as Dialog from "@radix-ui/react-dialog";
import { CircleNotch } from "phosphor-react";

import { IUseWallet } from "@/app/carteira/types";
import { useWallet } from "@/app/carteira/wallet.hook";
import { Button, CustomSelect, FormModal } from "@/components";
import { accountTypes } from "@/utils/constants";
import { useRegisterWallet } from "./hook";

export function RegisterWallet({ setOpen }: IUseWallet) {
  const { states } = useWallet({ setOpen });
  const { registerActions, state } = useRegisterWallet({ setOpen });

  return (
    <FormModal action={registerActions.handleRegisterWallet}>
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
          disabled={state.isSavingDataForms}
          canceled={false}
        >
          {state.isSavingDataForms ? (
            <CircleNotch
              className="animate-spin w-full justify-center"
              data-testid="loading-icon"
            />
          ) : (
            <span>Confirmar</span>
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
