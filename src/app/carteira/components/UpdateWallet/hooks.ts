"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Zod from "zod";

import { updateWallet } from "@/app/carteira/action";
import {
  IUseWallet,
  WalletSchema,
  fieldErrorMappings,
} from "@/app/carteira/types";
import { ERROR_UPDATE_MESSAGE, SUCESS_UPDATE_MESSAGE } from "@/utils/constants";

export const useUpdateWallet = ({ setOpen }: IUseWallet) => {
  const [isSavingDataForms, setIsSavingDataForms] = useState<boolean>(false);

  const handleSaveForm = (succes: boolean) => {
    setTimeout(() => {
      setIsSavingDataForms(succes);
    }, 200);

    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  function validateWallet(formData: FormData): void {
    const formDataObject = Object.fromEntries(formData.entries());
    WalletSchema.parse(formDataObject);
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

  const handleUpdateWallet = async (values: FormData): Promise<void> => {
    try {
      validateWallet(values);
      const response = await updateWallet(values);
      handleSaveForm(true);
      if (response === SUCESS_UPDATE_MESSAGE) toast.success(response);
      if (response === ERROR_UPDATE_MESSAGE) toast.error(response);
    } catch (error) {
      if (error instanceof Zod.ZodError) handleValidationErrors(error);
      else toast.error(`${error}`);
    }
  };

  return {
    updateActions: {
      handleUpdateWallet,
    },
  };
};
