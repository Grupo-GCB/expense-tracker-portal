import { UserProfile } from '@auth0/nextjs-auth0/client'

export interface ISession {
  user: UserProfile | undefined
  accessToken: string
  accessTokenScope: string
  accessTokenExpiresAt: number
  idToken: string
  token_type: string
}
