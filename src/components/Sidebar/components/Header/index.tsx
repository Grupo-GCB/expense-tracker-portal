import Image from "next/image";

import logoBull from "@/app/assets/svg/logoBull.svg";
import logoGCB from "@/app/assets/svg/logo.svg";
import { IMenuProps } from "@/interfaces";

export function Header({ open }: IMenuProps) {
  return (
    <div
      className={`${
        open ? "justify-start" : "justify-center"
      } flex items-center`}
    >
      <Image
        src={open ? logoGCB : logoBull}
        alt={open ? "Logo da GCB." : "Metade da cabeça do touro da GCB."}
      />
    </div>
  );
}
