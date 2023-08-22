"use server";

import jwt_decode from 'jwt-decode';
import axios, { AxiosError } from 'axios';
import { cookies } from 'next/dist/client/components/headers';

import { AXIOS_ERROR, AXIOS_ERROR_400, AXIOS_ERROR_404, ERROR_UPDATE_MESSAGE, SUCESS_UPDATE_MESSAGE, UNKNOWN_ERROR } from '@/utils/constants';
import { IBank, IRegisterWallet, IWallet, ErrorMappings } from "@/interfaces";
import { DecodedToken } from "./types";
import api from '@/services/api';

export async function getBanks(): Promise<IBank[]> {
  const { data } = await api.get<IBank[]>("/bank/all");
  return data;
}

function getUserIdFromToken(): string {
  return cookies().get("@user_token")!.value;
}

function getSubUserToken(userToken: string): string {
  const { sub }: DecodedToken = jwt_decode(userToken);
  return sub;
}

function getIdWallet(){
  return cookies().get('@id_wallet')!.value
}

export async function registerWallet(formData: FormData): Promise<string>{
  const user_token: string = getUserIdFromToken()
  const sub = getSubUserToken(user_token)

  try {
    const { data } = await api.post<IRegisterWallet>("/wallet", {
      account_type: formData.get("account_type") as string,
      description: formData.get("description") as string,
      bank_id: formData.get("bank_id") as string,
      user_id: sub as string,
    });
    return "Registro da carteira feito com sucesso.";
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

    return "Erro ao registrar a carteira.";
  }
}

export async function getAllWallets(): Promise<IWallet[] | string> {
  try {
    const id: string = getUserIdFromToken();
    const sub = getSubUserToken(id);
    const { data } = await api.get<IWallet[]>(`/wallet/all/${sub}`);
    return data;
  } catch {
    return "Erro ao listar as carteiras.";
  }
}

export async function updateWallet(formData: FormData): Promise<string>{
  const idWallet: string = getIdWallet()

  try {
     await api.put<IWallet>(`/wallet/${idWallet}`, {
      account_type: formData.get('account_type') as string,
      description: formData.get('description') as string,
      bank_id: formData.get('bank_id') as string,
    })

    return SUCESS_UPDATE_MESSAGE
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(AXIOS_ERROR, error.message);
    } else {
      console.error(UNKNOWN_ERROR, error);
    }

    return ERROR_UPDATE_MESSAGE
  }  
}

export async function deleteWallet(): Promise<string>{
  const idWallet: string = getIdWallet()

  try {
     await api.delete<string>(`/wallet/${idWallet}`)

    return "Carteira deletada com sucesso."
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(AXIOS_ERROR, error.message);
    } else {
      console.error(UNKNOWN_ERROR, error);
    }

    return "Erro ao deletar a carteira."
  }  
}