import { Dispatch, SetStateAction } from "react";

export interface IRegisterWallet {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface DecodedToken {
  sub: string;
}

export interface ICardWallet {
  walletId: string;
  bankName: string;
  accountType: string;
  description: string;
}

export interface IContentCard {
  titleContent: string;
  textContent: string;
}
