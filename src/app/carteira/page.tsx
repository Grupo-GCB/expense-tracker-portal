"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { Button, Modal } from "@/components";
import { CardWallet } from "./components/CardWallet/card-wallet.component";
import { RegisterWallet } from "./components/RegisterWallet/register-wallet.component";

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

const infoCard = [
  {
    id: "c3463f8d-c75f-4210-aed0-1fcb81044dc5",
    account_type: "Dinheiro",
    description: "teste",
    created_at: "2023-08-17T22:40:02.184Z",
    updated_at: "2023-08-17T22:40:02.184Z",
    deleted_at: null,
  },
  {
    account_type: "Investimento",
    description: "Teste",
    updated_at: "2023-08-18T07:23:32.537Z",
    deleted_at: null,
    id: "efd95476-b32e-4597-aedc-903e43bc6b43",
    created_at: "2023-08-18T07:23:32.537Z",
  },
  {
    account_type: "Conta-Corrente",
    description: "Minha conta secundáriadfverget",
    updated_at: "2023-08-18T07:24:16.284Z",
    deleted_at: null,
    id: "0e19a67c-416c-4cb1-8323-06e6a0c3f555",
    created_at: "2023-08-18T07:24:16.284Z",
  },
];

const createCardItems = () =>
  infoCard.map((info) => (
    <div className="w-full flex justify-center">
      <CardWallet
        key={info.id}
        idWallet={info.id}
        nameBank="Nubank"
        typeAccount={info.account_type}
        description={info.description}
      />
    </div>
  ));

export function Carteira() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <header className="w-full h-24 bg-gray-900 flex items-center justify-center lg:pl-28">
        <h1 className="text-white font-semibold text-lg  md:text-xl">
          Carteiras
        </h1>
      </header>
      <section className="bg-gray-800 h-screen max-h-fit flex items-center">
        <main className="w-full lg:pl-28">
          <section className="w-full py-6">
            <AliceCarousel
              items={createCardItems()}
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
    </>
  );
}
export default Carteira;
