import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Meta, StoryObj } from "@storybook/react";

import TransactionTypes from ".";

export default {
  title: "Inicio/Componentes/Register/TransactionTypes",
  component: TransactionTypes,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center h-screen w-full bg-gray-600">
        <div className="flex flex-col items-center justify-center bg-gray-800 h-98 p-10 w-full md:w-3/5 xl:w-3/5">
          {Story()}
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

export const Mobile: StoryObj = () => (
  <div className="flex gap-8">
    <TransactionTypes
      selectedOption=""
      value="Receita"
      handleOptionSelect={() => {}}
    />
    <TransactionTypes
      selectedOption="Despesa"
      value="Despesa"
      handleOptionSelect={() => {}}
    />
  </div>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};

export const Tablet: StoryObj = () => (
  <div className="flex gap-8">
    <TransactionTypes
      selectedOption="Receita"
      value="Receita"
      handleOptionSelect={() => {}}
    />
    <TransactionTypes
      selectedOption=""
      value="Despesa"
      handleOptionSelect={() => {}}
    />
  </div>
);

Tablet.parameters = {
  parameters: {
    viewport: {
      defaultViewport: "ipad",
    },
  },
};

export const Laptop: StoryObj = () => (
  <div className="flex gap-8">
    <TransactionTypes
      selectedOption=""
      value="Receita"
      handleOptionSelect={() => {}}
    />
    <TransactionTypes
      selectedOption="Despesa"
      value="Despesa"
      handleOptionSelect={() => {}}
    />
  </div>
);

Laptop.parameters = {
  parameters: {
    viewport: {
      defaultViewport: "laptop",
    },
  },
};

export const LaptopLarge: StoryObj = () => (
  <div className="flex gap-8">
    <TransactionTypes
      selectedOption="Receita"
      value="Receita"
      handleOptionSelect={() => {}}
    />
    <TransactionTypes
      selectedOption=""
      value="Despesa"
      handleOptionSelect={() => {}}
    />
  </div>
);

LaptopLarge.parameters = {
  parameters: {
    viewport: {
      defaultViewport: "laptopLarge",
    },
  },
};
