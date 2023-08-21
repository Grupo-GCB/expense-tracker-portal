import { UserProvider } from "@auth0/nextjs-auth0/client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

import { Sidebar } from "@/components";
import "@/styles/tailwind.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Expense tracker portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <UserProvider>
        <body className="bg-gray-800">
          <Sidebar />
          {children}
          <ToastContainer />
        </body>
      </UserProvider>
    </html>
  );
}
