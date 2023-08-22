import { Dispatch, SetStateAction } from "react";
import { z } from "zod";

export interface IUseWallet {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface DecodedToken {
  sub: string;
}

export interface ICardWallet {
  walletId: string;
  bankName: string;
  accountType: string;
  description: string;
}

export interface IContentCard {
  titleContent: string;
  textContent: string;
}

export const WalletSchema = z.object({
  account_type: z.string().nonempty({
    message: "Tipo da conta é obrigatório",
  }),
  bank_id: z.string().nonempty({
    message: "Banco é obrigatório",
  }),
  description: z.string().nonempty({
    message: "Descrição é obrigatório",
  }),
});

export type TWallet = z.infer<typeof WalletSchema>;

export interface FieldErrorMapping {
  [fieldName: string]: {
    errorMessage: string;
  };
}

export const fieldErrorMappings: FieldErrorMapping = {
  account_type: {
    errorMessage: "Campo Tipo da conta é obrigatório",
  },
  bank_id: {
    errorMessage: "Campo Banco é obrigatório",
  },
  description: {
    errorMessage: "Campo Descrição é obrigatório",
  },
};