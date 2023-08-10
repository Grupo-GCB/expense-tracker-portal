import Image from 'next/image'

import logoBull from '@/app/assets/svg/logoBull.svg'
import logoGCB from '@/app/assets/svg/logo.svg'
import { IMenuProps } from '@/interfaces'

export function Header({open}: IMenuProps) {
  return (
    <div className="flex items-center justify-center">
      <Image src={open ? logoGCB: logoBull} alt="Logo da GCB." />
    </div>
  )
}
