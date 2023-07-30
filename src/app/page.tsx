'use client'

import { useUser } from '@auth0/nextjs-auth0/client'

import { Home, LandingPage } from '@/components'
import { Loading } from '@/components/Loading'

export default function Page() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <Loading />

  if (error) return <div>{error.message}</div>

  if (user) {
    return (
      <>
        <Home user={user} />
      </>
    )
  }

  return <LandingPage />
}
