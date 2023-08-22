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
import { TableTransaction } from "./components/TableTransaction";
import { TableTransactionContent } from "./components/TableTransaction/TableTransactionContent";

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

  const transaction = [
    {
      id: "1",
      decription: "Desenvolvimento de site",
      typeWallet: "Nubank",
      value: "R$ 12.000,00",
      type: "income",
      typeTransaction: "venda",
      date: "13/04/2022",
    },
    {
      id: "2",
      decription: "Hamburguer",
      typeWallet: "C6",
      value: "- R$ 59,00",
      type: "outcome",
      typeTransaction: "venda",
      date: "27/03/2022",
    },
    {
      id: "3",
      decription: "Hamburguer",
      typeWallet: "Santander",
      type: "outcome",
      value: "- R$ 59,00",
      typeTransaction: "venda",
      date: "27/03/2022",
    },
  ];

  return (
    <main className="w-full max-w-5xl mx-auto mt-4 mb-0 px-6 py-0 text-white">
      <TableTransaction>
        {transaction.map((item) => {
          return (
            <TableTransactionContent
              key={item.id}
              description={item.decription}
              type={item.type}
              typeWallet={item.typeWallet}
              valueTransaction={item.value}
              typeTransaction={item.typeTransaction}
              dateTransaction={item.date}
            />
          );
        })}
      </TableTransaction>
    </main>
  );
}
