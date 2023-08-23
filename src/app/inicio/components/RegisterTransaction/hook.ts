import { useEffect, useState } from "react";

import { IWallet } from "@/interfaces";
import { getAllWallets } from "@/app/carteira/action";
import { toast } from "react-toastify";
import { IOptions } from "@/components";
import { registerTransaction } from "@/app/inicio/action";
import Zod from "zod";
import { fieldErrorMappings, newTransactionSchema } from "../../types";

export const useRegisterTransaction = () => {
  const [walletsNames, setWalletsNames] = useState<IOptions[]>([]);

  useEffect(() => {
    async function getWalletsNames(): Promise<void> {
      try {
        const response: IWallet[] | string = await getAllWallets();
        if (Array.isArray(response) && response.length !== 0) {
          const bank = response.map((wallet) => (
            {
              value: wallet.id,
              label: `${wallet.bank.name} - ${wallet.account_type}`
            }
          ))

          setWalletsNames(bank);
        }
      } catch {
        toast.error("Erro ao listar nome das carteiras.");
      }
    }

    getWalletsNames();
  }, []);


  const getMaxDate = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  };

  function validateRegisterTransaction(formData: FormData): void {
    const formDataObject = Object.fromEntries(formData.entries());
    newTransactionSchema.parse(formDataObject);
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
    try{
      validateRegisterTransaction(values)
      const response = await registerTransaction(values)
      toast(response)
    } catch (error) {
      if (error instanceof Zod.ZodError) {
        handleValidationErrors(error);
      } else {
        toast.error(`${error}`);
      }
    }
  }

  return {
    statesTransaction:{
      walletsNames
    },
    actions: {
      getMaxDate,
      handleNewTransaction
    },
  };
};
