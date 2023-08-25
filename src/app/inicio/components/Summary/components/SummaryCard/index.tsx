import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useSummary } from "../../hook";
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
      icon: <ArrowCircleUp size={32} color="#00b37e" />,
      value: priceFormatter.format(summary.income),
    },
    {
      id: 2,
      title: "Saídas",
      icon: <ArrowCircleDown size={32} color="#f75a68" />,
      value: priceFormatter.format(summary.outcome),
    },
    {
      id: 3,
      title: "Total",
      icon: <CurrencyDollar size={32} color="#fff" />,
      value: priceFormatter.format(summary.total),
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 grid grid-cols-3 gap-8 mt-[-5rem]">
      {summaryOptions.map((options) => {
        const isTotal = options.title === "Total";
        const bgClass = isTotal ? `${ChangeTotalBackground()}` : "bg-gray-600";

        return (
          <div key={options.id} className={`${bgClass} rounded-sm p-8`}>
            <header className="flex items-center justify-between text-gray-100">
              <span className="text-2xl">{options.title}</span>
              {options.icon}
            </header>
            <strong className="block mt-4 text-4xl text-gray-100">
              {options.value}
            </strong>
          </div>
        );
      })}
    </div>
  );
}
