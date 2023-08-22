"use client";

import { toast } from "react-toastify";
import Zod from "zod";

import { registerWallet } from "@/app/carteira/action";
import { IUseWallet, WalletSchema, fieldErrorMappings } from "@/app/carteira/types";
import { useState } from "react";

export const useRegisterWallet = ({ setOpen }: IUseWallet) => {

  const [isSavingDataForms, setIsSavingDataForms] = useState<boolean>(false);

  const handleSaveForm = (success: boolean) => {
    setTimeout(() => {
      setIsSavingDataForms(success);
    }, 200);

    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  function validateRegisterWallet(formData: FormData): void {
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
    registerActions: {
      handleRegisterWallet,
    },
  };
};
