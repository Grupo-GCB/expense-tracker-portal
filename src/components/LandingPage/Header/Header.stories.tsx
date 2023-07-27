import { Meta, StoryObj } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { Header } from "./index";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as Meta;

export const Desktop: StoryObj = {};

export const Mobile: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "iphone5",
    },
  },
};

export const Tablet: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "ipad",
    },
  },
};
