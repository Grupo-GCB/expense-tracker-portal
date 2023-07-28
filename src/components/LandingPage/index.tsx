import Image from "next/image";

import { Header } from "./Header";
import imgHome from "../../app/assets/img/imagem-site.png";
import { Button } from "../Button";

export function LandingPage() {
  return (
    <>
      <Header/>
      <main className="w-full min-h-screen bg-gray-300 font-roboto font-semibold text-white xl:-mt-1">
        <section className="w-full min-h-screen flex-column align-middle lg:flex  lg:justify-center  lg:gap-16 lg:pt-12  lg:px-16 pb-12">
          <div className="pt-6 lg:flex lg:items-center lg:w-2/5">
            <div className="lg:w-full md:h-56 rounded-md md:p-3 lg:bg-gray-200 xl:h-65">
              <h1 className="text-center text-base text-lg px-3 md:text-xl md:mt-2 md:px-6 lg:text-large xl:text-2xl">
                Trilhe o caminho da estabilidade financeira
              </h1>
              <div className="w-full flex justify-center  mt-4 md:mt-10">
                <Button className="py-2 px-4  hover:bg-green-300 md:w-64 md:items-self-center rounded-md bg-green-500 md:py-4  md:px-3">
                  <a href="/api/auth/login" className="text-sm md:text-2xl ">
                    Experimentar!
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full mt-5 flex justify-center items-center ">
            <Image
              loading="eager"
              className="w-4/5 lg:w-5/5 "
              src={imgHome}
              alt="home do site"
            />
          </div>
        </section>
      </main>
    </>
  );
}
