import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  testId?: string;
  size?: "small" | "medium" | "large" | "default";
}

const sizeVariant: Record<string, string> = {
  small: "py-2 px-4 text-sm",
  medium: "py-3 px-5",
  large: "py-4 px-8 text-xl",
  default: "",
};

function getVariant(size: string): string {
  return sizeVariant[size] || sizeVariant["default"];
}

export function Button({
  children,
  className,
  onClick,
  testId,
  size = "default",
}: IButtonProps) {
  return (
    <button
      data-testid={testId}
      className={twMerge(
        `hover:bg-green-300 text-white items-self-center rounded-md bg-green-500 font-bold ${getVariant(
          size
        )} `,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
