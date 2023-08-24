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
