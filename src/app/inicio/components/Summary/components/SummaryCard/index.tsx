import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { useSummary } from "@/app/inicio/components/Summary/hook";
import { priceFormatter } from "@/utils";

export default function SummaryCard() {
  const summary = useSummary();

  function ChangeTotalBackground() {
    if (summary.total >= 0) return "bg-green-700";
    else return "bg-red-700";
  }

  const summaryOptions = [
    {
      id: 1,
      title: "Entradas",
      icon: <ArrowCircleUp color="#00b37e" className="sm2:flex lg:w-8 lg:h-8 md:w-6 md:h-6 sm:hidden sm2:w-4 sm2:h-4"/>,
      value: priceFormatter.format(summary.income),
    },
    {
      id: 2,
      title: "Saídas",
      icon: <ArrowCircleDown color="#f75a68" className="sm2:flex lg:w-8 lg:h-8 md:w-6 md:h-6 sm:hidden sm2:w-4 sm2:h-4"/>,
      value: priceFormatter.format(summary.outcome),
    },
    {
      id: 3,
      title: "Total",
      icon: <CurrencyDollar color="#fff" className="sm2:flex lg:w-8 lg:h-8 md:w-6 md:h-6 sm:hidden sm2:w-4 sm2:h-4"/>,
      value: priceFormatter.format(summary.total),
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 grid grid-cols-3 gap-8 mt-[-5rem]">
      {summaryOptions.map((options) => {
        const isTotal = options.title === "Total";
        const bgClass = isTotal ? `${ChangeTotalBackground()}` : "bg-gray-600";

        return (
          <div key={options.id} className={`${bgClass} rounded-sm md:p-8 sm:p-4`}>
            <header className="flex items-center justify-between text-gray-100">
              <span className="lg:text-2xl md:text-xl">{options.title}</span>
              {options.icon}
            </header>
            <strong className="block mt-4 lg:text-4xl md:text-2xl text-gray-100">
              {options.value}
            </strong>
          </div>
        );
      })}
    </div>
  );
}
