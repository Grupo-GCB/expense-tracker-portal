'use client'

import { useUser } from '@auth0/nextjs-auth0/client'

import { Home, LandingPage, Loading, ErrorPage } from '@/components'

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
