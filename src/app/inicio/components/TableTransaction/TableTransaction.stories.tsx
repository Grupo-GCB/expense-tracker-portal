import { Meta } from "@storybook/react";

import { TableTransaction } from ".";
import { TableTransactionContent } from "./TableTransactionContent";

export default {
  title: "Components/TableTransaction",
  component: TableTransaction,
} as Meta;

export const tableTransaction = () => (
  <TableTransaction>
    <TableTransactionContent
      id=""
      description="Desenvolvimento de site"
      type="income"
      typeWallet="Nubank"
      valueTransaction="R$ 12.000,00"
      category="venda"
      dateTransaction="13/04/2022"
    />
  </TableTransaction>
);
