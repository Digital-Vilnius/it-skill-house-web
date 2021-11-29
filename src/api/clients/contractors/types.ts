export interface Contractor {
  id: string;
  name: string;
  updated: string | null;
  created: string;
}

export interface AddContractorRequest {
  name: string;
}

export interface EditContractorRequest {
  name: string;
}

export interface ContractorsFilter {
  amountFrom?: number;
}
