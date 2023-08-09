import Image from 'next/image'

import { IUser } from '@/interfaces'

import logoBull from '@/app/assets/svg/logoBull.svg'

export function UserProfile({ user }: IUser) {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-6 gap-2 h-32 bg-gray-900 rounded-xl">
      <Image
        src={logoBull}
        alt="Imagem do usuário."
        className="w-12 h-12 bg-gray-500 rounded-full"
      />
      <p className="flex text-white text-base">{user?.name}</p>
    </div>
  )
}
