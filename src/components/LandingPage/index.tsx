import Image from 'next/image'

import { Header } from './Header'
import imgHome from '@/app/assets/img/imagem-site.png'

export default function LandingPage() {
  return (
    <main className="w-full min-h-screen bg-gray-300 font-roboto font-semibold text-white">
      <Header />
      <section className="w-full  flex justify-center flex-1 gap-16 pt-12  px-16 ">
        <div className="flex items-center w-2/5">
          <div className="w-full h-56 bg-gray-200 rounded-md p-3">
            <h1 className="text-xl text-center mt-2 px-6">
              Trilhe o caminho da estabilidade financeira
            </h1>
            <div className="w-full flex justify-center mt-10">
              <button className="w-64 items-self-center rounded-md bg-green-300 py-4  px-3">
                <a href="/api/auth/login" className="text-2xl">
                  Experimentar!
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <Image src={imgHome} alt="home do site" />
        </div>
      </section>
    </main>
  )
}
