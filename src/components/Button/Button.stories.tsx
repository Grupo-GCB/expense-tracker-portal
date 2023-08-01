import { StoryObj, Meta } from "@storybook/react";

import { Button, IButtonProps } from "@/components/Button";

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
    className: "py-3 px-5",
    children: "Experimentar!",
  },
};

export const Small: StoryObj<IButtonProps> = {
  args: {
    className: "py-2 px-4 text-sm",
    children: "Experimentar!",
  },
};

export const Medium: StoryObj<IButtonProps> = {
  args: {
    className: "py-3 px-5",
    children: "Experimentar!",
  },
};

export const Large: StoryObj<IButtonProps> = {
  args: {
    className: "py-4 px-8 text-xl",
    children: "Experimentar!",
  },
};
