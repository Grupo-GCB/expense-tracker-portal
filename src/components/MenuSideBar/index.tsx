import Image from 'next/image'

import logoBull from '@/app/assets/svg/logoBull.svg'
import { Bell, Gear } from 'phosphor-react'
import { IUser } from '@/interfaces'
import { Header, MenuOptions } from './components'

export function MenuSideBar({ user }: IUser) {
  return (
    <div className=" w-28 h-full bg-gray-700 px-5 py-10 relative duration-300">
      <div className="flex flex-col justify-between h-screen">
        <div className="flex flex-col gap-32">
          <Header />
          <MenuOptions />
        </div>

        <div className="flex flex-col items-center gap-8">
          <nav>
            <ul>
              <li className="flex flex-col items-center justify-center text-sm h-16 text-gray-100 cursor-pointer hover:bg-gray-900 w-16 rounded">
                <Bell color="white" className="w-8 h-8" />
              </li>
              <li className="flex flex-col items-center justify-center text-sm h-16 text-gray-100 cursor-pointer hover:bg-gray-900 rounded">
                <Gear color="white" className="w-8 h-8" />
              </li>
            </ul>
          </nav>

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
