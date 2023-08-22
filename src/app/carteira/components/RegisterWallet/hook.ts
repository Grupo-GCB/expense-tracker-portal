"use client";

import { toast } from "react-toastify";
import Zod from "zod";

import { registerWallet } from "@/app/carteira/action";
import { RegisterWalletSchema, fieldErrorMappings } from "./types";

export const useRegisterWallet = () => {

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
