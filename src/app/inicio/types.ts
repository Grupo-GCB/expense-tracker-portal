import { Dispatch, SetStateAction } from "react";
import { z } from "zod";

export interface IUseTransaction {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const newTransactionSchema = z.object({
  description: z.string().nonempty(),
  value: z.string().nonempty(),
  date: z.string().nonempty(),
  wallets: z.string().nonempty(),
  categories: z.string().nonempty(),
  type: z.enum(["Receita", "Despesa"]),
});

export type TTransaction = z.infer<typeof newTransactionSchema>;

export interface FieldErrorMapping {
  [fieldName: string]: {
    errorMessage: string;
  };
}

export const fieldErrorMappings: FieldErrorMapping = {
  description: {
    errorMessage: "Descrição é obirgatório",
  },
  value: {
    errorMessage: "O valor é obirgatório",
  },
  date: {
    errorMessage: "A data é obirgatória",
  },
  wallets: {
    errorMessage: "Uma carteira é obrigatória",
  },
  categories: {
    errorMessage: "A categoria é obrigatória",
  },
  type: {
    errorMessage: "Selecionar um tipo é obrigatório",
  },
};
