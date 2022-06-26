import { RuleFormData } from './types';
import { Comparisons, ContractorsFilterKeys } from 'api/clients/contractors/types';

const arrayFieldComparisons: Comparisons[] = [Comparisons.in, Comparisons.notIn];

const measurableFieldComparisons: Comparisons[] = [
  Comparisons.greater,
  Comparisons.greaterOrEqual,
  Comparisons.equal,
  Comparisons.less,
  Comparisons.lessOrEqual,
];

const nonMeasurableFieldComparisons: Comparisons[] = [Comparisons.equal];

export const contractorFilterKeyComparisons: Record<ContractorsFilterKeys, Comparisons[]> = {
  [ContractorsFilterKeys.mainTechnologies]: arrayFieldComparisons,
  [ContractorsFilterKeys.technologies]: arrayFieldComparisons,
  [ContractorsFilterKeys.tags]: arrayFieldComparisons,
  [ContractorsFilterKeys.profession]: arrayFieldComparisons,
  [ContractorsFilterKeys.country]: arrayFieldComparisons,
  [ContractorsFilterKeys.recruiter]: arrayFieldComparisons,
  [ContractorsFilterKeys.availableFrom]: measurableFieldComparisons,
  [ContractorsFilterKeys.experienceSince]: measurableFieldComparisons,
  [ContractorsFilterKeys.rate]: measurableFieldComparisons,
  [ContractorsFilterKeys.isOnSite]: nonMeasurableFieldComparisons,
  [ContractorsFilterKeys.hasContract]: nonMeasurableFieldComparisons,
  [ContractorsFilterKeys.isRemote]: nonMeasurableFieldComparisons,
  [ContractorsFilterKeys.isPublic]: nonMeasurableFieldComparisons,
};

export const comparisonLabel: Record<Comparisons, string> = {
  [Comparisons.greater]: 'Greater',
  [Comparisons.greaterOrEqual]: 'Greater or equal',
  [Comparisons.equal]: 'Equal',
  [Comparisons.less]: 'Less',
  [Comparisons.lessOrEqual]: 'Less or equal',
  [Comparisons.isNull]: 'Is null',
  [Comparisons.in]: 'In',
  [Comparisons.notIn]: 'Not in',
};

export const contractorsFilterKeyLabel: Record<ContractorsFilterKeys, string> = {
  [ContractorsFilterKeys.mainTechnologies]: 'Main technologies',
  [ContractorsFilterKeys.technologies]: 'Technologies',
  [ContractorsFilterKeys.tags]: 'Tags',
  [ContractorsFilterKeys.profession]: 'Profession',
  [ContractorsFilterKeys.country]: 'Country',
  [ContractorsFilterKeys.recruiter]: 'Recruiter',
  [ContractorsFilterKeys.availableFrom]: 'Available from',
  [ContractorsFilterKeys.experienceSince]: 'Experience since',
  [ContractorsFilterKeys.rate]: 'Rate',
  [ContractorsFilterKeys.isOnSite]: 'On site',
  [ContractorsFilterKeys.hasContract]: 'Has contract',
  [ContractorsFilterKeys.isRemote]: 'Remote',
  [ContractorsFilterKeys.isPublic]: 'Public',
};

export const contractorsFilterKeysOptions = Object.values(ContractorsFilterKeys).map((value) => ({
  label: contractorsFilterKeyLabel[value],
  value: value.toString(),
}));

export const comparisonsOptions = (contractorsFilterKey: ContractorsFilterKeys | null) => {
  if (!contractorsFilterKey) return [];

  return contractorFilterKeyComparisons[contractorsFilterKey].map((comparison) => ({
    label: comparisonLabel[comparison],
    value: comparison.toString(),
  }));
};

export const booleanOptions = [
  { label: 'True', value: true },
  { label: 'False', value: false },
];

export const initialRuleFormData: RuleFormData = {
  key: null,
  comparison: null,
  value: null,
};
