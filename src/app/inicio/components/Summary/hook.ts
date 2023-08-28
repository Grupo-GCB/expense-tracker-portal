"use client";

import { useMemo } from "react";
import { useHome } from "@/app/inicio/hook";

export const useSummary = () => {
  const { states } = useHome();

  const summary = useMemo(() => {
    console.log(states.transactions);
    return states.transactions.reduce(
      (acc, transaction) => {
        const transactionPrice = parseFloat(transaction.value);

        if (transaction.type === "Receita") {
          acc.income += transactionPrice;
          acc.total += transactionPrice;
        } else {
          acc.outcome += transactionPrice;
          acc.total += transactionPrice;
        }

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
