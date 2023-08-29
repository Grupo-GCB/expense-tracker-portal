"use client";

import { useMemo } from "react";

import { useHome } from "@/app/inicio/hook";
import { ISummary, ITransaction } from "@/interfaces";

export const useSummary = () => {
  const { states } = useHome();

  const isIncomeTransaction = (transaction: ITransaction): boolean => {
    return transaction.type === "Receita";
  };

  const calculateSummary = (transaction: ITransaction[]): ISummary => {
    return transaction.reduce(
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
  };

  const summary = useMemo(() => {
    return calculateSummary(states.transactions);
  }, [states.transactions]);

  return summary;
};
