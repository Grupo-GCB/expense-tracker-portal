'use client'

import nookies from 'nookies'
import { List, SignOut, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'

import { Header, MenuOptions, MenuUser, UserProfile } from './components'


export function MenuSideBar() {
  const [open, setOpen] = useState(false)
  const {user} = useUser()

  const handleDestroyUserToken = (): void => {
    nookies.destroy(null, '@user_token', { path: '/' })
  }

  const handleMenuResize = (): void => {
    if (window.innerWidth >= 1224) {
      setOpen(false);
    }
  }

  useEffect(() => {
    handleMenuResize()

    window.addEventListener('resize', handleMenuResize);
    return () => {
      window.removeEventListener('resize', handleMenuResize);
    };
  }, [handleMenuResize]);

  return (
    <div className={`${user ? 'flex' : 'hidden'} fixed lg:w-28 ${open ? 'sm:left-0 sm:w-full sm:px-12' : 'sm:-left-full lg:left-0'} min-h-screen max-h-screen bg-gray-700 px-5 py-10 top-0 flex flex-col gap-16 duration-300 overflow-y-scroll scrollbar-thin scrollbar-zinc-950 scrollbar-thumb-800`} data-testid='menuNav'>
      <div className={`${open ? 'hidden' : 'flex lg:hidden'} fixed cursor-pointer right-5 top-5`}>
        <List color="#f2f2f2" className="w-8 h-8" onClick={() => setOpen(!open)} data-testid='menuHamburguer'/>
      </div>

      <div className={`${open ? 'flex' : 'hidden'} absolute cursor-pointer right-5 top-5`}>
        <X color="white" className="w-8 h-8" onClick={() => setOpen(!open)} data-testid='closeX'/>
      </div>

      <div className="flex flex-col justify-between gap-8">
        <div className="flex flex-col gap-32">
          <Header open={open} data-testid='header'/>
          <MenuOptions open={open} data-testid='menuOptions'/>
        </div>

        <div className="flex flex-col gap-8">
          <MenuUser open={open} data-testid='menuUser'/>
          <UserProfile open={open} data-testid='userProfile'/>
        </div>  
      </div>

      <button onClick={handleDestroyUserToken}>
          <a href="/api/auth/logout" className={`flex items-center ${open ? 'justify-start': 'justify-center'}`}>
            <SignOut color="white" className="w-8 h-8" data-testid='singOut'/>
          </a>
      </button>
    </div>
  )
}
