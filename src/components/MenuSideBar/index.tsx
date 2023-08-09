import Image from 'next/image'
import { useState } from 'react'

import logoGCB from '@/app/assets/svg/logo.svg'
import logoBull from '@/app/assets/svg/logoBull.svg'
import { Bell, Gear, House, Scroll, Wallet, XCircle } from 'phosphor-react'
import { IUser } from '@/interfaces'

export function MenuSideBar({ user }: IUser) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={` ${
        open ? 'w-80' : 'w-20'
      } h-full bg-gray-700 px-5 py-10 relative duration-300`}
    >
      <div
        className={`${
          open ? 'hidden' : 'flex'
        } items-center justify-center bg-gray-700 h-16 w-16 absolute cursor-pointer -right-14 top-9 rounded`}
        onClick={() => {
          setOpen(true)
        }}
      >
        T
      </div>

      <div className="flex flex-col justify-between h-screen">
        <div className="flex flex-col gap-32">
          <div className="flex items-center justify-between">
            <Image src={open ? logoGCB : logoBull} alt="Logo da GCB." />
            <XCircle
              color={'#9E9E9E'}
              className={` ${open ? 'flex' : 'hidden'} w-8 h-8 cursor-pointer`}
              onClick={() => setOpen(false)}
            />
          </div>

          <div>
            <nav>
              <ul>
                <li className="flex items-center h-16 text-gray-100 gap-4 cursor-pointer text-base p-4 hover:bg-gray-900 rounded">
                  <House color="white" className="w-8 h-8" />
                  <span
                    className={`${!open && 'hidden'} origin-left duration-200`}
                  >
                    Home
                  </span>
                </li>
                <li className="flex items-center h-16 text-gray-100 gap-4 cursor-pointer text-base p-4 hover:bg-gray-900 rounded">
                  <Scroll color="white" className="w-8 h-8" />
                  <span
                    className={`${!open && 'hidden'} origin-left duration-200`}
                  >
                    Resumo
                  </span>
                </li>
                <li className="flex items-center h-16 text-gray-100 gap-4 cursor-pointer text-base p-4 hover:bg-gray-900 rounded">
                  <Wallet color="white" className="w-8 h-8" />
                  <span
                    className={`${!open && 'hidden'} origin-left duration-200`}
                  >
                    Carteiras
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div>
          <div>
            <nav>
              <ul>
                <li className="flex items-center h-16 text-gray-100 gap-4 cursor-pointer text-base p-4 hover:bg-gray-900 rounded">
                  <Bell color="white" className="w-8 h-8" />
                  <span
                    className={`${!open && 'hidden'} origin-left duration-200`}
                  >
                    Notificações{' '}
                  </span>
                </li>
                <li className="flex items-center h-16 text-gray-100 gap-4 cursor-pointer text-base p-4 hover:bg-gray-900 rounded">
                  <Gear color="white" className="w-8 h-8" />
                  <span
                    className={`${!open && 'hidden'} origin-left duration-200`}
                  >
                    Configurações
                  </span>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center px-4 py-6 gap-4 h-20 bg-gray-900 rounded-xl">
            <Image
              src={logoBull}
              alt="Imagem do usuário."
              className="w-8 h-8 rounded-full"
            />
            <p
              className={`flex text-white text-base ${
                !open && 'hidden'
              } origin-left duration-200`}
            >
              {user?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
