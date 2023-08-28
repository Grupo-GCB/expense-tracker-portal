interface ITableTransactionContent {
  children: React.ReactNode;
}

export function TableTransactionColumn({ children }: ITableTransactionContent) {
  return <td className="py-5 pr-8 pl-6 bg-gray-700">{children}</td>;
}
