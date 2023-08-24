import { IOptions } from "@/components/Select";

export const BASE_URL = "http://localhost:8080/";
export const DEFAULT_UNKNOWN_ERROR_MESSAGE = "Algo deu errado!";
export const UNKNOWN_ERROR = "Erro desconhecido: ";
export const AXIOS_ERROR = "Axios error: ";
export const THIRTY_DAY_COOKIE_LIFETIME = 30 * 24 * 60 * 60;
export const AXIOS_ERROR_400 = "Requisição inválida.";
export const AXIOS_ERROR_404 = "Recurso não encontrado.";
export const SUCESS_UPDATE_MESSAGE = "Atualização da carteira realizada com sucesso."
export const ERROR_UPDATE_MESSAGE = "Erro ao realizar a atualização da carteira."
export const SUCESS_DELETE_MESSAGE = "Carteira deletada com sucesso."
export const ERROR_DELETE_MESSAGE = "Erro ao deletar a carteira."
export const SUCESS_REGISTER_TRANSACTION = "Nova transação adicionada com sucesso"
export const ERROR_REGISTER_TRANSACTION = "Erro ao adicionar nova transação"


export const AccountType = {
  CHECKING_ACCOUNT: "Conta-Corrente",
  SAVINGS_ACCOUNT: "Conta-Poupança",
  INVESTMENT: "Investimento",
  CASH: "Dinheiro",
  OTHERS: "Outros",
} as const;

export const accountTypes: IOptions[] = [
  { value: AccountType.CHECKING_ACCOUNT, label: AccountType.CHECKING_ACCOUNT },
  { value: AccountType.SAVINGS_ACCOUNT, label: AccountType.SAVINGS_ACCOUNT },
  { value: AccountType.INVESTMENT, label: AccountType.INVESTMENT },
  { value: AccountType.CASH, label: AccountType.CASH },
  { value: AccountType.OTHERS, label: AccountType.OTHERS },
];

export const Categories = {
  Casa: 'Casa',
  Eletrônicos: 'Eletrônicos',
  Educação: 'Educação',
  Lazer: 'Lazer',
  Alimentação: 'Alimentação',
  Saúde: 'Saúde',
  Supermercado: 'Supermercado',
  Roupas: 'Roupas',
  Transporte: 'Transporte',
  Viagem: 'Viagem',
  Serviços: 'Serviços',
  Presentes: 'Presentes',
  Outros: 'Outros'
} as const;

export const categoryTypes: IOptions[] = Object.entries(Categories).map(([value, label]) => ({
  value,
  label,
}));