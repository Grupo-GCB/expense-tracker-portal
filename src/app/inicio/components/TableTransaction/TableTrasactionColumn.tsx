interface ITableTransactionContent{
  children: React.ReactNode
}

export function TableTransactionColumn({children}: ITableTransactionContent){
  return(
    <td className=" px-5 py-8 bg-gray-700">{children}</td>
  )
}