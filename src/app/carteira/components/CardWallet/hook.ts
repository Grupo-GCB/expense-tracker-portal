"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getAllWallets } from "@/app/carteira/action";
import { IWallet } from "@/interfaces";

export const useShowAllWallet = () => {
  const [walletList, setWalletList] = useState<IWallet[]>([]);

  useEffect(() => {
    async function fetchAllWallets(): Promise<void> {
      try {
        const response: IWallet[] | string = await getAllWallets();
        if (Array.isArray(response) && response.length !== 0) setWalletList(response);
        else toast.error("Nenhuma carteira foi encontrada.")
        
      } catch {
        toast.error("Erro ao listar as carteiras.");
      }
    }
    fetchAllWallets();
  }, []);

  return {
    states: {
      walletList,
      setWalletList,
    },
    actions: {},
  };
};
