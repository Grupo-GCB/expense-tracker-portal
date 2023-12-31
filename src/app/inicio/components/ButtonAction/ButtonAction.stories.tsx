import { Meta, StoryObj } from "@storybook/react";
import { PencilLine, Trash } from "phosphor-react";

import { ButtonAction, IButtonAction } from ".";

export default {
  title: "components/ButtonAction",
  component: ButtonAction,
} as Meta<IButtonAction>;

const EditIcon = () => {
  return (
    <PencilLine size={25} color="#40B9F7" className="hover:cursor-pointer" />
  );
};

const DeleteIcon = () => {
  return <Trash size={25} color="#F75A68" className="hover:cursor-pointer" />;
};

export const EditButton: StoryObj<IButtonAction> = {
  args: {
    children: EditIcon(),
  },
};

export const DeleteButton: StoryObj<IButtonAction> = {
  args: {
    children: DeleteIcon(),
  },
};
