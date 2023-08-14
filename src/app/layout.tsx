import { UserProvider } from '@auth0/nextjs-auth0/client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/tailwind.css'
import { MenuSideBar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Expense Tracker',
  description: 'Expense tracker portal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <UserProvider>
        <body className={inter.className}>
          <MenuSideBar />
          {children}</body>
      </UserProvider>
    </html>
  )
}
