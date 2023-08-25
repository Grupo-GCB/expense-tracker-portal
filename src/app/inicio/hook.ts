"use client";

import { AxiosError } from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { ErrorMappings, ITransaction } from "@/interfaces";
import api from "@/services/api";
import { AXIOS_ERROR_400, AXIOS_ERROR_404 } from "@/utils/constants";
import { useUser } from "@auth0/nextjs-auth0/client";

export const useHome = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const observerTarget = useRef(null);
  const { user } = useUser();

  async function loadTransactions(pageNumber: number) {
    try {
      const pageSize = 5;
      const response = api.get<ITransaction>(`/transaction/${user?.sub}`, {
        params: {
          page: pageNumber,
          pageSize: pageSize,
        },
      });
      const { data } = await response;

      if (Array.isArray(data) && data.length !== 0) {
        setTransactions(data);
        setCurrentPage(pageNumber);
      } else toast.error("Nenhuma transação foi encontrada.");
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
    loadTransactions(5);
  }, [transactions]);

  return {
    states: {
      transactions,
      observerTarget,
      isloading,
      currentPage,
    },
    actions: {
      setTransactions,
      setIsLoading,
      loadTransactions,
      setCurrentPage,
    },
  };
};
