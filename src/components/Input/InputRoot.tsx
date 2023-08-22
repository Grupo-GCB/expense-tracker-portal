import { HTMLAttributes } from 'react'

interface InputRootProps extends HTMLAttributes<HTMLInputElement> {
  placeholder: string
  maxLength: number
  listId?: string
  name: string
}

export function InputRoot({
  placeholder,
  maxLength,
  listId,
  name,
  ...spread
}: InputRootProps) {
  return (
    <input
      className="w-full text-white px-4 py-2 rounded-[6px] bg-gray-900 shadow-sm focus:outline-none focus:ring focus:ring-green-300 "
      placeholder={placeholder}
      list={listId}
      maxLength={maxLength}
      name={name}
      {...spread}
    />
  )
}
