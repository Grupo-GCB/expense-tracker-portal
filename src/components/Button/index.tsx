import React, { ButtonHTMLAttributes} from 'react'
import { twMerge } from 'tailwind-merge'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onClick?: () => void
  testId?: string
  disabled?: boolean
  canceled?:boolean
}

export function Button({
  children,
  className,
  onClick,
  testId,
  disabled = false,
  type,
  canceled = false
  
}: IButtonProps) {
  return (
    <button
      data-testid={testId}
      className={twMerge(
        ` ${
          disabled && 'bg-green-500 opacity-70 cursor-not-allowed'
        } text-white items-self-center rounded-md  font-bold  `,
        `${canceled? 'bg-red-300' : 'bg-green-500 hover:bg-green-300'}`,
        className,
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}
