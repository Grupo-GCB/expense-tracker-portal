'use client'

import React ,{ Dispatch, SetStateAction, useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CircleNotch } from 'phosphor-react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { getBanks, handleRegisterWallet } from '@/app/carteira/action'
import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'
import { FormModal } from '@/components/Modal/FormModal'
import { CustomSelect, IOptions } from '@/components/Select'
import { accountTypes } from '@/utils/constants'


interface IRegisterWallet {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function Carteira() {
  let [open, setOpen] = useState(false);

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

export function RegisterWallet({ setOpen }: IRegisterWallet) {
  const [bankList, setBankList] = useState<IOptions[]>([]);
  const [isSavingDataForms, setIsSavingDataForms] = useState<boolean>(false);

  const handleSaveForm = () => {
    setTimeout(() => {
      setIsSavingDataForms(true);
    }, 200);

    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  useEffect(() => {
    async function fetchBanks() {
      try {
        const banks = await getBanks();
        const formattedOptions = banks.map((bank) => ({
          value: bank.id,
          label: bank.name,
        }));
        setBankList(formattedOptions);
        toast.success('sucesso')
      } catch (error) {
        toast.error(`Erro ao buscar os bancos:${error}`);
      }
    }
    fetchBanks();
  }, []);

  const registerWallet = async (values : FormData) => {
    await handleRegisterWallet(values).then((res) => {
        toast.success(res)
    }).catch((err) => {
      toast.error(err)
    })
  }
  
  return ( 
    <FormModal action={registerWallet}>
      <CustomSelect options={accountTypes} placeholder="Tipo da conta" name="account_type" />
      <CustomSelect options={bankList} placeholder="Banco" name="bank_id" />
      <textarea
        name="description"
        id="description"
        cols={30}
        rows={3}
        maxLength={32}
        placeholder="Descrição"
        className="mb-3 md:mb-10 bg-gray-900 pl-4 pt-4 rounded ou focus:outline-none focus:ring focus:ring-green-300 resize-none"
      ></textarea>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:w-full md:justify-center">
        <Button
          type="submit"
          className="py-2 px-4 md:py-4 md:px-6 bg-green-500 w-full md:w-full rounded-[6px]"
          onClick={handleSaveForm}
          disabled={isSavingDataForms}
          canceled={false}
        >
          {isSavingDataForms ? (
            <CircleNotch
              className="animate-spin w-full justify-center"
              data-testid="loading-icon"
            />
          ) : (
            <span>Confirmar!</span>
          )}
        </Button>
        <Dialog.Close asChild>
          <Button
            className="py-2 px-4 md:py-4 md:px-6 w-full md:w-full rounded-[6px]"
            canceled
          >
            Cancelar
          </Button>
        </Dialog.Close>
      </div>
    </FormModal>
  );
}
