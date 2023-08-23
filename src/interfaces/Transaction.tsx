export interface ITransaction {
  id: string;
  decription: string;
  typeWallet: string;
  price: string;
  type: "income" | "outcome";
  category: string;
  createdAt: string;
}
