"use client";

import axios, { AxiosError } from "axios";
import { useEffect, useRef, useState } from "react";

import { ErrorMappings, ITransaction } from "@/interfaces";
import { AXIOS_ERROR_400, AXIOS_ERROR_404 } from "@/utils/constants";
import { toast } from "react-toastify";

export const useHome = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const observerTarget = useRef(null);

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
      if (Array.isArray(response) && response.length !== 0)
        setTransactions(data);
      else toast.error("Nenhuma carteira foi encontrada.");
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
          setTimeout(() => {
            loadTransactions();
            setIsLoading(true);
          });
          setIsLoading(false);
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
  }, [observerTarget]);

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
