'use client'

import { useUser } from '@auth0/nextjs-auth0/client'

import { Home, LandingPage } from '@/components'
import { Loading } from '@/components/Loading'
import { Error } from '@/components/Error'

export default function Page() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <Loading />

  if (error) return <Error errorMessage={error.message} />

  if (user) {
    return (
      <>
        <Home user={user} />
        <Error errorMessage={'poha'} />
      </>
    )
  }

  return <LandingPage />
}
