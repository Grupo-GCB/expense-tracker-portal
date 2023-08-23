export interface IRegisterTransaction {
    description: string;
    value: number;
    date: string; 
    wallets: string;
    categories: string;
    type: 'income' | 'outcome';
  }
  

  