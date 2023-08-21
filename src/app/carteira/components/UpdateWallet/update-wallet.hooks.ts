"use client";

import { toast } from "react-toastify";

import { updateWallet } from "@/app/carteira/action";
import { ERROR_UPDATE_MESSAGE, SUCESS_UPDATE_MESSAGE } from "@/utils/constants";

export const useUpdateWallet = () => {

  const handleUpdateWallet = async (values: FormData): Promise<void> => {
    try {
      const response = await updateWallet(values);
      if (response === SUCESS_UPDATE_MESSAGE) toast.success(response)
      if (response === ERROR_UPDATE_MESSAGE) toast.error(response)
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return {
    updateActions: {
      handleUpdateWallet,
    },
  };
};
