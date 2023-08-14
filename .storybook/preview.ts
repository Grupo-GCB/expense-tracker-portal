import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";
import { RouterContext } from "next/dist/shared/lib/router-context";

import "../src/styles/tailwind.css";

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
    locale: "en" 
  },
};

export const mobile = {
  name: "mobile",
  styles: {
    width: "320px",
    height: "568px",
  },
  type: "mobile",
};

export const tablet = {
  name: "tablet",
  styles: {
    width: "768px",
    height: "871px",
  },
  type: "tablet",
};

export const laptop = {
  name: "laptop",
  styles: {
    width: "1024px",
    height: "800px",
  },
  type: "desktop",
};

export const laptopLarge = {
  name: "laptopLarge",
  styles: {
    width: "1440px",
    height: "871px",
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
      viewports: { MINIMAL_VIEWPORTS, mobile, tablet, laptop, laptopLarge},
    },
  },
};

export default preview;
