import Image from 'next/image'
import { useState } from 'react'

import logoGCB from '@/app/assets/svg/logo.svg'
import logoBull from '@/app/assets/svg/logoBull.svg'
import { House, Scroll, Wallet, XCircle } from 'phosphor-react'
import { IUser } from '@/interfaces'

export function MenuSideBar({ user }: IUser) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={` ${
        open ? 'w-80' : 'w-20'
      } h-screen bg-gray-700 px-5 py-10 relative duration-300`}
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
      <div className="flex flex-col gap-36">
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
    </div>
  )
}
