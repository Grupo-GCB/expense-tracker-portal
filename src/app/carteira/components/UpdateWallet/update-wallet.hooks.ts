"use client";

import { toast } from "react-toastify";

import { updateWallet } from "@/app/carteira/action";

export const useUpdateWallet = () => {
  const handleUpdateWallet = async (values: FormData): Promise<void> => {
    try {
      const response = await updateWallet(values);
      toast(response)
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
