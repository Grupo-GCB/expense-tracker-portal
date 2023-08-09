import { Bell, Gear } from 'phosphor-react'

export function MenuUser() {
  return (
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
  )
}
