import { Dispatch, SetStateAction } from "react";
import { z } from "zod";

export interface IUseUpdateTransaction {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const updateTransactionSchema = z.object({
  description: z.string().nonempty(),
  value: z.string().nonempty(),
  date: z.string().nonempty(),
  wallets: z.string().nonempty(),
  categories: z.string().nonempty(),
  type: z.enum(["Receita", "Despesa"]),
});

export type TTransaction = z.infer<typeof updateTransactionSchema>;

export interface FieldErrorMapping {
  [fieldName: string]: {
    errorMessage: string;
  };
}

export const fieldErrorMappings: FieldErrorMapping = {
  description: {
    errorMessage: "Descrição é obrigatória.",
  },
  value: {
    errorMessage: "O valor é obrigatório.",
  },
  date: {
    errorMessage: "A data é obrigatória.",
  },
  wallets: {
    errorMessage: "Uma carteira é obrigatória.",
  },
  categories: {
    errorMessage: "A categoria é obrigatória.",
  },
  type: {
    errorMessage: "Selecionar um tipo é obrigatório.",
  },
};
