'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { CircleNotch } from 'phosphor-react'
import { useState } from 'react'
import { toast } from 'react-toastify'

import { Header } from '@/app/(home)/components/Header'
import previewPortal from '@/app/assets/img/portal.png'
import { Button, ErrorPage, Loading } from '@/components'
 

export function Introducao() {
  const router = useRouter()
  const { user, error, isLoading } = useUser()
 
  const [isRedirectingToLogin, setIsRedirectingToLogin] =
    useState<boolean>(false)

  async function handleRedirectToLoginPage() {
    setIsRedirectingToLogin(true)
    try {
      router.push('/api/auth/login')
      await new Promise((resolve) => setTimeout(resolve, 3000))
    } catch {
      toast.error('Ocorreu um erro durante o redirecionamento.')
    } finally {
      setIsRedirectingToLogin(false)
    }
  }

  if (isLoading) return <Loading />

  if (error) return <ErrorPage errorMessage={error.message} />

  if (user) router.push("inicio")

  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-gray-300 font-semibold text-white xl:-mt-1">
        <section className="w-full min-h-screen flex-column align-middle lg:flex  lg:justify-center  lg:gap-16 lg:pt-12 lg:px-16 pb-12">
          <div className="pt-6 lg:flex lg:items-center lg:w-2/5">
            <div className="lg:w-full md:h-56 rounded-md md:p-3 lg:bg-gray-200 xl:h-65">
              <h1 className="text-center text-base sm:text-lg px-3 md:text-xl md:mt-2 md:px-6 lg:text-large xl:text-2xl">
                Trilhe o caminho da estabilidade financeira
              </h1>
              <div className="w-full flex justify-center  mt-4 md:mt-10">
                <Button
                  testId="login-page-button"
                  className="py-2 px-4 md:w-64 md:items-self-center rounded-md bg-green-500 md:py-4  md:px-3 text-sm md:text-2xl"
                  onClick={handleRedirectToLoginPage}
                  disabled={isRedirectingToLogin}
                  canceled={false}
                >
                  {isRedirectingToLogin ? (
                    <CircleNotch
                      className="animate-spin w-full justify-center"
                      data-testid="loading-icon"
                    />
                  ) : (
                    <span>Experimentar!</span>
                  )}
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full mt-5 flex justify-center items-center ">
            <Image
              loading="eager"
              className="w-4/5 lg:w-5/5 "
              src={previewPortal}
              aria-label="preview-of-home"
              alt="home do site"
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default Introducao