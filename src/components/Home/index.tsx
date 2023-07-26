import { UserProfile } from '@auth0/nextjs-auth0/client'

interface IUser {
  user: UserProfile | undefined
}

export function Home({ user }: IUser) {
  if (!user) return null

  return (
    <div>
      Welcome {user.nickname}! <a href="/api/auth/logout">Logout</a>
    </div>
  )
}
