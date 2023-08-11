import Image from 'next/image'

import { IMenuProps, IUser, IUserProfileProps } from '@/interfaces'

import logoBull from '@/app/assets/svg/logoBull.svg'

export function UserProfile({open, user}: IUserProfileProps) {
  return (
    <div className={`flex ${open ? 'flex-row h-20 gap-4 text-2xl w-56': 'flex-col h-32 justify-center w-full'} items-center px-4 py-6 gap-2 bg-gray-900 rounded-xl`}>
      <Image
        src={logoBull}
        alt="Imagem do usuário."
        className="w-12 h-12 bg-gray-500 rounded-full"
      />
      <p className="flex text-white text-base">{user?.name}</p>
    </div>
  )
}
