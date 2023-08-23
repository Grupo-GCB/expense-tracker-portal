import { useEffect, useState } from "react";

import { IWallet } from "@/interfaces";
import { getAllWallets } from "@/app/carteira/action";
import { toast } from "react-toastify";
import { IOptions } from "@/components";

export const useRegisterTransaction = () => {
  const [walletsNames, setWalletsNames] = useState<IOptions[]>([]);

  useEffect(() => {
    async function getWalletsNames(): Promise<void> {
      try {
        const response: IWallet[] | string = await getAllWallets();
        if (Array.isArray(response) && response.length !== 0) {
          const bank = response.map((wallet) => (
            {
              value: wallet.id,
              label: `${wallet.bank.name} - ${wallet.account_type}`
            }
          ))

          setWalletsNames(bank);
        }
      } catch {
        toast.error("Erro ao listar nome das carteiras.");
      }
    }

    getWalletsNames();
  }, []);


  const getMaxDate = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  };

  return {
    statesTransaction:{
      walletsNames
    },
    actions: {
      getMaxDate,
    },
  };
};
