import axios from 'axios'
import { useCallback, useEffect } from 'react'
import nookies, { parseCookies, setCookie } from 'nookies'

import { ErrorPage } from '@/components'
import { IIdToken, ISession, IUser } from '@/interfaces'
import api from '@/services/api'
import { UNKNOWN_ERROR } from '@/utils/constants'

export function Home({ user }: IUser) {
  const getUserSession = async (): Promise<ISession | undefined> => {
    try {
      const { data } = await axios.get<{ userSession: ISession }>(
        '/api/sessionAuth',
      )
      return data.userSession
    } catch (error) {
      console.error(UNKNOWN_ERROR, error)
    }
  }

  async function sendIdToken({ idToken }: IIdToken) {
    try {
      await api.post('user/login', {
        token: idToken,
      })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error: ', error.message)
      } else {
        console.error(UNKNOWN_ERROR, error)
      }
    }
  }

  function saveUserIdTokenInCookies({ idToken }: IIdToken) {
    setCookie(null, 'userIdToken', idToken, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
  }

  const handleDestroyUserIdToken = () => {
    nookies.destroy(null, 'userIdToken', { path: '/' })
  }

  const handleUserSession = useCallback(async () => {
    try {
      const userSession = await getUserSession()

      if (userSession) {
        const { idToken } = userSession

        const lastUserIdToken = parseCookies().userIdToken
        if (idToken !== lastUserIdToken) {
          saveUserIdTokenInCookies({ idToken })
          sendIdToken({ idToken })
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
      <a href="/api/auth/logout" onClick={handleDestroyUserIdToken}>
        Logout
      </a>
    </div>
  )
}
