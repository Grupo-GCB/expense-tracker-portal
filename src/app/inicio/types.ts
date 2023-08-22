import { Dispatch, SetStateAction } from "react";

export interface IUseTransaction {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

