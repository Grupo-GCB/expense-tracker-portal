import { UserProfile } from '@auth0/nextjs-auth0/client'
import { useCallback, useEffect } from 'react'
import axios from 'axios'

interface IUser {
  user: UserProfile | undefined
}

export function Home({ user }: IUser) {
  const handleAccessToken = useCallback(async () => {
    const res = await axios.get<{ accessToken: string }>('api/accessTokenAuth')
    console.log(res.data.accessToken)
  }, [])

  useEffect(() => {
    handleAccessToken()
  }, [])

  if (!user) return null

  console.log(user)

  return (
    <div>
      Welcome {user.nickname}! <a href="/api/auth/logout">Logout</a>
    </div>
  )
}
