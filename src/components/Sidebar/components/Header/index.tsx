import Image from "next/image";

import bullIcon from "@/app/assets/svg/bullIcon.svg";
import gcbLogo from "@/app/assets/svg/gcbLogo.svg";
import { IMenu } from "@/interfaces";

export function Header({ open }: IMenu) {
  return (
    <div
      className={`${
        open ? "justify-start" : "justify-center"
      } flex items-center`}
    >
      <Image
        src={open ? gcbLogo : bullIcon}
        alt={open ? "Logo do Grupo GCB." : "Ícone do touro do Grupo GCB."}
      />
    </div>
  );
}
