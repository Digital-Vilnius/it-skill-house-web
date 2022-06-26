import React, { FC, useMemo, useState } from 'react';
import { RuleFormData } from '../types';
import classNames from 'classnames';
import { FormControl, FormDatePicker, FormInput } from 'components';
import {
  comparisonsOptions,
  contractorsFilterKeysOptions,
  getRuleFormSchema,
  initialRuleFormData,
} from '../constants';
import {
  Comparisons,
  ContractorsFilterKeys,
  ContractorsFilterRule,
} from 'api/clients/contractors/types';
import Select from 'react-select';
import { useAppSelector } from 'core/store';
import { selectTechnologiesOptions } from 'features/technologies/selectors';
import { selectTagsOptions } from 'features/tags/selectors';
import { selectProfessionsOptions } from 'features/professions/selectors';
import { selectRecruitersOptions } from 'features/recruiters/selectors';
import { getYearsOptions } from 'utils/date';
import { countriesOptions } from 'utils/countries';

interface Props {
  onRemove?: () => void;
  onAdd?: (rule: ContractorsFilterRule) => void;
  rule?: ContractorsFilterRule;
  className?: string;
}

const ContractorsFilterRuleForm: FC<Props> = (props) => {
  const { className, rule, onRemove, onAdd } = props;

  const technologiesOptions = useAppSelector(selectTechnologiesOptions);
  const tagsOptions = useAppSelector(selectTagsOptions);
  const professionsOptions = useAppSelector(selectProfessionsOptions);
  const recruitersOptions = useAppSelector(selectRecruitersOptions);

  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);
  const [formData, setFormData] = useState<RuleFormData>(rule ?? initialRuleFormData);

  const filteredComparisonsOptions = useMemo(
    () => (!formData.key ? [] : comparisonsOptions(formData.key)),
    [formData.key]
  );

  const handleOnKeyChange = (value: ContractorsFilterKeys | null) => {
    setFormData({ ...initialRuleFormData, key: value });
  };

  const handleOnComparisonChange = (value: Comparisons | null) => {
    setFormData({ ...formData, comparison: value });
  };

  const handleOnValueChange = (value: unknown) => {
    setFormData({ ...formData, value });
  };

  const handleOnAdd = async () => {
    setIsFormDirty(true);

    const schema = getRuleFormSchema();
    const isValid = await schema.isValid(formData);
    if (!isValid) return;

    onAdd?.(formData as ContractorsFilterRule);
    setFormData(initialRuleFormData);
    setIsFormDirty(false);
  };

  return (
    <div className={classNames('rule', className)}>
      <FormControl required label='Field'>
        <Select
          isSearchable
          isClearable
          isDisabled={!!rule}
          value={formData.key}
          options={contractorsFilterKeysOptions}
          onChange={handleOnKeyChange}
        />
      </FormControl>
      <FormControl required label='Comparison'>
        <Select
          isClearable
          isDisabled={!formData.key || !!rule}
          value={formData.comparison}
          options={filteredComparisonsOptions}
          onChange={handleOnComparisonChange}
        />
      </FormControl>
      {!formData.key && <FormInput disabled label='Value' />}
      {formData.key === ContractorsFilterKeys.keyword && (
        <FormInput
          disabled={!!rule}
          required
          onChange={(event) => handleOnValueChange(event.currentTarget.value)}
          value={formData.value as string}
          label='Keyword'
        />
      )}
      {formData.key === ContractorsFilterKeys.rate && (
        <FormInput
          disabled={!!rule}
          required
          type='number'
          onChange={(event) => handleOnValueChange(event.currentTarget.value)}
          value={formData.value as number}
          label='Rate'
        />
      )}
      {formData.key === ContractorsFilterKeys.tags && (
        <FormControl required label='Tags'>
          <Select
            isSearchable
            isClearable
            isMulti={formData.comparison !== Comparisons.equal}
            isDisabled={!!rule}
            value={formData.value}
            options={tagsOptions}
            onChange={handleOnValueChange}
          />
        </FormControl>
      )}
      {formData.key === ContractorsFilterKeys.availableFrom && (
        <FormDatePicker
          disabled={!!rule}
          label='Available from'
          value={formData.value as string}
          onChange={handleOnValueChange}
        />
      )}
      {formData.key === ContractorsFilterKeys.experienceSince && (
        <FormControl required label='Tags'>
          <Select
            isSearchable
            isClearable
            isMulti={formData.comparison !== Comparisons.equal}
            isDisabled={!!rule}
            value={formData.value}
            options={getYearsOptions()}
            onChange={handleOnValueChange}
          />
        </FormControl>
      )}
      {formData.key === ContractorsFilterKeys.mainTechnologies && (
        <FormControl required label='Main technologies'>
          <Select
            isSearchable
            isClearable
            isMulti={formData.comparison !== Comparisons.equal}
            isDisabled={!!rule}
            value={formData.value}
            options={technologiesOptions}
            onChange={handleOnValueChange}
          />
        </FormControl>
      )}
      {formData.key === ContractorsFilterKeys.recruiter && (
        <FormControl required label='Recruiters'>
          <Select
            isSearchable
            isClearable
            isMulti={formData.comparison !== Comparisons.equal}
            isDisabled={!!rule}
            value={formData.value}
            options={recruitersOptions}
            onChange={handleOnValueChange}
          />
        </FormControl>
      )}
      {formData.key === ContractorsFilterKeys.profession && (
        <FormControl required label='Roles'>
          <Select
            isSearchable
            isClearable
            isMulti={formData.comparison !== Comparisons.equal}
            isDisabled={!!rule}
            value={formData.value}
            options={professionsOptions}
            onChange={handleOnValueChange}
          />
        </FormControl>
      )}
      {formData.key === ContractorsFilterKeys.technologies && (
        <FormControl required label='Technologies'>
          <Select
            isSearchable
            isClearable
            isMulti={formData.comparison !== Comparisons.equal}
            isDisabled={!!rule}
            value={formData.value}
            options={professionsOptions}
            onChange={handleOnValueChange}
          />
        </FormControl>
      )}
      {formData.key === ContractorsFilterKeys.country && (
        <FormControl required label='Countries'>
          <Select
            isSearchable
            isClearable
            isMulti={formData.comparison !== Comparisons.equal}
            isDisabled={!!rule}
            value={formData.value}
            options={countriesOptions}
            onChange={handleOnValueChange}
          />
        </FormControl>
      )}
      <div className='rule-actions'>
        {!rule && (
          <button onClick={handleOnAdd} className='button button-primary'>
            Add
          </button>
        )}
        {!!rule && (
          <button onClick={onRemove} className='button button-secondary'>
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default ContractorsFilterRuleForm;
