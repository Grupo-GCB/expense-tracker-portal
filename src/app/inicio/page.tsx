"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { parseCookies, setCookie } from "nookies";
import { CircleNotch } from "phosphor-react";
import { useCallback, useEffect } from "react";

import { ErrorPage } from "@/components";
import { ISignInResponse, IToken, ITransaction } from "@/interfaces";
import api from "@/services/api";
import getUserSession from "@/services/userSession";
import {
  AXIOS_ERROR,
  THIRTY_DAY_COOKIE_LIFETIME,
  UNKNOWN_ERROR,
} from "@/utils/constants";
import { dateFormatter, priceFormatter } from "@/utils/formatter";

import Header from "./components/Header";
import { TableTransaction } from "./components/TableTransaction";
import { TableTransactionContent } from "./components/TableTransaction/TableTransactionContent";
import { useHome } from "./hook";

export default function Home() {
  const { states } = useHome();

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

  return (
    <>
      <div className="lg:ml-28">
        <Header />
      </div>
      <main className="w-full  max-w-screen-xl mx-auto sm:justify-center sm:px-2  sm:mt-8 text-white">
        {states.transactions.length === 0 && (
          <div className="w-full flex justify-center">
            <p className="text-red-300">Nenhuma transação foi encontrada.</p>
          </div>
        )}
        {states.isLoading && (
          <CircleNotch
            className="animate-spin w-full justify-center"
            data-testid="loading-icon"
          />
        )}
        <div className="sm:overflow-x-scroll min-[936px]:overflow-x-hidden lg:ml-[7rem]">
          <TableTransaction>
            {states.transactions.map((item: ITransaction) => {
              return (
                <TableTransactionContent
                  key={item.id}
                  id={item.id}
                  description={item.description}
                  type={item.type}
                  walletName={item.bank_name}
                  value={priceFormatter.format(Number(item.value))}
                  category={item.category}
                  date={dateFormatter.format(new Date(item.date))}
                />
              );
            })}
          </TableTransaction>
        </div>
      </main>
    </>
  );
}
