import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Meta, StoryObj } from "@storybook/react";

import { ICardWallet } from "@/app/carteira/types";
import { CardWallet } from ".";

export default {
  title: "Components/CardWallet",
  component: CardWallet,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as Meta<ICardWallet>;

export const Default: StoryObj<ICardWallet> = {
  args: {
    idWallet: "12",
    nameBank: "Banco storybook",
    typeAccount: "teste",
    description: "Card de teste para storybook",
  },
  parameters: {
    viewport: {
      defaultViewport: "ipad",
    },
  },
};

export const Laptop: StoryObj = {
  args: {
    idWallet: "12",
    nameBank: "Banco storybook",
    typeAccount: "teste",
    description: "Card de teste para storybook",
  },
  parameters: {
    viewport: {
      defaultViewport: "laptop",
    },
  },
};

export const LaptopLarge: StoryObj = {
  args: {
    idWallet: "12",
    nameBank: "Banco storybook",
    typeAccount: "teste",
    description: "Card de teste para storybook",
  },
  parameters: {
    viewport: {
      defaultViewport: "laptopLarge",
    },
  },
};
