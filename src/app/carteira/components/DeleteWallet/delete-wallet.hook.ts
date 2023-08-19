"use client";

import { toast } from "react-toastify";

import { deleteWallet } from "@/app/carteira/action";

export const useDeleteWallet = () => {
  const handleDeleteWallet = async (): Promise<void> => {
    try {
      const reponse: string = await deleteWallet();
      toast(reponse);
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
