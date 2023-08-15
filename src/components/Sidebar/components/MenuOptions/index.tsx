import { House, Scroll, Wallet } from "phosphor-react";

import { IMenuProps } from "@/interfaces";

export function MenuOptions({ open }: IMenuProps) {
  return (
    <nav>
      <ul className="flex flex-col gap-8">
        <li
          className={`flex ${
            open
              ? "flex-row text-2xl gap-4 p-4 w-48"
              : "flex-col text-sm justify-center"
          } items-center h-16 text-gray-100 cursor-pointer hover:bg-gray-900 rounded`}
        >
          <House color="white" className="w-8 h-8" data-testid="homeIcon" />
          <span>Home</span>
        </li>
        <li
          className={`flex ${
            open
              ? "flex-row text-2xl gap-4 p-4 w-48"
              : "flex-col text-sm justify-center"
          } items-center  h-16 text-gray-100 cursor-pointer hover:bg-gray-900 rounded`}
        >
          <Scroll color="white" className="w-8 h-8" data-testid="resumoIcon" />
          <span>Resumo</span>
        </li>
        <li
          className={`flex ${
            open
              ? "flex-row text-2xl gap-4 p-4 w-48"
              : "flex-col text-sm justify-center"
          } items-center  h-16 text-gray-100 cursor-pointer hover:bg-gray-900 rounded`}
        >
          <Wallet
            color="white"
            className="w-8 h-8"
            data-testid="carteirasIcon"
          />
          <span>Carteiras</span>
        </li>
      </ul>
    </nav>
  );
}
