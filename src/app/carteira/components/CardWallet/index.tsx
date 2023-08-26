import * as Dialog from "@radix-ui/react-dialog";
import { setCookie } from "nookies";
import { Trash } from "phosphor-react";
import { useState } from "react";

import { DeleteWallet } from "@/app/carteira/components/DeleteWallet";
import { ICardWallet, IContentCard } from "@/app/carteira/types";
import { Button, Modal } from "@/components";
import { THIRTY_DAY_COOKIE_LIFETIME } from "@/utils/constants";
import { UpdateWallet } from "../UpdateWallet";
import { ContentCard } from "./content-card-wallet";

export function CardWallet({
  walletId,
  bankName,
  accountType,
  description,
}: ICardWallet) {
  const contentCardData: IContentCard[] = [
    { titleContent: "Banco", textContent: bankName },
    { titleContent: "Saldo", textContent: "R$00,00" },
    { titleContent: "Tipo da conta", textContent: accountType },
    { titleContent: "Descrição", textContent: description },
  ];

  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  const saveWalletIdOnCookies = (): void => {
    setCookie(null, "@id_wallet", walletId, {
      maxAge: THIRTY_DAY_COOKIE_LIFETIME,
      path: "/",
    });
  };

  return (
    <div className="w-11/12 md:w-2/3 lg:w-2/5 sm:h-100 md:h-96 bg-gray-600 rounded-2xl max-w-screen-md py-5 px-5">
      <h2 className="text-xl md:text-2xl font-semibold text-white text-center mb-4">
        {bankName} - {accountType}
      </h2>
      {contentCardData.map((content) => (
        <ContentCard
          key={content.titleContent}
          titleContent={content.titleContent}
          textContent={content.textContent}
        />
      ))}
      <div className="w-full flex flex-col items-center mt-8 gap-4 min-[425px]:flex min-[425px]:flex-row min-[425px]:justify-center min-[425px]:gap-20 min-[425px]:mt-12">
        <Modal open={editModalOpen} onOpenChange={setEditModalOpen}>
          <div className="w-full flex justify-center">
            <Modal.Button className="rounded py-2 px-10 mb-5" asChild>
              <Button
                id={walletId}
                type="submit"
                className="py-2 px-9 w-4/5 min-[425px]:w-[125px] bg-green-500 rounded-[6px] "
                canceled={false}
                onClick={() => {
                  saveWalletIdOnCookies();
                  setEditModalOpen(true);
                }}
              >
                Editar
              </Button>
            </Modal.Button>
          </div>
          <Modal.Content>
            <div className="flex justify-start">
              <Dialog.Title className="text-lg md:text-xl">
                Editar Carteira
              </Dialog.Title>
            </div>
            <UpdateWallet setOpen={setEditModalOpen} />
          </Modal.Content>
        </Modal>

        <Modal open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
          <div className="w-full flex justify-center">
            <Modal.Button className="rounded py-2 px-10 mb-5" asChild>
              <Button
                id={walletId}
                type="submit"
                className="py-2 px-9 w-4/5 min-[425px]:w-[125px] bg-red-300 rounded-[6px] hover:bg-red-400"
                canceled={false}
                onClick={() => {
                  saveWalletIdOnCookies();
                  setDeleteModalOpen(true);
                }}
              >
                Excluir
              </Button>
            </Modal.Button>
          </div>
          <Modal.Content>
            <div className="flex items-center justify-center">
              <Dialog.Title className="text-lg md:text-xl">
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-red-300 flex justify-center items-center rounded-full">
                    <Trash size={40} />
                  </div>
                  <div className="flex items-center justify-center">
                    <h2>Deseja deletar esta carteira?</h2>
                  </div>
                </div>
              </Dialog.Title>
            </div>
            <DeleteWallet setOpen={setDeleteModalOpen} />
          </Modal.Content>
        </Modal>
      </div>
    </div>
  );
}
