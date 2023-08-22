"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Zod from "zod";

import { getBanks, registerWallet } from "@/app/carteira/action";
import { IRegisterWallet } from "@/app/carteira/types";
import { IOptions } from "@/components/Select";
import { IBank } from "@/interfaces";
import { RegisterWalletSchema, fieldErrorMappings } from "./types";

export const useRegisterWallet = ({ setOpen }: IRegisterWallet) => {
  const [bankList, setBankList] = useState<IOptions[]>([]);
  const [isSavingDataForms, setIsSavingDataForms] = useState<boolean>(false);

  const handleSaveForm = (success: boolean) => {
    setTimeout(() => {
      setIsSavingDataForms(success);
    }, 200);

    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  useEffect(() => {
    async function fetchBanks(): Promise<void> {
      try {
        const banks: IBank[] = await getBanks();
        const formattedOptions = banks.map((bank) => ({
          value: bank.id,
          label: bank.name,
        }));
        setBankList(formattedOptions);
      } catch (error) {
        toast.error(`Erro ao buscar os bancos: ${error}`);
      }
    }
    fetchBanks();
  }, []);

  function validateRegisterWallet(formData: FormData): void {
    const formDataObject = Object.fromEntries(formData.entries());
    RegisterWalletSchema.parse(formDataObject);
  }

  function handleValidationErrors(error: Zod.ZodError): void {
    error.issues.forEach((issue, i) => {
      const fieldName = issue.path[i];
      if (fieldName in fieldErrorMappings) {
        const errorMessage = fieldErrorMappings[fieldName];
        toast.error(errorMessage.errorMessage);
      }
    });
  }

  const handleRegisterWallet = async (values: FormData): Promise<void> => {
    try {
      validateRegisterWallet(values);
      const response = await registerWallet(values);
      handleSaveForm(true);
      toast.success(response);
    } catch (error) {
      if (error instanceof Zod.ZodError) {
        handleValidationErrors(error);
      } else {
        toast.error(`${error}`);
      }
    }
  };

  return {
    states: {
      bankList,
      isSavingDataForms,
    },
    actions: {
      handleRegisterWallet,
      handleSaveForm,
    },
  };
};
