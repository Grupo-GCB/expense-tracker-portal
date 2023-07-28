import { StoryObj, Meta } from "@storybook/react";

import { Button, IButtonProps } from ".";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<IButtonProps>;

export const Hover: StoryObj<IButtonProps> = {
  args: {
    className:
      "items-self-center rounded-md bg-green-300 py-3  px-5 text-white font-bold",
    children: "Experimentar!",
  },
};

export const Small: StoryObj<IButtonProps> = {
  args: {
    className:
      "items-self-center rounded-md bg-green-500 py-2  px-4 text-white font-bold text-sm ",
    children: "Experimentar!",
  },
};

export const Medium: StoryObj<IButtonProps> = {
  args: {
    className:
      "items-self-center rounded-md bg-green-500 py-3  px-5 text-white font-bold",
    children: "Experimentar!",
  },
};

export const Big: StoryObj<IButtonProps> = {
  args: {
    className:
      "items-self-center rounded-md bg-green-500 py-4  px-8 text-xl text-white font-bold",
    children: "Experimentar!",
  },
};

export const Link: StoryObj<IButtonProps> = {
  args: {
    className:
      "items-self-center rounded-md bg-green-500 py-3 px-5 text-white font-bold",
    children: <a className="text-sm">Experimentar!</a>,
  },
};
