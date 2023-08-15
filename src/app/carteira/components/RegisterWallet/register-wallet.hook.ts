'use client' 

import {  useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { getBanks, handleRegisterWallet } from '@/app/carteira/action'
import {  IOptions } from '@/components/Select'
import { IRegisterWallet } from "../../types"  

export const useRegisterWallet = ({ setOpen }: IRegisterWallet) =>{ 
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
    async function fetchBanks() {
      try {
        const banks = await getBanks();
        const formattedOptions = banks.map((bank) => ({
          value: bank.id,
          label: bank.name,
        }));
        setBankList(formattedOptions);
        toast.success('sucesso')
      } catch (error) {
        toast.error(`Erro ao buscar os bancos:${error}`);
      }
    }
    fetchBanks();
  }, []);

  const test = async (values : FormData) => {
    await handleRegisterWallet(values).then((res) => {
        toast.success(res)
    }).catch((err) => {
      toast.error(err)
    })
  }

  return {
    states:{
      bankList,
      isSavingDataForms
    },
    actions:{
      test,
      handleSaveForm
    }
  }
}