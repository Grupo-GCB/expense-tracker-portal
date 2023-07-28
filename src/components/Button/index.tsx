import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ children, className, onClick }: IButtonProps) {
  return (
    <button className={twMerge("", className)} onClick={onClick}>
      {children}
    </button>
  );
}
