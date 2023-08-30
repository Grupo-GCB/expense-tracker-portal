import { useEffect, useState, Dispatch, SetStateAction } from "react";

import { useShowAllWallet } from "@/app/carteira/components/CardWallet/hook";

export interface IWithoutWallet {
  setWithoutWalletOpen: Dispatch<SetStateAction<boolean>>;
}

export const useWithoutWallet = () => {
  const { walletStates } = useShowAllWallet();
  const [withoutWalletOpen, setWithoutWalletOpen] = useState<boolean>(false);

  function verifyIfWalletsExist(): boolean {
    if (walletStates.walletList.length === 0) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    const delay = 1000;

    const timeoutId = setTimeout(() => {
      setWithoutWalletOpen(verifyIfWalletsExist());
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [walletStates.walletList]);

  return {
    stateWithoutWallet: {
      withoutWalletOpen,
      setWithoutWalletOpen,
    },
  };
};
