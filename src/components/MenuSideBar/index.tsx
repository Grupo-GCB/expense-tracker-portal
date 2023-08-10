import nookies from 'nookies'
import { List, SignOut, X } from 'phosphor-react'
import { useState } from 'react'

import { IUser, IUserProfileProps } from '@/interfaces'
import { Header, MenuOptions, MenuUser, UserProfile } from './components'


export function MenuSideBar({ user }: IUserProfileProps) {
  const [open, setOpen] = useState(false)

  const handleDestroyUserToken = (): void => {
    nookies.destroy(null, '@user_token', { path: '/' })
  }

  return (
    <div>
      <div className='lg:hidden absolute cursor-pointer right-5 top-5'>
        <List color="#323238" className="w-8 h-8" onClick={() => setOpen(!open)}/>
      </div>
      <div className={`lg:static lg:w-28 sm:fixed ${open ? 'left-0 w-full' : '-left-full'} h-full bg-gray-700 px-5 py-10 top-0 flex flex-col gap-16 duration-300`}>
        <div className='lg:hidden absolute cursor-pointer right-5 top-5'>
          <X color="white" className="w-8 h-8" onClick={() => setOpen(!open)}/>
        </div>
        <div className="flex flex-col justify-between h-screen">
          <div className="flex flex-col gap-32">
            <Header open={open}/>
            <MenuOptions open={open}/>
          </div>

          <div className="flex flex-col items-center gap-8">
            <MenuUser open={open}/>
            <UserProfile user={user} open={open}/>
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
    </div>
  )
}
