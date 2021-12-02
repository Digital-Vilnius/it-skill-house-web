export interface ContractorRate {
  id: string;
  amount: number;
  dateFrom: string | null;
  dateTo: string | null;
  updated: string | null;
  created: string;
}

export interface AddContractorRateRequest {
  amount: number;
  contractorId: string;
}
