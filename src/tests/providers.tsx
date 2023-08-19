import { UserProvider } from '@auth0/nextjs-auth0/client';
import { RenderOptions, render } from '@testing-library/react';
import { ReactElement } from 'react';

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const defaultUser = {
    picture:
      "https://e7.pngegg.com/pngimages/885/607/png-clipart-dynamics-365-computer-icons-user-profile-login-others-miscellaneous-angle.png",
    name: "John Doe",
  };

  return <UserProvider user={defaultUser}>{children}</UserProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render, AllTheProviders };
