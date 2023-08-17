'use client'

import React ,{ useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'
import { RegisterWallet } from './components/RegisterWallet/register-wallet.component'

export function Carteira() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-slate-500 h-screen">
      <header className="w-full h-36 bg-gray-900 flex items-center justify-center">
        <h1 className="text-white font-semibold text-lg d md:text-xl">Carteiras</h1>
      </header>

      <main className="w-full flex justify-center ">
        <Modal open={open} onOpenChange={setOpen}>
          <Modal.Button className="rounded py-2 px-4 " asChild>
            <Button canceled={false}>cadastrar nova carteira</Button>
          </Modal.Button>
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
export default Carteira

