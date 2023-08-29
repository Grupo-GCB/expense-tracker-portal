"use client";

import { useMemo } from "react";

import { useHome } from "@/app/inicio/hook";
import { ITransaction } from "@/interfaces";

export const useSummary = () => {
  const { states } = useHome();

  const isIncomeTransaction = (transaction: ITransaction): boolean => {
    return transaction.type === "Receita";
  };

  const summary = useMemo(() => {
    return states.transactions.reduce(
      (acc, transaction) => {
        const transactionPrice = parseFloat(transaction.value);

        acc.income += isIncomeTransaction(transaction) ? transactionPrice : 0;
        acc.outcome += isIncomeTransaction(transaction) ? 0 : transactionPrice;
        acc.total += transactionPrice;
        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      }
    );
  }, [states.transactions]);

  return summary;
};
