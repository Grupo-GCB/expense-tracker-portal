interface ITableTransaction {
  children: React.ReactNode;
}

export function TableTransaction({ children }: ITableTransaction) {
  return (
    <table className="w-full border-separate border-spacing-y-2 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md  ">
      <tbody>{children}</tbody>
    </table>
  );
}
