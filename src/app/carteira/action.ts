'use server'

import jwt_decode from 'jwt-decode';
import { AxiosError } from 'axios';
import { cookies } from 'next/dist/client/components/headers';

import { AXIOS_ERROR_400, AXIOS_ERROR_404 } from '@/utils/constants';
import { ErrorMappings } from '@/interfaces/ErrorMapping';
import { DecodedToken } from "./types"
import { IBank } from '@/interfaces';
import { IWallet } from '@/interfaces';
import api from '@/services/api';

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

export async function registerWallet(formData: FormData): Promise<string >{
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