import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;

}

export function Button({ children, className }: IButtonProps) {
  return (
    <button className={twMerge("", className)}>
      {children}
    </button>
  );
}
