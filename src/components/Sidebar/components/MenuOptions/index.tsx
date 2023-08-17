import { House, Scroll, Wallet } from "phosphor-react";

import { IMenu } from "@/interfaces";
import { useRouter } from "next/navigation";

export function MenuOptions({ open }: IMenu) {
  const router = useRouter()
  
  const options = [
    {
      id: 1,
      icon: <House color="white" className="w-8 h-8" data-testid="homeIcon" />,
      title: "Home",
    },
    {
      id: 2,
      icon: <Scroll color="white" className="w-8 h-8" data-testid="summaryIcon" />,
      title: "Resumo",
    },
    {
      id: 3,
      icon: <Wallet color="white" className="w-8 h-8" data-testid="walletsIcon" onClick={() => router.push("carteira")}/>,
      title: "Carteiras",
    },
  ];

  return (
    <nav>
      <ul className="flex flex-col gap-8">
        {options.map((option) => {
          return (
            <li
              key={option.id}
              className={`flex ${
                open
                  ? "flex-row text-2xl gap-4 p-4 w-48"
                  : "flex-col text-sm justify-center"
              } items-center h-16 text-gray-100 cursor-pointer hover:bg-gray-900 rounded`}
            >
              {option.icon}
              <span>{option.title}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
