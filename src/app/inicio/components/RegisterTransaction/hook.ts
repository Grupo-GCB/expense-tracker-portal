import { useEffect, useState } from "react";
import Zod from "zod";
import { toast } from "react-toastify";

import { IWallet } from "@/interfaces";
import { getAllWallets } from "@/app/carteira/action";
import { IOptions } from "@/components";
import { registerTransaction } from "@/app/inicio/action";
import {
  IUseTransaction,
  fieldErrorMappings,
  newTransactionSchema,
} from "@/app/inicio/types";
import {
  CLOSE_DELAY,
  ERROR_REGISTER_TRANSACTION,
  FORM_DELAY,
  SUCESS_REGISTER_TRANSACTION,
} from "@/utils/constants";

export const useRegisterTransaction = ({ setOpen }: IUseTransaction) => {
  const [walletsNames, setWalletsNames] = useState<IOptions[]>([]);
  const [isSavingDataForms, setIsSavingDataForms] = useState<boolean>(false);

  const handleSaveForm = (succes: boolean): void => {
    setTimeout(() => {
      setIsSavingDataForms(succes);
    }, FORM_DELAY);

    setTimeout(() => {
      setOpen(false);
    }, CLOSE_DELAY);
  };

  async function getWalletsNames(): Promise<void> {
    try {
      const response: IWallet[] | string = await getAllWallets();
      if (Array.isArray(response) && response.length !== 0) {
        const bank = response.map((wallet) => ({
          value: wallet.id,
          label: `${wallet.bank.name} - ${wallet.account_type}`,
        }));

        setWalletsNames(bank);
      }
    } catch {
      toast.error("Erro ao listar nome das carteiras.");
    }
  }

  useEffect(() => {
    getWalletsNames();
  }, []);

  function convertFormDataToObject(formData: FormData): Record<string, any> {
    return Object.fromEntries(formData.entries());
  }

  function validateTransactionData(formData: FormData): void {
    const transactionData = convertFormDataToObject(formData);
    newTransactionSchema.parse(transactionData);
  }

  function handleValidationErrors(error: Zod.ZodError): void {
    error.issues.forEach((issue, i) => {
      const fieldName = issue.path[i];
      if (fieldName in fieldErrorMappings) {
        const { errorMessage } = fieldErrorMappings[fieldName];
        toast.error(errorMessage);
      }
    });
  }

  const handleNewTransaction = async (values: FormData): Promise<void> => {
    try {
      validateTransactionData(values);
      const response = await registerTransaction(values);
      handleSaveForm(true);
      if (response === SUCESS_REGISTER_TRANSACTION) toast.success(response);
      if (response === ERROR_REGISTER_TRANSACTION) toast.error(response);
    } catch (error) {
      if (error instanceof Zod.ZodError) handleValidationErrors(error);
      else toast.error(`${error}`);
    }
  };

  return {
    states: {
      walletsNames,
      isSavingDataForms,
    },
    actions: {
      handleNewTransaction,
    },
  };
};
