import Image from 'next/image'

import logoBull from '@/app/assets/svg/logoBull.svg'
import { Bell, Gear } from 'phosphor-react'
import { IUser } from '@/interfaces'
import { Header, MenuOptions, MenuUser } from './components'

export function MenuSideBar({ user }: IUser) {
  return (
    <div className=" w-28 h-full bg-gray-700 px-5 py-10 relative duration-300">
      <div className="flex flex-col justify-between h-screen">
        <div className="flex flex-col gap-32">
          <Header />
          <MenuOptions />
        </div>

        <div className="flex flex-col items-center gap-8">
          <MenuUser />

          <div className="flex flex-col justify-center items-center px-4 py-6 gap-2 h-32 bg-gray-900 rounded-xl">
            <Image
              src={logoBull}
              alt="Imagem do usuário."
              className="w-12 h-12 bg-gray-500 rounded-full"
            />
            <p className="flex text-white text-base">{user?.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
