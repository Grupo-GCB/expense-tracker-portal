import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Zod from "zod";

import { getAllWallets } from "@/app/carteira/action";
import { updateTransaction } from "@/app/inicio/action";
import { IOptions } from "@/components";
import { IWallet } from "@/interfaces";
import {
  CLOSE_DELAY,
  ERROR_UPDATE_TRANSACTION,
  FORM_DELAY,
  SUCCESS_UPDATE_TRANSACTION,
} from "@/utils";
import {
  IUseUpdateTransaction,
  fieldErrorMappings,
  updateTransactionSchema,
} from "./types";

export const useUpdateTransaction = ({ setOpen }: IUseUpdateTransaction) => {
  const [isSavingDataForms, setIsSavingDataForms] = useState<boolean>(false);
  const [walletsNames, setWalletsNames] = useState<IOptions[]>([]);
  const [idTransaction, setIdTransaction] = useState<string>("");

  const handleSaveForm = (succes: boolean) => {
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
    updateTransactionSchema.parse(transactionData);
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

  const handleUpdateTransaction = async (values: FormData): Promise<void> => {
    try {
      validateTransactionData(values);
      const response = await updateTransaction(values, idTransaction);
      handleSaveForm(true);
      if (response === SUCCESS_UPDATE_TRANSACTION) toast.success(response);
      if (response === ERROR_UPDATE_TRANSACTION) toast.error(response);
    } catch (error) {
      if (error instanceof Zod.ZodError) handleValidationErrors(error);
      else toast.error(`${error}`);
    }
  };
  return {
    updateActions: {
      handleUpdateTransaction,
      setWalletsNames,
      setIsSavingDataForms,
      setIdTransaction,
    },
    states: {
      walletsNames,
      isSavingDataForms,
      idTransaction,
    },
  };
};
