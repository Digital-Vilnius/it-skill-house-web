import React, { FC, useState } from 'react';
import { ContractorFilterKeys, ContractorsFilterRule } from 'api/clients/contractors/types';
import { FormDatePicker, FormInput, FormSelect, FormYearPicker } from 'components';
import classNames from 'classnames';
import { CloseButton } from 'react-bootstrap';
import { comparisonOptions, contractorFilterKeysOptions } from '../constants';
import { SingleSelectValueType, ValueType } from 'components/Select';
import { ContractorsFilterRuleFormData } from '../types';
import { CountryUtils } from 'utils';
import { TechnologiesSelect } from 'features/technologies/hoc';
import { TagsSelect } from 'features/tags/hoc';
import { ProfessionsSelect } from 'features/professions/hoc';
import { RecruitersSelect } from 'features/recruiters/hoc';

interface Props {
  onSave: (rule: ContractorsFilterRule) => void;
  onClear?: () => void;
  rule?: ContractorsFilterRule;
  className?: string;
}

const initialFormData: ContractorsFilterRuleFormData = {
  key: null,
  comparison: null,
  value: null,
};

const ContractorsFilterRuleForm: FC<Props> = (props) => {
  const { onSave, rule, className, onClear } = props;

  const [formData, setFormData] = useState<ContractorsFilterRuleFormData>(rule ?? initialFormData);

  const handleOnKeyChange = (value: SingleSelectValueType) => {
    const key = value ? value.toString() : null;
    setFormData({ ...initialFormData, key });
  };

  const handleOnComparisonChange = (value: SingleSelectValueType) => {
    const comparison = value ? value.toString() : null;
    setFormData({ ...formData, comparison });
  };

  const handleOnValueChange = (value: unknown) => {
    setFormData({ ...formData, value });
  };

  const handleOnSave = () => {
    onSave(formData as ContractorsFilterRule);
    setFormData(initialFormData);
  };

  return (
    <div className={classNames('rule', className)}>
      <FormSelect
        value={formData.key}
        onChange={handleOnKeyChange}
        label='Property'
        options={contractorFilterKeysOptions}
      />
      <FormSelect
        disabled={!formData.key}
        value={formData.comparison}
        onChange={handleOnComparisonChange}
        clearable
        label='Comparison'
        options={comparisonOptions}
      />
      {!formData.key && <FormInput disabled label='Value' />}
      {formData.key === ContractorFilterKeys.tags && (
        <TagsSelect
          searchable
          clearable
          multi
          label='Tags'
          value={formData.value as ValueType[]}
          onChange={handleOnValueChange}
        />
      )}
      {formData.key === ContractorFilterKeys.availableFrom && (
        <FormDatePicker
          label='Available from'
          value={formData.value as string}
          onChange={handleOnValueChange}
        />
      )}
      {formData.key === ContractorFilterKeys.experienceSince && (
        <FormYearPicker
          label='Experience since'
          value={formData.value as ValueType}
          onChange={handleOnValueChange}
        />
      )}
      {formData.key === ContractorFilterKeys.mainTechnologies && (
        <TechnologiesSelect
          searchable
          clearable
          multi
          label='Main technologies'
          value={formData.value as ValueType[]}
          onChange={handleOnValueChange}
        />
      )}
      {formData.key === ContractorFilterKeys.recruiter && (
        <RecruitersSelect
          searchable
          clearable
          multi
          label='Recruiters'
          value={formData.value as ValueType[]}
          onChange={handleOnValueChange}
        />
      )}
      {formData.key === ContractorFilterKeys.profession && (
        <ProfessionsSelect
          searchable
          clearable
          multi
          label='Professions'
          value={formData.value as ValueType[]}
          onChange={handleOnValueChange}
        />
      )}
      {formData.key === ContractorFilterKeys.technologies && (
        <TechnologiesSelect
          searchable
          clearable
          multi
          label='Technologies'
          value={formData.value as ValueType[]}
          onChange={handleOnValueChange}
        />
      )}
      {formData.key === ContractorFilterKeys.country && (
        <FormSelect
          searchable
          clearable
          multi
          label='Countries'
          value={formData.value as ValueType[]}
          options={CountryUtils.countriesOptions}
          onChange={handleOnValueChange}
        />
      )}
      {!onClear && (
        <button className='button button-primary' onClick={handleOnSave}>
          Save
        </button>
      )}
      {!!onClear && <CloseButton onClick={onClear} />}
    </div>
  );
};

export default ContractorsFilterRuleForm;
