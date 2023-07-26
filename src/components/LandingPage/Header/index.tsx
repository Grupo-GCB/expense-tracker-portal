import Image from "next/image";

import logo from "@/app/svg/logo.svg";

export function Header() {
  return (
    <header className="h-30 font-roboto font-semibold text-white flex justify-center bg-gray-300">
      <nav className="p-5">
        <div className="md:text-4xl flex">
          <Image className="h-11 " src={logo} alt="site principal" />
          <span className="h-11 pt-1">Expensive Tracker</span>
        </div>
      </nav>
    </header>
  );
}
