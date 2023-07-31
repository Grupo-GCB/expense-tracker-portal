"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

import { Home, LandingPage } from "../components/";

export default function Page() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Carregando...</div>;

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        <Home user={user} />
      </>
    );
  }

  return <LandingPage />;
}
