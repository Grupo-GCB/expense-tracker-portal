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
  const observerTarget = useRef(null);
  const { user } = useUser();

  async function loadTransactions() {
    try {
      const response = api.get<ITransaction>(`/transaction/${user?.sub}`);
      const { data } = await response;

      if (Array.isArray(data) && data.length !== 0) setTransactions(data);
      else toast.error("Nenhuma transação foi encontrada.");
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
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadTransactions();
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }
      },
      { threshold: 1 }
    );
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, transactions]);

  return {
    states: {
      transactions,
      observerTarget,
      isloading,
    },
    actions: {
      setTransactions,
      setIsLoading,
    },
  };
};
