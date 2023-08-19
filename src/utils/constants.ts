import { IOptions } from "@/components/Select";

export const BASE_URL = "http://localhost:8080/";
export const DEFAULT_UNKNOWN_ERROR_MESSAGE = "Algo deu errado!";
export const UNKNOWN_ERROR = "Erro desconhecido: ";
export const AXIOS_ERROR = "Axios error: ";
export const THIRTY_DAY_COOKIE_LIFETIME = 30 * 24 * 60 * 60;
export const AXIOS_ERROR_400 = "Requisição inválida.";
export const AXIOS_ERROR_404 = "Recurso não encontrado.";

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
