import * as RadioGroup from "@radix-ui/react-radio-group";
import { ArrowCircleDown, ArrowCircleUp, CircleNotch } from "phosphor-react";
import { useState } from "react";

import { Button, Input, FormModal, CustomSelect } from "@/components";
import { IUseTransaction } from "@/app/inicio/types";
import { useWallet } from "@/app/carteira/wallet.hook";
import { useRegisterTransaction } from "./hook";

export function RegisterTransaction({ setOpen }: IUseTransaction) {
  const { states } = useWallet({ setOpen });
  const { statesTransaction, actions } = useRegisterTransaction();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (value: string) => {
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
        id="price"
        name="price"
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
        max={actions.getMaxDate()}
        className="flex items-center px-4 bg-gray-900 h-12 rounded focus:outline-none focus:ring focus:ring-green-300 resize-none  decoration-gray-300"
      />
      <CustomSelect
        id="wallets"
        name="wallets"
        options={statesTransaction.walletsNames}
        placeholder="Carteiras"
      />

      <CustomSelect
        id="category"
        name="category"
        options={states.bankList}
        placeholder="Categoria"
      />

      <RadioGroup.Root className="sm:grid sm:grid-rows-1 sm:w-full md:grid md:grid-cols-2 gap-4 mt-2" name='type'>
        <RadioGroup.Item
          className={`p-4 flex items-center justify-center gap-2 rounded cursor-pointer decoration-gray-300 font-normal ${
            selectedOption === "income"
              ? "bg-green-500"
              : "bg-gray-700 hover:bg-gray-300"
          }`}
          value="income"
          onClick={() => handleOptionSelect("income")}
        >
          <ArrowCircleUp
            size={20}
            color={`${selectedOption === "income" ? "#FFFFFF" : "#00B37E"}`}
          />
          Entrada
        </RadioGroup.Item>

        <RadioGroup.Item
          className={`p-4 flex items-center justify-center gap-2 rounded cursor-pointer decoration-gray-300 font-normal ${
            selectedOption === "outcome"
              ? "bg-red-300"
              : "bg-gray-700 hover:bg-gray-300"
          }`}
          value="outcome"
          onClick={() => handleOptionSelect("outcome")}
        >
          <ArrowCircleDown
            size={20}
            color={`${selectedOption === "outcome" ? "#FFFFFF" : "#F75A68"}`}
          />
          Saída
        </RadioGroup.Item>
      </RadioGroup.Root>

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
