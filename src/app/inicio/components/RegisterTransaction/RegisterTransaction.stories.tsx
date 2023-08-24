import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Meta, StoryObj } from "@storybook/react";

import { Modal } from "@/components";
import { RegisterTransaction } from ".";

export default {
  title: "Inicio/Componentes/Register",
  component: RegisterTransaction,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center h-screen w-full bg-gray-600">
        <div className="flex items-center justify-center bg-gray-800 h-98 p-10 w-full md:w-2/5 xl:w-2/5">
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
