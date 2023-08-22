"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getBanks } from "@/app/carteira/action";
import { IUseWallet } from "@/app/carteira/types";
import { IOptions } from "@/components/Select";
import { IBank } from "@/interfaces";

export const useWallet = ({ setOpen }: IUseWallet) => {
  const [bankList, setBankList] = useState<IOptions[]>([]);
  const [isSavingDataForms, setIsSavingDataForms] = useState<boolean>(false);

  const handleSaveForm = () => {
    setTimeout(() => {
      setIsSavingDataForms(true);
    }, 200);

    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  useEffect(() => {
    async function fetchBanks(): Promise<void> {
      try {
        const banks: IBank[] = await getBanks();
        const formattedOptions = banks.map((bank) => ({
          value: bank.id,
          label: bank.name,
        }));
        setBankList(formattedOptions);
      } catch (error) {
        toast.error(`Erro ao buscar os bancos: ${error}`);
      }
    }
    fetchBanks();
  }, []);

  return {
    states: {
      bankList,
      isSavingDataForms,
    },
    actions: {
      handleSaveForm,
    },
  };
};
