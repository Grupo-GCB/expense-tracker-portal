import { HTMLAttributes } from 'react'

interface InputRootProps extends HTMLAttributes<HTMLInputElement> {
  placeholder: string
  maxlength: number
  listId?: string
  name: string
}

export function InputRoot({
  placeholder,
  maxlength,
  listId,
  name,
  ...spread
}: InputRootProps) {
  return (
    <input
      className="w-full text-white px-4 py-2 rounded-[6px] bg-gray-900 shadow-sm focus:outline-none focus:ring focus:ring-green-300 "
      placeholder={placeholder}
      list={listId}
      maxLength={maxlength}
      name={name}
      {...spread}
    />
  )
}
