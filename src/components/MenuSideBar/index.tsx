import nookies from 'nookies'
import { SignOut } from 'phosphor-react'

import { IUser } from '@/interfaces'
import { Header, MenuOptions, MenuUser, UserProfile } from './components'

export function MenuSideBar({ user }: IUser) {
  const handleDestroyUserToken = (): void => {
    nookies.destroy(null, '@user_token', { path: '/' })
  }

  return (
    <div className="flex flex-col gap-16 w-28 h-full bg-gray-700 px-5 py-10 relative duration-300">
      <div className="flex flex-col justify-between h-screen">
        <div className="flex flex-col gap-32">
          <Header />
          <MenuOptions />
        </div>

        <div className="flex flex-col items-center gap-8">
          <MenuUser />
          <UserProfile user={user} />
        </div>
      </div>

      <button
        onClick={handleDestroyUserToken}
        className="flex items-center justify-center"
      >
        <a href="/api/auth/logout">
          <SignOut color="white" className="w-8 h-8" />
        </a>
      </button>
    </div>
  )
}
