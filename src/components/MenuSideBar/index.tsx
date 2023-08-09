import { IUser } from '@/interfaces'
import Image from 'next/image'

import logoGCB from '@/app/assets/svg/logo.svg'
import logoBull from '@/app/assets/svg/logoBull.svg'
import { XCircle } from 'phosphor-react'

export function MenuSideBar({ user }: IUser) {
  return (
    <div className="bg-gray-700 h-screen w-80 px-5 py-10">
      <div className="flex items-center justify-between">
        <Image src={logoGCB} alt="Logo da GCB." />
        <XCircle color={'#9E9E9E'} className="w-8 h-8" />
      </div>
    </div>
  )
}
