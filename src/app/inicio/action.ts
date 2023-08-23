import api from "@/services/api";
import axios from "axios";

import { IRegisterTransaction, } from "@/interfaces/Transaction";
import { AXIOS_ERROR, UNKNOWN_ERROR } from "@/utils/constants";

export async function registerTransaction(formData: FormData): Promise<string> {
  try {
    const {data} = await api.post<IRegisterTransaction>("/transaction", {
        description: formData.get("description") as string,
        price: formData.get("price"),
        bank_id: formData.get("bank_id") as string,
        date: formData.get("date") as string,
        wallets: formData.get("wallets") as string,
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
