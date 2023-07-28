import { useCallback, useEffect } from 'react'
import axios from 'axios'

import { IUser } from '@/interfaces/User'
import { ISession } from '@/interfaces/Session'

export function Home({ user }: IUser) {
  const handleUserSession = useCallback(async () => {
    try {
      const res = await axios.get<{ userSession: ISession }>('/api/sessionAuth')
      const userIdToken = res.data.userSession.idToken
      const userAccessToken = res.data.userSession.accessToken
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
      Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
    </div>
  )
}
