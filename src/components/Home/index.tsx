import { UserProfile } from '@auth0/nextjs-auth0/client'
import { useCallback, useEffect } from 'react'
import axios from 'axios'

interface IUser {
  user: UserProfile | undefined
}

interface ISession {
  user: UserProfile | undefined
  accessToken: string
  accessTokenScope: string
  accessTokenExpiresAt: number
  idToken: string
  token_type: string
}

export function Home({ user }: IUser) {
  const handleUserSession = useCallback(async () => {
    try {
      const res = await axios.get<{ userSession: ISession }>('/api/sessionAuth')
      const userIdToken = res.data.userSession.idToken
      const userAccessToken = res.data.userSession.accessToken
      console.log(userIdToken)
      console.log(userAccessToken)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.message)
      } else {
        console.error('Unknown error:', error)
      }
    }
  }, [])

  useEffect(() => {
    handleUserSession()
  }, [])

  if (!user) return null

  return (
    <div>
      Welcome {user.nickname}! <a href="/api/auth/logout">Logout</a>
    </div>
  )
}
