'use client'

import axios from 'axios'
import { useCallback, useEffect } from 'react'
import nookies, { parseCookies, setCookie } from 'nookies'

import { ErrorPage } from '@/components'
import {
  IToken,
  ISession,
  IUser,
  ISignInResponse,
  IUserSessionResponse,
} from '@/interfaces'
import api from '@/services/api'
import {
  AXIOS_ERROR,
  THIRTY_DAY_COOKIE_LIFETIME,
  UNKNOWN_ERROR,
} from '@/utils/constants'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'
import getUserSession from '@/services/userSession'

export default function Home() {
  const { user, error, isLoading } = useUser()
  
  async function sendToken({ token }: IToken): Promise<void> {
    try {
      await api.post<ISignInResponse>('user/login', {
        token,
      })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(AXIOS_ERROR, error.message)
      } else {
        console.error(UNKNOWN_ERROR, error)
      }
    }
  }

  function saveUserTokenInCookies({ token }: IToken): void {
    setCookie(null, '@user_token', token, {
      maxAge: THIRTY_DAY_COOKIE_LIFETIME,
      path: '/',
    })
  }

  const handleDestroyUserToken = (): void => {
    nookies.destroy(null, '@user_token', { path: '/' })
  }

  const handleUserSession = useCallback(async () => {
    try {
      const userSession = await getUserSession()

      if (userSession) {
        const { idToken } = userSession
        const token = idToken

        const lastUserToken = parseCookies().userToken
        if (token !== lastUserToken) {
          saveUserTokenInCookies({ token })
          sendToken({ token })
        }
      } else {
        throw new Error('Sessão do usuário não disponível.')
      }
    } catch (error) {
      console.error(UNKNOWN_ERROR, error)
    }
  }, [])

  useEffect(() => {
    handleUserSession()
  }, [handleUserSession])

  if (!user) {
    return (
      <ErrorPage
        errorMessage={
          'Erro ao encontrar um usuário! Volte para a página de login e tente novamente!'
        }
      />
    )
  }

  return (
    <div>
      Welcome {user.name}!{' '}
      <a href="/api/auth/logout" onClick={handleDestroyUserToken}>
        Logout
      </a>

    <button className="bg-red-400 p-2 text-red-200"> 
      <Link href="/carteira">Carteiras</Link>
    </button>
    </div>
  )
}
