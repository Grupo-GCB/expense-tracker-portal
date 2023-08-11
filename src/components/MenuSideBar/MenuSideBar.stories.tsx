import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { MenuSideBar } from '.';

const defaultUser = {
  picture: 'https://e7.pngegg.com/pngimages/885/607/png-clipart-dynamics-365-computer-icons-user-profile-login-others-miscellaneous-angle.png',
  name: 'John Doe'
}

const meta: Meta = {
  title: 'MenuSideBar',
  component: MenuSideBar,
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
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  }
};

export default meta;

export const Mobile: StoryObj = (args: any) => (
  <UserProvider>
    <MenuSideBar {...args} />
  </UserProvider>
);

Mobile.args = {
  user: defaultUser,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone5',
  },
};

export const Tablet: StoryObj = (args: any) => (
  <UserProvider>
    <MenuSideBar {...args} />
  </UserProvider>
);

Tablet.args = {
  user: {
    picture: 'https://example.com/user-picture.jpg',
    name: 'John Doe',
  },
};

Tablet.parameters = {
  viewport: {
    defaultViewport: 'ipad',
  },
};

export const Laptop: StoryObj = (args: any) => (
  <UserProvider>
    <MenuSideBar {...args} />
  </UserProvider>
);

Laptop.args = {
  user: {
    picture: 'https://example.com/user-picture.jpg',
    name: 'John Doe',
  },
};

Laptop.parameters = {
  viewport: {
    defaultViewport: 'laptop',
  },
};

export const LaptopLarge: StoryObj = (args: any) => (
  <UserProvider>
    <MenuSideBar {...args} />
  </UserProvider>
);

LaptopLarge.args = {
  user: {
    picture: 'https://example.com/user-picture.jpg',
    name: 'John Doe',
  },
};

LaptopLarge.parameters = {
  viewport: {
    defaultViewport: 'laptopLarge',
  },
};
