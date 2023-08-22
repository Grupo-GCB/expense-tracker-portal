import { PencilLine, Trash } from "phosphor-react";

interface ITableTransaction {
  description: string;
  valueTransaction: string;
  type: string;
  typeTransaction: string;
  typeWallet: string;
  dateTransaction: string;
}

export function TableTransactionContent({
  description,
  valueTransaction,
  type,
  typeTransaction,
  typeWallet,
  dateTransaction,
}: ITableTransaction) {
  return (
    <tr className="text-white">
      <td className=" px-5 py-8 bg-gray-700">{description}</td>
      <td className=" px-5 py-8 bg-gray-700">
        <span className={type === "income" ? "text-green-300" : "text-red-300"}>
          {valueTransaction}
        </span>
      </td>
      <td className=" px-5 py-8 bg-gray-700">{typeWallet}</td>
      <td className=" px-5 py-8 bg-gray-700">{typeTransaction}</td>
      <td className=" px-5 py-8 bg-gray-700">{dateTransaction}</td>
      <td className=" px-5 py-8 bg-gray-700">
        <div className="flex gap-2">
          <button className="focus:outline-green-300 focus:outline-2 ">
            <PencilLine
              size={25}
              color="#40B9F7"
              className="hover:cursor-pointer"
            />{" "}
          </button>
          <button className="focus:outline-green-300 focus:outline-2 ">
            <Trash size={25} color="#F75A68" className="hover:cursor-pointer" />
          </button>
        </div>
      </td>
    </tr>
  );
}
