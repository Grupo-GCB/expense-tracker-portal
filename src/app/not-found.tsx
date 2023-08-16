"use client";

import { CircleNotch, Plugs } from "phosphor-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "@/components";

export default function NotFound() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);

  async function handleRedirectUser(): Promise<void> {
    setIsRedirecting(true);
    try {
      router.push("/");
      await new Promise((resolve) => setTimeout(resolve, 3000));
    } catch {
      toast.error("Ocorreu um erro durante o redirecionamento.");
    } finally {
      setIsRedirecting(false);
    }
  }

  return (
    <main className="absolute flex flex-col min-h-screen items-center justify-center p-5 w-full bg-white z-10">
      <section className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Página não encontrada!
                </h1>
                <p className="my-2 text-gray-800">
                  Desculpe por isso! Volte para a página principal!
                </p>
                <Button
                  className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
                  onClick={handleRedirectUser}
                  disabled={isRedirecting}
                >
                  {isRedirecting ? (
                    <CircleNotch
                      className="animate-spin w-full justify-center"
                      data-testid="loading-icon"
                    />
                  ) : (
                    <span>Voltar!</span>
                  )}
                </Button>
              </div>
            </div>
            <figure>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="Imagem 404."/>
            </figure>
          </div>
        </div>
        <div>
          <Plugs size={400} color={"lightgreen"} />
        </div>
      </section>
    </main>
  );
}
