import { House, Scroll, Wallet } from 'phosphor-react'

export function MenuOptions() {
  return (
    <nav>
      <ul>
        <li className="flex flex-col items-center justify-center text-sm h-16 text-gray-100 cursor-pointer hover:bg-gray-900 rounded">
          <House color="white" className="w-8 h-8" />
          <span>Home</span>
        </li>
        <li className="flex flex-col items-center justify-center text-sm h-16 text-gray-100 cursor-pointer hover:bg-gray-900 rounded">
          <Scroll color="white" className="w-8 h-8" />
          <span>Resumo</span>
        </li>
        <li className="flex flex-col items-center justify-center text-sm h-16 text-gray-100 cursor-pointer hover:bg-gray-900 rounded">
          <Wallet color="white" className="w-8 h-8" />
          <span>Carteiras</span>
        </li>
      </ul>
    </nav>
  )
}
