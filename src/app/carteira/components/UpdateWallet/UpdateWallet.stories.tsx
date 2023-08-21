import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Meta, StoryObj } from "@storybook/react";

import { Modal } from "@/components";
import { UpdateWallet } from "./index";

export default {
  title: "Components/UpdateWallet",
  component: UpdateWallet,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center h-screen w-full bg-gray-600">
        <div className="flex items-center justify-center bg-gray-700 h-94 p-10 w-72">
          <Modal>{Story()}</Modal>
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as Meta;

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

export const Laptop: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "laptop",
    },
  },
};

export const LaptopLarge: StoryObj = {
  parameters: {
    viewport: {
      defaultViewport: "laptopLarge",
    },
  },
};
