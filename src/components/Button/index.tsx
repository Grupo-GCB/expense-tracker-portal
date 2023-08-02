import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onClick?: () => void
  testId?: string
  disabled?: boolean
}

export function Button({
  children,
  className,
  onClick,
  testId,
  disabled = false,
  ...rest
}: IButtonProps) {
  return (
    <button
      data-testid={testId}
      className={twMerge(
        ` ${
          disabled
            ? 'bg-green-500 opacity-70 cursor-not-allowed'
            : 'bg-green-500 hover:bg-green-300'
        } text-white items-self-center rounded-md  font-bold  `,
        className,
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
