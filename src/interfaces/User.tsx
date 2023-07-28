import { UserProfile } from '@auth0/nextjs-auth0/client'

export interface IUser {
  user: UserProfile | undefined
  name: string
  given_name: string
  family_name: string
}
