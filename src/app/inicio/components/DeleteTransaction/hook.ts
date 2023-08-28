"use client";

import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

import { useHome } from "@/app/inicio/hook";
import { ErrorMappings, ITransaction } from "@/interfaces";
import api from "@/services/api";
import { AXIOS_ERROR_400, AXIOS_ERROR_404 } from "@/utils/constants";

export const useDeleteTransaction = () => {
  const [isSavingDataForms, setIsSavingDataForms] = useState<boolean>(false);
  const { states, actions } = useHome();

  function removeTransaction(idTransaction: string) {
    const newList: ITransaction[] = states.transactions.filter(
      (item: ITransaction) => item.id !== idTransaction
    );
    actions.setTransactions(newList);
  }

  const deleteTransaction = async (idTransaction: string): Promise<void> => {
    try {
      const { data } = await api.delete<string>(
        `/transaction/${idTransaction}`
      );
      setIsSavingDataForms(true);
      removeTransaction(idTransaction);
      toast.success("Transação deletada com sucesso.");
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

          toast.error(errorMappings[status] || axiosError.message);
        } else {
          toast.error(axiosError.message);
        }
      } else {
        toast.error("Erro ao deletar a transação.");
      }
    }
  };

  return {
    deleteStates: {
      isSavingDataForms,
    },
    deleteActions: {
      deleteTransaction,
      setIsSavingDataForms,
    },
  };
};
