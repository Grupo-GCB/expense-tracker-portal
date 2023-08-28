import * as Dialog from "@radix-ui/react-dialog";
import { PencilLine, Trash } from "phosphor-react";
import { useState } from "react";

import { ButtonAction } from "@/app/inicio/components/ButtonAction";
import { DeleteTransaction } from "@/app/inicio/components/DeleteTransaction";
import { Modal } from "@/components";
import { UpdateTransaction } from "../UpdateTransaction";
import { TableTransactionColumn } from "./TableTrasactionColumn";
import { ITableTransaction } from "./types";

export function TableTransactionContent({
  id,
  description,
  value,
  type,
  category,
  walletName,
  date,
}: ITableTransaction) {
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [updateModalOpen, setUpdateModalOpen] = useState<boolean>(false);

  return (
    <tr className="text-white py-5">
      <td className="py-5 pl-8 w-96  bg-gray-700 ">{description}</td>
      <TableTransactionColumn>
        <span
          className={type === "Receita" ? "text-green-300" : "text-red-300"}
        >
          {value}
        </span>
      </TableTransactionColumn>
      <TableTransactionColumn>{walletName}</TableTransactionColumn>
      <TableTransactionColumn>{category}</TableTransactionColumn>
      <TableTransactionColumn>{date}</TableTransactionColumn>
      <TableTransactionColumn>
        <div className="flex gap-2">
          <Modal open={updateModalOpen} onOpenChange={setUpdateModalOpen}>
            <div className="flex justify-center">
              <Modal.Button className="rounded py-2 px-10 mb-5" asChild>
                <ButtonAction onClick={() => setUpdateModalOpen(true)}>
                  <PencilLine
                    size={25}
                    color="#40B9F7"
                    className="hover:cursor-pointer"
                  />{" "}
                </ButtonAction>
              </Modal.Button>
            </div>
            <Modal.Content>
              <div className="flex justify-start">
                <Dialog.Title className="text-lg md:text-xl">
                  Editar transação
                </Dialog.Title>
              </div>
              <UpdateTransaction
                setOpen={setUpdateModalOpen}
                idTransaction={id}
              />
            </Modal.Content>
          </Modal>

          <Modal open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
            <div className="flex justify-center">
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
                      <h2>Deseja deletar esta transação?</h2>
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
      </TableTransactionColumn>
    </tr>
  );
}
