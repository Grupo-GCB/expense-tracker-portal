import { CircleNotch, Warning } from "phosphor-react";
import { useState } from "react";

import { IUseTransaction } from "@/app/inicio/types";
import { Button, CustomSelect, FormModal, Input, Modal } from "@/components";
import { categoryTypes, getCurrentDate } from "@/utils";
import TransactionTypes from "./components/TransactionTypes";
import { useRegisterTransaction } from "./hook";
import WithoutWallet from "@/app/inicio/components/WithoutWalltes";
import { useWithoutWallet } from "@/app/inicio/components/WithoutWalltes/hook";

export function RegisterTransaction({ setOpen }: IUseTransaction) {
  const { states, actions } = useRegisterTransaction({ setOpen });
  const { stateWithoutWallet } = useWithoutWallet();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (value: string): void => {
    if (selectedOption === value) setSelectedOption(null);
    else setSelectedOption(value);
  };

  return (
    <FormModal action={actions.handleNewTransaction}>
      <Input.Root
        id="description"
        name="description"
        placeholder="Descrição"
        maxLength={32}
        className="flex items-center px-4 bg-gray-900 h-12 rounded focus:outline-none focus:ring focus:ring-green-300 resize-none"
      />
      <Input.Root
        id="value"
        name="value"
        type="number"
        min={0}
        placeholder="Preço"
        maxLength={32}
        className="flex items-center px-4 bg-gray-900 h-12 rounded focus:outline-none focus:ring focus:ring-green-300 resize-none"
      />
      <Input.Root
        id="date"
        name="date"
        type="date"
        maxLength={32}
        placeholder="Data"
        max={getCurrentDate()}
        className="flex items-center px-4 bg-gray-900 h-12 rounded focus:outline-none focus:ring focus:ring-green-300 resize-none  decoration-gray-300"
      />
      <CustomSelect
        id="wallets"
        name="wallets"
        options={states.walletsNames}
        placeholder="Carteiras"
      />
      {states.walletsNames.length === 0 && (
        <Modal
          open={stateWithoutWallet.withoutWalletOpen}
          onOpenChange={stateWithoutWallet.setWithoutWalletOpen}
        >
          <Modal.Content>
            <div className="flex items-center justify-center flex-col gap-4">
              <div className="flex items-center justify-center bg-red-300 w-16 h-16 rounded-full">
                <Warning size={40} />
              </div>
              <div className="flex items-center justify-center flex-col">
                <h2>Você ainda não possui carteiras</h2>
                <p>Gostaria de ir para a página de carteiras?</p>
              </div>
            </div>
            <WithoutWallet
              setWithoutWalletOpen={stateWithoutWallet.setWithoutWalletOpen}
            />
          </Modal.Content>
        </Modal>
      )}
      <CustomSelect
        id="categories"
        name="categories"
        options={categoryTypes}
        placeholder="Categoria"
      />

      <div className="sm:grid sm:grid-rows-1 sm:w-full md:grid md:grid-cols-2 gap-4 mt-2">
        <TransactionTypes
          value="Receita"
          selectedOption={selectedOption}
          handleOptionSelect={handleOptionSelect}
        />
        <TransactionTypes
          value="Despesa"
          selectedOption={selectedOption}
          handleOptionSelect={handleOptionSelect}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:w-full md:justify-center">
        <Button
          type="submit"
          className="py-2 px-4 md:py-4 md:px-6 bg-green-500 w-full md:w-full rounded-[6px]"
          disabled={states.isSavingDataForms}
          canceled={false}
        >
          {states.isSavingDataForms ? (
            <CircleNotch
              className="animate-spin w-full justify-center"
              data-testid="loading-icon"
            />
          ) : (
            <span>Cadastrar</span>
          )}
        </Button>
      </div>
    </FormModal>
  );
}
