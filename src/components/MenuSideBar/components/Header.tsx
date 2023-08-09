import Image from 'next/image'

import logoBull from '@/app/assets/svg/logoBull.svg'

export function Header() {
  return (
    <div className="flex items-center justify-center">
      <Image src={logoBull} alt="Logo da GCB." />
    </div>
  )
}
