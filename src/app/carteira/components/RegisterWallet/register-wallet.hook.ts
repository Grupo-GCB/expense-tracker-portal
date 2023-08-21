"use client";

import { toast } from "react-toastify";

import { registerWallet } from "@/app/carteira/action";

export const useRegisterWallet = () => {
  const handleRegisterWallet = async (values: FormData) => {
    try {
      const reponse: string = await registerWallet(values);
      toast.success(reponse);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return {
    regsiterActions: {
      handleRegisterWallet,
    },
  };
};
