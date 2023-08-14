import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { UserProfile } from '.';
import { IUserProfileProps } from '@/interfaces';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const defaultUser = {
  picture: 'https://e7.pngegg.com/pngimages/885/607/png-clipart-dynamics-365-computer-icons-user-profile-login-others-miscellaneous-angle.png',
  name: 'John Doe',
};

const meta: Meta<IUserProfileProps> = {
  title: 'MenuSideBar/Components/UserProfile',
  component: UserProfile,
  argTypes: {
    open: {
      defaultValue: false,
      type: 'boolean',
    },
    user: {
      defaultValue: defaultUser,
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const withUserProvider = (Component: any, user: any) => (
    <UserProvider user={user}>
      <Component />
    </UserProvider>
  );

export const Default: StoryObj<IUserProfileProps> = (args: any) => 
    withUserProvider(() => <UserProfile {...args} />, defaultUser)

Default.args = {
  open: false,
  user: defaultUser,
};
