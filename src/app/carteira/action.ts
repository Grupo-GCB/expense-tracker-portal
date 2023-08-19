'use server'

import jwt_decode from 'jwt-decode';
import axios, { AxiosError } from 'axios';
import { cookies } from 'next/dist/client/components/headers';
import api from '@/services/api';
import { toast } from 'react-toastify';

import { AXIOS_ERROR, AXIOS_ERROR_400, AXIOS_ERROR_404, UNKNOWN_ERROR } from '@/utils/constants';
import { ErrorMappings } from '@/interfaces/ErrorMapping';
import { DecodedToken } from "./types"
import { IBank } from '@/interfaces';
import { IWallet } from '@/interfaces';

export async function getBanks() {
  const { data }= await api.get<IBank[]>('/bank/all');
  return data;
}

function getUserToken(){
  return cookies().get('@user_token')!.value;
}

function getSubUserToken(userToken: string): string{
  const { sub }: DecodedToken = jwt_decode(userToken)
  return sub;
}

function getIdWallet(){
  return cookies().get('@id_wallet')!.value
}

export async function registerWallet(formData: FormData): Promise<string>{
  const user_token: string = getUserToken()
  const sub = getSubUserToken(user_token)

  try {
    const { data } = await api.post<IWallet>('/wallet', {
      account_type: formData.get('account_type') as string,
      description: formData.get('description') as string,
      bank_id: formData.get('bank_id') as string,
      user_id: sub as string,
    })
    return 'Registro da carteira feito com sucesso.'
  } catch (error) {
    if (error instanceof AxiosError) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        const status = axiosError.response.status;
        const errorMappings: ErrorMappings = {
          400: AXIOS_ERROR_400,
          404: AXIOS_ERROR_404
        };
    
        return errorMappings[status] || axiosError.message;
      } else {
        return axiosError.message;
      }
    }
    
    return 'Erro ao registrar a carteira.';
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

    return "Atualização da carteira realizada com sucesso."
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(AXIOS_ERROR, error.message);
    } else {
      console.error(UNKNOWN_ERROR, error);
    }

    return "Erro ao realizar a atualização da carteira."
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