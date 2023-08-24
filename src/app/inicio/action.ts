import axios from "axios";

import api from "@/services/api";

import { IRegisterTransaction } from "@/interfaces";
import {
  AXIOS_ERROR,
  ERROR_REGISTER_TRANSACTION,
  SUCESS_REGISTER_TRANSACTION,
  UNKNOWN_ERROR,
} from "@/utils/constants";

export async function registerTransaction(formData: FormData): Promise<string> {
  const wallet = formData.get("wallets") as string;

  try {
    await api.post<IRegisterTransaction>(`/transaction/${wallet}`, {
      description: formData.get("description") as string,
      value: parseFloat(formData.get("value") as string),
      date: formData.get("date") as string,
      type: formData.get("type") as string,
      categories: formData.get("categories") as string,
    });
    return SUCESS_REGISTER_TRANSACTION;
  } catch (error) {
    if (axios.isAxiosError(error)) console.error(AXIOS_ERROR, error.message);
    else console.error(UNKNOWN_ERROR, error);

    return ERROR_REGISTER_TRANSACTION;
  }
}