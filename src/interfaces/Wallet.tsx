export interface IRegisterWallet {
  account_type: string;
  description: string;
  bank_id: string;
  user_id: string;
}

export interface IWallet {
  id: string;
  account_type: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: boolean | null;
  bank: {
    id: string;
    name: string;
    logo_url: string;
    created_at: Date;
    deleted_at: boolean | null;
  };
}
