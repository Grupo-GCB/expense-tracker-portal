import nookies from 'nookies'
import { List, SignOut, X } from 'phosphor-react'
import { useState } from 'react'

import { IUserProfileProps } from '@/interfaces'
import { Header, MenuOptions, MenuUser, UserProfile } from './components'


export function MenuSideBar({ user }: IUserProfileProps ) {
  const [open, setOpen] = useState(false)

  const handleDestroyUserToken = (): void => {
    nookies.destroy(null, '@user_token', { path: '/' })
  }

  return (
    <div>
      <div className='lg:hidden fixed cursor-pointer right-5 top-5'>
        <List color="#323238" className="w-8 h-8" onClick={() => setOpen(!open)}/>
      </div>
      <div className={`fixed lg:w-28 ${open ? 'sm:left-0 sm:w-full sm:px-12' : 'sm:-left-full lg:left-0'} min-h-screen bg-gray-700 px-5 py-10 top-0 flex flex-col gap-16 duration-300`}>
        <div className={`${open ? 'flex' : 'hidden'} absolute cursor-pointer right-5 top-5`}>
          <X color="white" className="w-8 h-8" onClick={() => setOpen(!open)}/>
        </div>
        <div className="flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-32">
            <Header open={open}/>
            <MenuOptions open={open}/>
          </div>

          <div className="flex flex-col gap-8">
            <MenuUser open={open}/>
            <UserProfile user={user} open={open}/>
          </div>
        </div>

        <button onClick={handleDestroyUserToken}>
            <a href="/api/auth/logout" className={`flex items-center ${open ? 'justify-start': 'justify-center'}`}>
              <SignOut color="white" className="w-8 h-8" />
            </a>
        </button>
      </div>
    </div>
  )
}
