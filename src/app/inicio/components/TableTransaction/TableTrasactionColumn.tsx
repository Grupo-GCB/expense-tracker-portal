interface ITableTransactionContent {
  children: React.ReactNode;
}

export function TableTransactionColumn({ children }: ITableTransactionContent) {
  return <td className="py-5 px-8  bg-gray-700">{children}</td>;
}
