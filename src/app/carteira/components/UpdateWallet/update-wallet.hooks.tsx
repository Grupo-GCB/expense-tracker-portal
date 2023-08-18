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

};
