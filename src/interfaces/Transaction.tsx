export interface ITransaction {
  id: string;
  category: string;
  description: string;
  value: string;
  type: "Despesa" | "Receita";
  date: string;
  wallet_id: string;
  bank_name: string;
}
