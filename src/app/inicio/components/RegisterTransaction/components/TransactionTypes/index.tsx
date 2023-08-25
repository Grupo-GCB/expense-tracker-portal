import * as RadioGroup from "@radix-ui/react-radio-group";
import { ArrowCircleUp, ArrowCircleDown } from "phosphor-react";

import { ITransactionType } from "@/interfaces";

export default function TransactionTypes({
  value,
  selectedOption,
  handleOptionSelect,
}: ITransactionType) {
  return (
    <RadioGroup.Root
    className="grid grid-rows-1"
    name="type"
  >
    <RadioGroup.Item
      className={`p-4 flex items-center justify-center gap-2 rounded cursor-pointer decoration-gray-300 font-normal ${
        selectedOption === value
          ? value === "Receita"
            ? "bg-green-500"
            : "bg-red-300"
          : "bg-gray-700 hover:bg-gray-300"
      }`}
      value={value}
      onClick={() => handleOptionSelect(value)}
    >
      {value === "Receita" ? (
        <ArrowCircleUp
          size={20}
          color={`${selectedOption === value ? "#FFFFFF" : "#00B37E"}`}
        />
      ) : (
        <ArrowCircleDown
          size={20}
          color={`${selectedOption === value ? "#FFFFFF" : "#F75A68"}`}
        />
      )}
      {value === "Receita" ? "Entrada" : "Saída"}
    </RadioGroup.Item>
    </RadioGroup.Root>
  );
}
