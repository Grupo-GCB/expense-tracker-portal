export interface ITransaction {
  id: string;
  description: string;
  typeWallet: string;
  price: string;
  type: "income" | "outcome";
  category: string;
  createdAt: string;
}
