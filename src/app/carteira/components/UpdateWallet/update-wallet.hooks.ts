"use client";

import { toast } from "react-toastify";
import Zod from "zod";

import { updateWallet } from "@/app/carteira/action";
import { ERROR_UPDATE_MESSAGE, SUCESS_UPDATE_MESSAGE } from "@/utils/constants";
import { WalletSchema, fieldErrorMappings } from "../../types";

export const useUpdateWallet = () => {

  function validateWallet(formData: FormData): void {
    const formDataObject = Object.fromEntries(formData.entries());
    WalletSchema.parse(formDataObject);
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

  const handleUpdateWallet = async (values: FormData): Promise<void> => {
    try {
      validateWallet(values);
      const response = await updateWallet(values);
      if (response === SUCESS_UPDATE_MESSAGE) toast.success(response)
      if (response === ERROR_UPDATE_MESSAGE) toast.error(response)
    } catch (error) {
      if (error instanceof Zod.ZodError) {
        handleValidationErrors(error);
      } else {
        toast.error(`${error}`);
      }
    }
  };

  return {
    updateActions: {
      handleUpdateWallet,
    },
  };
};
