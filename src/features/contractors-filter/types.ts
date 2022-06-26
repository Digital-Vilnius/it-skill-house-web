import { Comparisons, ContractorsFilterKeys } from 'api/clients/contractors/types';

export interface RuleFormData {
  key: ContractorsFilterKeys | null;
  comparison: Comparisons | null;
  value: unknown | null;
}
