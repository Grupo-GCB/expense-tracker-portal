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
      walletName="Nubank"
      value="R$ 12.000,00"
      category="venda"
      date="13/04/2022"
    />
  </TableTransaction>
);
