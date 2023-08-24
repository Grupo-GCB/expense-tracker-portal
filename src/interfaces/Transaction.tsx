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

export interface ITransaction {
  transaction_categories: string;
  transaction_description: string;
  transaction_value: string;
  transaction_type: "Despesa" | "Receita";
  transaction_date: string;
  wallet_id: string;
  bank_name: string;
  transaction_id: string;
}
