import React from "react";

export interface IButtonAction {
  children: React.ReactNode;
}

export function ButtonAction({ children }: IButtonAction) {
  return (
    <button className="focus:outline-green-300 focus:outline-2 ">
      {children}
    </button>
  );
}
