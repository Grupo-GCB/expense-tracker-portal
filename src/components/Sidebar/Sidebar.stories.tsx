import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { Sidebar } from ".";

const defaultUser = {
  picture:
    "https://e7.pngegg.com/pngimages/885/607/png-clipart-dynamics-365-computer-icons-user-profile-login-others-miscellaneous-angle.png",
  name: "John Doe",
};

const meta: Meta = {
  title: "MenuSideBar",
  component: Sidebar,
  argTypes: {
    open: {
      defaultValue: false,
      type: "boolean",
    },
    user: {
      defaultValue: defaultUser,
    },
  },
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;

const withUserProvider = (Component: any, user: any) => (
  <UserProvider user={user}>
    <Component />
  </UserProvider>
);

export const Mobile: StoryObj = (args: any) =>
  withUserProvider(() => <Sidebar {...args} />, defaultUser);

Mobile.args = {
  open: false,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};

export const Tablet: StoryObj = (args: any) =>
  withUserProvider(() => <Sidebar {...args} />, defaultUser);

Tablet.args = {
  open: false,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};

export const Laptop: StoryObj = (args: any) =>
  withUserProvider(() => <Sidebar {...args} />, defaultUser);

Laptop.args = {
  open: false,
};

Laptop.parameters = {
  viewport: {
    defaultViewport: "laptop",
  },
};

export const LaptopLarge: StoryObj = (args: any) =>
  withUserProvider(() => <Sidebar {...args} />, defaultUser);

LaptopLarge.args = {
  open: false,
};

LaptopLarge.parameters = {
  viewport: {
    defaultViewport: "laptopLarge",
  },
};
