'use client'

import { useUser } from '@auth0/nextjs-auth0/client'

import { Home, LandingPage } from '@/components'
import { Loading } from '@/components/Loading'

export default function Page() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <Loading />

  if (error)
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="flex items-center justify-center p-8 rounded text-black bg-zinc-100">
          {error.message}
        </div>
      </div>
    )

  if (user) {
    return (
      <>
        <Home user={user} />
      </>
    )
  }

  return <LandingPage />
}
