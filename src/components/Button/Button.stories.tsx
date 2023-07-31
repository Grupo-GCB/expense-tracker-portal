import { StoryObj, Meta } from "@storybook/react";

import { Button, IButtonProps } from "./";

const meta: Meta<IButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
    },
  },
};

export default meta;

export const Default: StoryObj<IButtonProps> = {
  args: {
    children: "Experimentar!",
    size: "medium",
  },
};

export const Small: StoryObj<IButtonProps> = {
  args: {
    children: "Experimentar!",
    size: "small",
  },
};

export const Medium: StoryObj<IButtonProps> = {
  args: {
    children: "Experimentar!",
    size: "medium",
  },
};

export const Large: StoryObj<IButtonProps> = {
  args: {
    children: "Experimentar!",
    size: "large",
  },
};
