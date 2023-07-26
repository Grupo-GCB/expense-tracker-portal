'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import LandingPage from '../LandingPage'

export default function Home() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    console.log(user)
    return (
      <div>
        Welcome {user.nickname}! <a href="/api/auth/logout">Logout</a>
      </div>
    )
  }

  return <LandingPage />
}
