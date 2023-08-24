export interface ITransaction {
  categories: string;
  description: string;
  value: string;
  type: "Despesa" | "Receita";
  date: string;
  wallet: {
    id: string;
    bank: {
      name: string;
    };
  };
  updated_at: string;
  deleted_at: boolean | null;
  id: string;
  created_at: string;
}
