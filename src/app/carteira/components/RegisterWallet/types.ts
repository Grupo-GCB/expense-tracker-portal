import { z } from "zod";

export const RegisterWalletSchema = z.object({
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

export type RegisterWallet = z.infer<typeof RegisterWalletSchema>;

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
