'use server'

import jwt_decode from 'jwt-decode';
import { AxiosError } from 'axios';

import { cookies } from 'next/dist/client/components/headers';
import { IBank } from '@/interfaces';
import { IWallet } from '@/interfaces/Wallet';
import api from '@/services/api';

interface DecodedToken {
  sub: string;
}

export async function getBanks() {
  const response = await api.get<IBank[]>('/bank/all');
  return response.data;
}

export async function handleRegisterWallet(formData: FormData) {
  const user_token = cookies().get('@user_token')!.value;

  
  const decodedToken: DecodedToken = jwt_decode(user_token)
  const sub = decodedToken.sub;

  try {
    const { data } = await api.post<IWallet>('/wallet', {
      account_type: formData.get('account_type') as string,
      description: formData.get('description') as string,
      bank_id: formData.get('bank_id') as string,
      user_id: sub as string,
    });
    return 'Registro da carteira feito com sucesso'
    
  } catch (error) {
    if (error instanceof AxiosError) {
      const axiosError = error as AxiosError
      if (axiosError.response) {
        const status = axiosError.response.status
        if (status === 400) {
          return'Erro: Requisição inválida'
        } else if (status === 404) {
          return'Erro: Recurso não encontrado'
        } else {
          return axiosError.message
        }
      } else {
        return axiosError.message
      }
    } 
    return 'Erro ao registrar a carteira'
  }
}
