import { Dispatch, SetStateAction } from "react";

export interface IUseWallet {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface DecodedToken {
  sub: string;
}

export interface ICardWallet{
  idWallet:string
  nameBank:string
  typeAccount:string
  description:string
}