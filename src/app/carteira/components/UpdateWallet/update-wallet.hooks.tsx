"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getBanks, updateWallet } from "@/app/carteira/action";
import { IRegisterWallet } from "@/app/carteira/types";
import { IOptions } from "@/components/Select";
import { IBank } from "@/interfaces";

export const useUpdateWallet = ({ setOpen }: IRegisterWallet) => {
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

  const handleUpdateWallet = async (values: FormData) => {
    try {
      const reponse: string = await updateWallet(values);
      toast.success(reponse);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return {
    states: {
      bankList,
      isSavingDataForms,
    },
    actions: {
        handleUpdateWallet,
      handleSaveForm,
    },
  };
};
