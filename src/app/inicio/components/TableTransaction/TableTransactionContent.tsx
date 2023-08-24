import { Modal } from "@/components";
import * as Dialog from "@radix-ui/react-dialog";
import { PencilLine, Trash } from "phosphor-react";
import { useState } from "react";
import { ButtonAction } from "../ButtonAction";
import { DeleteTransaction } from "../DeleteTransaction";

interface ITableTransaction {
  id: string;
  description: string;
  valueTransaction: string;
  type: string;
  category: string;
  typeWallet: string;
  dateTransaction: string;
}

export function TableTransactionContent({
  id,
  description,
  valueTransaction,
  type,
  category,
  typeWallet,
  dateTransaction,
}: ITableTransaction) {
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  return (
    <tr className="text-white">
      <td className=" px-5 py-8 bg-gray-700">{description}</td>
      <td className=" px-5 py-8 bg-gray-700">
        <span
          className={type === "Receita" ? "text-green-300" : "text-red-300"}
        >
          {valueTransaction}
        </span>
      </td>
      <td className=" px-5 py-8 bg-gray-700">{typeWallet}</td>
      <td className=" px-5 py-8 bg-gray-700">{category}</td>
      <td className=" px-5 py-8 bg-gray-700">{dateTransaction}</td>
      <td className=" px-5 py-8 bg-gray-700">
        <div className="flex gap-2">
          <ButtonAction onClick={() => {}}>
            <PencilLine
              size={25}
              color="#40B9F7"
              className="hover:cursor-pointer"
            />{" "}
          </ButtonAction>
          <Modal open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
            <div className="w-full flex justify-center">
              <Modal.Button className="rounded py-2 px-10 mb-5" asChild>
                <ButtonAction onClick={() => setDeleteModalOpen(true)}>
                  <Trash
                    size={25}
                    color="#F75A68"
                    className="hover:cursor-pointer"
                  />
                </ButtonAction>
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
                      <h2>Deseja deletar esta Transação?</h2>
                    </div>
                  </div>
                </Dialog.Title>
              </div>
              <DeleteTransaction
                setOpen={setDeleteModalOpen}
                idTransaction={id}
              />
            </Modal.Content>
          </Modal>
        </div>
      </td>
    </tr>
  );
}