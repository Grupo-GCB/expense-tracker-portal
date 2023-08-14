'use client'

import { useUser } from '@auth0/nextjs-auth0/client'

import { ErrorPage, Home, Loading } from '@/components'
import Introducao from './Introducao/page'

export default function Page() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <Loading />

  if (error) return <ErrorPage errorMessage={error.message} />

  if (user) {
    return (
      <div>
        <Home user={user} />
      </div>
    )
  }

  return <Introducao/>
}
