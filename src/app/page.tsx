'use client'

import { useUser } from '@auth0/nextjs-auth0/client'

import { ErrorPage, Home, LandingPage, Loading } from '@/components'

export default function Page() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <Loading />

  if (error) return <ErrorPage errorMessage={error.message} />

  if (user) {
    return (
      <>
        <Home user={user} />
      </>
    )
  }

  return <LandingPage />
}
