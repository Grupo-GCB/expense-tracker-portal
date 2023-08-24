export interface ITransaction {
  categories: string;
  description: string;
  value: string;
  type: "Despesa" | "Receita";
  date: string;
  wallet_id: string;
  name_bank: string;
  updated_at: string;
  deleted_at: boolean | null;
  id: string;
  created_at: string;
}
