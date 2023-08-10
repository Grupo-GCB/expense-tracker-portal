import { Bell, Gear } from 'phosphor-react'

import { IMenuProps } from '@/interfaces'

export function MenuUser({open}: IMenuProps) {
  return (
    <nav>
      <ul>
        <li className={`flex ${open ? 'flex-row text-2xl gap-4' : 'flex-col text-sm justify-center'} p-4 items-center h-16 text-gray-100 cursor-pointer hover:bg-gray-900 rounded`}>
          <Bell color="white" className="w-8 h-8" />
          {open &&(
            <span>Notificações</span>
          )}
        </li>
        <li className={`flex ${open ? 'flex-row text-2xl gap-4' : 'flex-col text-sm justify-center'} p-4 items-center h-16 text-gray-100 cursor-pointer hover:bg-gray-900 rounded`}>
          <Gear color="white" className="w-8 h-8" />
          {open &&(
            <span>Configurações</span>
          )}
        </li>
      </ul>
    </nav>
  )
}
