import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

import { IUserProfile } from "@/interfaces";

export function UserProfile({ open }: IUserProfile) {
  const { user } = useUser();

  const isPictureValid =
    typeof user?.picture === "string" && user.picture.trim() !== "";

  return (
    <div
      className={`flex ${
        open
          ? "flex-row h-20 gap-4 text-2xl w-56"
          : "flex-col h-32 justify-center w-full"
      } items-center px-4 py-6 gap-2 bg-gray-900 rounded-xl`}
    >
      {user && isPictureValid && typeof user.picture === "string" && (
        <Image
          src={user.picture}
          width={24}
          height={24}
          alt="Imagem do usuário."
          className="w-12 h-12 bg-gray-500 rounded-full"
        />
      )}
      <p className="flex text-white text-base">{user?.name}</p>
    </div>
  );
}
