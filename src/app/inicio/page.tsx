"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { parseCookies, setCookie } from "nookies";
import { useCallback, useEffect } from "react";

import { ErrorPage } from "@/components";
import { ISignInResponse, IToken } from "@/interfaces";
import api from "@/services/api";
import getUserSession from "@/services/userSession";
import {
  AXIOS_ERROR,
  THIRTY_DAY_COOKIE_LIFETIME,
  UNKNOWN_ERROR,
} from "@/utils/constants";

export default function Home() {
  const { user } = useUser();

  async function sendToken({ token }: IToken): Promise<void> {
    try {
      await api.post<ISignInResponse>("user/login", {
        token,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) console.error(AXIOS_ERROR, error.message);
      else console.error(UNKNOWN_ERROR, error);
    }
  }

  function saveUserTokenInCookies({ token }: IToken): void {
    setCookie(null, "@user_token", token, {
      maxAge: THIRTY_DAY_COOKIE_LIFETIME,
      path: "/",
    });
  }

  const handleUserSession = useCallback(async () => {
    try {
      const userSession = await getUserSession();

      if (userSession) {
        const { idToken } = userSession;
        const token = idToken;

        const lastUserToken = parseCookies().userToken;
        if (token !== lastUserToken) {
          saveUserTokenInCookies({ token });
          sendToken({ token });
        }
      } else {
        throw new Error("Sessão do usuário não disponível.");
      }
    } catch (error) {
      console.error(UNKNOWN_ERROR, error);
    }
  }, []);

  useEffect(() => {
    handleUserSession();
  }, [handleUserSession]);

  if (!user) {
    return (
      <ErrorPage
        errorMessage={
          "Erro ao encontrar um usuário! Volte para a página de login e tente novamente!"
        }
      />
    );
  }

  return <div className="lg:ml-28">Welcome {user.name}!</div>;
}
