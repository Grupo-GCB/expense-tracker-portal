import { Meta, StoryObj } from "@storybook/react";

import { UserMenu } from ".";
import { IMenu } from "@/interfaces";

const meta: Meta<IMenu> = {
  title: "MenuSideBar/Components/UserMenu",
  component: UserMenu,
  argTypes: {
    open: {
      defaultValue: false,
      type: "boolean",
    },
  },
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "iphone5",
    },
  },
};

export default meta;

export const Default: StoryObj<IMenu> = {
  args: {
    open: false,
  },
};
