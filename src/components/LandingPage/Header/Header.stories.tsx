import { Meta, StoryObj } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { Header } from "./";

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

export const Laptop: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "laptop",
    },
  },
};

export const Desktop: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export const Tablet: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const Mobile: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
};
