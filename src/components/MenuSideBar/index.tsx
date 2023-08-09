import nookies from 'nookies'

import { IUser } from '@/interfaces'
import { Header, MenuOptions, MenuUser, UserProfile } from './components'

export function MenuSideBar({ user }: IUser) {
  const handleDestroyUserToken = (): void => {
    nookies.destroy(null, '@user_token', { path: '/' })
  }

  return (
    <div className=" w-28 h-full bg-gray-700 px-5 py-10 relative duration-300">
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
    </div>
  )
}
