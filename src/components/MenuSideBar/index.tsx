import Image from 'next/image'
import { useState } from 'react'

import logoGCB from '@/app/assets/svg/logo.svg'
import logoBull from '@/app/assets/svg/logoBull.svg'
import { XCircle } from 'phosphor-react'
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
      <div className="flex items-center justify-between">
        <Image src={open ? logoGCB : logoBull} alt="Logo da GCB." />
        <XCircle
          color={'#9E9E9E'}
          className={` ${open ? 'flex' : 'hidden'} w-8 h-8 cursor-pointer`}
          onClick={() => setOpen(false)}
        />
      </div>
    </div>
  )
}
