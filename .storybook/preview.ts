import type { Preview } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

import "../src/styles/tailwind.css";

export const laptopLarge = {
  name: "laptopLarge",
  styles: {
    width: "1440px",
    height: "871px",
  },
  type: "desktop",
};

export const laptop = {
  name: "laptop",
  styles: {
    width: "1024px",
    height: "800px",
  },
  type: "desktop",
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: { MINIMAL_VIEWPORTS, laptopLarge, laptop },
    },
  },
};

export default preview;
