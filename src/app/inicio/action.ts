import api from "@/services/api";
import axios from "axios";

import { IRegisterTransaction, } from "@/interfaces/Transaction";
import { AXIOS_ERROR, UNKNOWN_ERROR } from "@/utils/constants";

export async function registerTransaction(formData: FormData): Promise<string> {

  const wallet = formData.get("wallets") as string

  try {
    const {data} = await api.post<IRegisterTransaction>(`/transaction/${wallet}`, {
        description: formData.get("description") as string,
        price: parseFloat(formData.get("price") as string),
        date: formData.get("date") as string,
        wallets: formData.get("wallets") as string,
        type: formData.get("type") as string,
        category: formData.get("category") as string,        
    });

    console.log(data)
    return "Deu bom";
  } catch (error) {

    if (axios.isAxiosError(error)) console.error(AXIOS_ERROR, error.message);
    else console.error(UNKNOWN_ERROR, error);

    return "Deu ruim";
  }
}
