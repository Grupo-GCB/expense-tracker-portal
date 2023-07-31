import type { Preview } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

import "../src/styles/tailwind.css";

export const customViewports = [
  {
    name: "laptop",
    styles: {
      width: "1440px",
      height: "871px",
    },
    type: "desktop",
  },
  {
    name: "desktop",
    styles: {
      width: "1024px",
      height: "800px",
    },
    type: "desktop",
  },
  {
    name: "tablet",
    styles: {
      width: "1024px",
      height: "768px",
    },
    type:"tablet"
  },
  {
    name: "mobile",
    styles: {
      width: "320px",
      height: "480px",
    },
    type:"mobile"
  },
];

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
      viewports: { ...MINIMAL_VIEWPORTS, ...customViewports },
    },
  },
};

export default preview;
