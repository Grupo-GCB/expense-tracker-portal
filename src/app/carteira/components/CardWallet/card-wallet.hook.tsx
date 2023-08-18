"use client";

import { IWallet } from "@/interfaces";
import { useEffect, useState } from "react";
import { getAllWallets } from "../../action";
import { CardWallet } from "./card-wallet.component";

export const useShowAllWallet = () => {
  const [walletList, setWalletList] = useState<IWallet[]>([]);

  useEffect(() => {
    async function fetchAllWallets(): Promise<void> {
      try {
        const reponse: IWallet[] = await getAllWallets();
        setWalletList(reponse);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllWallets();
  }, [getAllWallets]);

  const createCardItems = () =>
    walletList.map((wallet) => (
      <div className="w-full flex justify-center">
        <CardWallet
          key={wallet.id}
          idWallet={wallet.id}
          nameBank={wallet.bank.name}
          typeAccount={wallet.account_type}
          description={wallet.description}
        />
      </div>
    ));

  return {
    states: {
      walletList,
      setWalletList,
    },
    actions: {
      createCardItems
    },
  };
};
