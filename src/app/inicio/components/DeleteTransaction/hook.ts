"use client";

import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

import { ErrorMappings } from "@/interfaces";
import api from "@/services/api";
import { AXIOS_ERROR_400, AXIOS_ERROR_404 } from "@/utils/constants";

export const useDeleteTransaction = () => {
  const [isSavingDataForms, setIsSavingDataForms] = useState<boolean>(false);

  const deleteTransaction = async (idTransaction: string): Promise<void> => {
    try {
      const response = api.delete<string>(`/transaction/${idTransaction}`);
      setIsSavingDataForms(true);
      const { data } = await response;
      toast.success("Transação deletada com sucesso");
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
