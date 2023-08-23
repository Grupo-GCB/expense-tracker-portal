export interface IRegisterTransaction {
    description: string;
    price: number;
    date: string; 
    wallets: string;
    category: string;
    type: 'income' | 'outcome';
  }
  

  