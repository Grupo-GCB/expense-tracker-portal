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
        if (Array.isArray(response)) {
          setWalletList(response);
        }
      } catch (err) {
        toast.error("Erro ao listar as carteiras");
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
