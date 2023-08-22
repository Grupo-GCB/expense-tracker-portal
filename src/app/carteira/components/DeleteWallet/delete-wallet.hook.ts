"use client";

import { toast } from "react-toastify";

import { deleteWallet } from "@/app/carteira/action";
import { ERROR_DELETE_MESSAGE, SUCESS_DELETE_MESSAGE } from "@/utils/constants";

export const useDeleteWallet = () => {
  const handleDeleteWallet = async (): Promise<void> => {
    try {
      const response: string = await deleteWallet();
      if (response === SUCESS_DELETE_MESSAGE) toast.success(response)
      if (response === ERROR_DELETE_MESSAGE) toast.success(response)
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return {
    deleteActions: {
        handleDeleteWallet,
    },
  };
};
