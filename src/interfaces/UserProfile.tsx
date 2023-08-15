import { UserProfile } from "@auth0/nextjs-auth0/client";

import { IUser } from ".";

export interface IUserProfile{
    user?: IUser | UserProfile
    open?: boolean
    picture?: string
}