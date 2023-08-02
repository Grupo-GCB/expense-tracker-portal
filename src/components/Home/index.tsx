import axios from 'axios'
import { useCallback, useEffect } from 'react'

import { ErrorPage } from '@/components'
import { ISession, IUser } from '@/interfaces'

export function Home({ user }: IUser) {
  const getUserSession = async (): Promise<ISession | undefined> => {
    try {
      const res = await axios.get<{ userSession: ISession }>('/api/sessionAuth')
      return res.data.userSession
    } catch (error) {
      console.error('Erro desconhecido:  ', error)
    }
  }

  const handleUserSession = useCallback(async () => {
    try {
      const userSession = await getUserSession()

      if (userSession) {
        const { idToken, accessToken } = userSession
      } else {
        throw new Error('Sessão do usuário não disponível.')
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error: ', error.message)
      } else {
        console.error('Erro desconhecido: ', error)
      }
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
      Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
    </div>
  )
}
