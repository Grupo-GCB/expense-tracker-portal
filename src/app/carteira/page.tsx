"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";

import { Button, Modal } from "@/components";
import { IWallet } from "@/interfaces";
import { CardWallet } from "./components/CardWallet";
import { useShowAllWallet } from "./components/CardWallet/hook";
import { RegisterWallet } from "./components/RegisterWallet";

const itemsVisibles = {
  768: {
    items: 1,
  },
  769: {
    items: 1,
    itemsFit: "contain",
  },
  1440: {
    items: 1,
    itemsFit: "contain",
  },
};

export const createCardItems = (walletList: IWallet[]) =>
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

export function Carteira() {
  const [open, setOpen] = useState<boolean>(false);
  const { states } = useShowAllWallet();

  return (
    <section className="bg-gray-800 max-h-fit ">
      <header className="w-full h-24 bg-gray-900 flex items-center justify-center lg:pl-28">
        <h1 className="text-white font-semibold text-lg  md:text-xl">
          Carteiras
        </h1>
      </header>
      <main className="w-full lg:pl-28 ">
        <section className="w-full mt-6">
          <AliceCarousel
            items={createCardItems(states.walletList)}
            responsive={itemsVisibles}
            disableButtonsControls
          />
        </section>
        <Modal open={open} onOpenChange={setOpen}>
          <div className="w-full flex justify-center">
            <Modal.Button className="rounded py-2 px-10 mb-5" asChild>
              <Button canceled={false}>cadastrar nova carteira</Button>
            </Modal.Button>
          </div>
          <Modal.Content>
            <div className="flex justify-start">
              <Dialog.Title className="text-lg md:text-xl">
                Registrar Carteira
              </Dialog.Title>
            </div>
            <RegisterWallet setOpen={setOpen} />
          </Modal.Content>
        </Modal>
      </main>
    </section>
  );
}
export default Carteira;
