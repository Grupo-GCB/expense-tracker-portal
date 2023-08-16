import { Meta, StoryObj } from "@storybook/react";

import { Header } from ".";
import { IMenu } from "@/interfaces";

const meta: Meta<IMenu> = {
  title: "MenuSideBar/Components/Header",
  component: Header,
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
