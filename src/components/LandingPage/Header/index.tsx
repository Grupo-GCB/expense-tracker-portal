import Image from "next/image";

import logo from "@/app/assets/svg/logo.svg";

export function Header() {
  return (
    <header className="h-30 font-roboto font-semibold text-white flex justify-center bg-gray-300">
      <nav className="p-5">
        <div className="sm:flex sm:flex-col  md:flex md:flex-row md:text-4xl">
          <Image className="h-11" src={logo} alt="Logo do Grupo GCB" />
          <span className="h-11 flex items-center justify-center ">
            Expensive Tracker
          </span>
        </div>
      </nav>
    </header>
  );
}
