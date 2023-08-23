"use client";

import { ErrorMappings, ITransaction } from "@/interfaces";
import { AXIOS_ERROR_400, AXIOS_ERROR_404 } from "@/utils/constants";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export const useHome = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const test = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
      Accept: "application/json",
    },
  });

  async function loadTransactions() {
    try {
      const response = test.get("/transaction");
      const { data } = await response;
      setTransactions(data);
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
    loadTransactions();
  }, []);

  return {
    states: {
      transactions,
    },
    actions: {
      setTransactions,
    },
  };
};
