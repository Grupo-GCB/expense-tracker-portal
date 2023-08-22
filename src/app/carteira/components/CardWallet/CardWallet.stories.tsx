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
    walletId: "896adb01-efe8-4730-a9e4-b95720beaced",
    bankName: "C6",
    accountType: "Conta-Corrente",
    description: "Carteira para viagens",
  },
  parameters: {
    viewport: {
      defaultViewport: "ipad",
    },
  },
};

export const Laptop: StoryObj = {
  args: {
    idWallet: "896adb01-efe8-4730-a9e4-b95720beaced",
    nameBank: "C6",
    typeAccount: "Conta-Corrente",
    description: "Carteira para viagens",
  },
  parameters: {
    viewport: {
      defaultViewport: "laptop",
    },
  },
};

export const LaptopLarge: StoryObj = {
  args: {
    idWallet: "896adb01-efe8-4730-a9e4-b95720beaced",
    nameBank: "C6",
    typeAccount: "Conta-Corrente",
    description: "Carteira para viagens",
  },
  parameters: {
    viewport: {
      defaultViewport: "laptopLarge",
    },
  },
};
