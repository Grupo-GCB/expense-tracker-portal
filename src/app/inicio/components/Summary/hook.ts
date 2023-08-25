"use client";

import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

import { ITransaction } from "@/interfaces";
import { AXIOS_ERROR, UNKNOWN_ERROR } from "@/utils/constants";
import api from "@/services/api";
import { useUser } from "@auth0/nextjs-auth0/client";

export const useSummary = () => {
  const { user } = useUser();
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  async function loadTransactions(): Promise<
    ITransaction | string | undefined
  > {
    try {
      const response = api.get<ITransaction>(`/transaction/${user?.sub}`);
      const { data } = await response;

      if (Array.isArray(data) && data.length !== 0) setTransactions(data);
      else toast.error("Nenhuma transação foi encontrada.");
    } catch (error) {
      if (axios.isAxiosError(error)) console.error(AXIOS_ERROR, error.message);
      else console.error(UNKNOWN_ERROR, error);
      return "Erro ao carregar transações";
    }
  }

 useEffect(() => {
    const intervalId = setInterval(() => {
      loadTransactions();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
};
