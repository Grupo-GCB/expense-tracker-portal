import React from "react";

interface ButtonAction {
  children: React.ReactNode;
}

export function ButtonAction({ children }: ButtonAction) {
  return (
    <button className="focus:outline-green-300 focus:outline-2 ">
      {children}
    </button>
  );
}
