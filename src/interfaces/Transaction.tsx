export interface ITransaction {
  id: string;
  category: string;
  description: string;
  value: string;
  type: "Despesa" | "Receita";
  date: string;
  bank_name: string;
}
export interface IRegisterTransaction {
  description: string;
  value: number;
  date: string;
  wallets: string;
  categories: string;
  type: "Receita" | "Despesa";
}

export interface ITransactionType {
  value: string;
  selectedOption: string | null;
  handleOptionSelect: (value: string) => void;
}
