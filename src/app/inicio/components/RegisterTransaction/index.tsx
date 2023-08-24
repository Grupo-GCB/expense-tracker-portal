import * as RadioGroup from "@radix-ui/react-radio-group";
import { CircleNotch } from "phosphor-react";
import { useState } from "react";

import { Button, Input, FormModal, CustomSelect } from "@/components";
import { IUseTransaction } from "@/app/inicio/types";
import { useRegisterTransaction } from "./hook";
import { categoryTypes, getCurrentDate } from "@/utils/constants";
import TransactionTypes from "./components/TransactionTypes";

export function RegisterTransaction({ setOpen }: IUseTransaction) {
  const { states, actions } = useRegisterTransaction({ setOpen });
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
