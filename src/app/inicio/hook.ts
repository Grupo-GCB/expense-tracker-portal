"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { AxiosError } from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { ErrorMappings, ITransaction } from "@/interfaces";
import api from "@/services/api";
import { AXIOS_ERROR_400, AXIOS_ERROR_404 } from "@/utils/constants";

export const useHome = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const observerTarget = useRef(null);
  const { user } = useUser();

  async function loadTransactions(): Promise<string | void> {
    try {
      const { data } = await api.get<ITransaction>(`/transaction/${user?.sub}`);
      setIsLoading(true);
      if (Array.isArray(data) && data.length !== 0) {
        setIsLoading(false);
        setTransactions(data);
      } else {
        setIsLoading(false);
        toast.error("Nenhuma transação foi encontrada.");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError;
        const response = axiosError.response;

        if (response) {
          const status = response.status;
          const errorMappings: ErrorMappings = {
            400: AXIOS_ERROR_400,
            404: AXIOS_ERROR_404,
          };

          return errorMappings[status] || axiosError.message;
        } else {
          return axiosError.message;
        }
      }
      return "Erro ao buscar as transações.";
    }
  }

  useEffect(() => {
    if (user) {
      loadTransactions();
    }
  }, [user]);

  return {
    states: {
      transactions,
      observerTarget,
      isloading,
    },
    actions: {
      setTransactions,
      setIsLoading,
      loadTransactions,
    },
  };
};
