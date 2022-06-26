import { RuleFormData } from './types';
import * as yup from 'yup';
import { Comparisons, ContractorsFilterKeys } from 'api/clients/contractors/types';

const arrayFieldComparisons: Comparisons[] = [
  Comparisons.in,
  Comparisons.notIn,
  Comparisons.equal,
  Comparisons.isNull,
];

const measurableFieldComparisons: Comparisons[] = [
  Comparisons.greater,
  Comparisons.greaterOrEqual,
  Comparisons.equal,
  Comparisons.less,
  Comparisons.lessOrEqual,
  Comparisons.isNull,
];

const nonMeasurableFieldComparisons: Comparisons[] = [Comparisons.equal, Comparisons.isNull];

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
  [ContractorsFilterKeys.keyword]: nonMeasurableFieldComparisons,
  [ContractorsFilterKeys.isOnSite]: nonMeasurableFieldComparisons,
  [ContractorsFilterKeys.hasContract]: nonMeasurableFieldComparisons,
  [ContractorsFilterKeys.isRemote]: nonMeasurableFieldComparisons,
  [ContractorsFilterKeys.isPublic]: nonMeasurableFieldComparisons,
  [ContractorsFilterKeys.isAvailable]: nonMeasurableFieldComparisons,
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
  [ContractorsFilterKeys.profession]: 'Professions',
  [ContractorsFilterKeys.country]: 'Countries',
  [ContractorsFilterKeys.recruiter]: 'Recruiters',
  [ContractorsFilterKeys.availableFrom]: 'Available from',
  [ContractorsFilterKeys.experienceSince]: 'Experience since',
  [ContractorsFilterKeys.rate]: 'Rate',
  [ContractorsFilterKeys.keyword]: 'Keyword',
  [ContractorsFilterKeys.isOnSite]: 'On site',
  [ContractorsFilterKeys.hasContract]: 'Has contract',
  [ContractorsFilterKeys.isRemote]: 'Remote',
  [ContractorsFilterKeys.isPublic]: 'Public',
  [ContractorsFilterKeys.isAvailable]: 'Available',
};

export const initialRuleFormData: RuleFormData = {
  key: null,
  comparison: null,
  value: null,
};

export const getRuleFormSchema = () => {
  return yup.object().default({
    key: yup.string().required(),
    comparison: yup.string().required(),
    value: yup.mixed().required(),
  });
};
