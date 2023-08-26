import React, { HTMLAttributes } from "react";

export interface IButtonAction extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
}

export function ButtonAction({ children, onClick }: IButtonAction) {
  return (
    <button
      className="focus:outline-green-300 focus:outline-2 "
      onClick={onClick}
    >
      {children}
    </button>
  );
}
