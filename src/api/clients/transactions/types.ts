export interface Transaction {
  id: string;
  name: string;
  updated: string | null;
  created: string;
}

export interface AddTransactionRequest {
  name: string;
}

export interface EditTransactionRequest {
  name: string;
}

export interface TransactionsFilter {
  amountFrom?: number;
}
