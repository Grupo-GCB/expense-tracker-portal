import { Dispatch, SetStateAction } from "react";

export interface IRegisterWallet {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface DecodedToken {
  sub: string;
}