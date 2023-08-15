import { Bell, Gear } from "phosphor-react";

import { IMenu } from "@/interfaces";

export function UserMenu({ open }: IMenu) {
  const options = [
    {
      id: 1,
      icon: (
        <Bell
          color="white"
          className="w-8 h-8"
          data-testid="notificationsIcon"
        />
      ),
      title: "Notificações",
    },
    {
      id: 1,
      icon: (
        <Gear
          color="white"
          className="w-8 h-8"
          data-testid="configurationsIcon"
        />
      ),
      title: "Configurações",
    },
  ];

  return (
    <nav>
      <ul>
        {options.map((option) => {
          return (
            <li
              key={option.id}
              className={`flex ${
                open
                  ? "flex-row text-2xl gap-4 w-60"
                  : "flex-col text-sm justify-center"
              } p-4 items-center h-16 text-gray-100 cursor-pointer hover:bg-gray-900 rounded`}
            >
              {option.icon}
              {open && <span>{option.title}</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
