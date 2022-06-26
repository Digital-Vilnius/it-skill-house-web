import React, { FC, useMemo, useState } from 'react';
import { RuleFormData } from '../types';
import classNames from 'classnames';
import { FormControl, FormDatePicker, FormInput } from 'components';
import {
  booleanOptions,
  comparisonsOptions,
  contractorsFilterKeysOptions,
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

  const [formData, setFormData] = useState<RuleFormData>(rule ?? initialRuleFormData);

  const keyValue = useMemo(() => {
    if (!formData.key) return null;
    return contractorsFilterKeysOptions.find((option) => option.value === formData.key);
  }, [formData.key]);

  const comparisonValue = useMemo(() => {
    if (!formData.comparison) return null;
    return comparisonsOptions(formData.key).find((option) => option.value === formData.comparison);
  }, [formData.comparison, formData.key]);

  const comparisonOptions = useMemo(() => {
    return comparisonsOptions(formData.key);
  }, [formData.key]);

  const handleOnKeyChange = (value: string | null) => {
    setFormData({ ...initialRuleFormData, key: value as ContractorsFilterKeys });
  };

  const handleOnComparisonChange = (value: string | null) => {
    setFormData({ ...formData, value: null, comparison: value as Comparisons });
  };

  const handleOnValueChange = (value: unknown) => {
    setFormData({ ...formData, value });
  };

  const handleOnAdd = async () => {
    if (!formData.key || !formData.comparison || !onAdd) return;
    onAdd(formData as ContractorsFilterRule);
    setFormData(initialRuleFormData);
  };

  return (
    <div className={classNames('rule', className)}>
      <FormControl required label='Field'>
        <Select
          classNamePrefix='select'
          isSearchable
          isClearable
          isDisabled={!!rule}
          onChange={(option) => handleOnKeyChange(option?.value ?? null)}
          value={keyValue}
          options={contractorsFilterKeysOptions}
        />
      </FormControl>
      <FormControl required label='Comparison'>
        <Select
          classNamePrefix='select'
          isClearable
          isDisabled={!formData.key || !!rule}
          value={comparisonValue}
          options={comparisonOptions}
          onChange={(option) => handleOnComparisonChange(option?.value ?? null)}
        />
      </FormControl>
      {!formData.key && <FormInput disabled label='Value' />}
      {formData.key === ContractorsFilterKeys.rate && (
        <FormInput
          disabled={!!rule}
          required
          type='number'
          onChange={(event) => handleOnValueChange(event.currentTarget.value)}
          value={formData.value}
          label='Rate'
        />
      )}
      {formData.key === ContractorsFilterKeys.tags && (
        <FormControl required label='Tags'>
          <Select
            classNamePrefix='select'
            isSearchable
            isClearable
            isMulti
            isDisabled={!!rule}
            onChange={(options) => handleOnValueChange(options?.map((option) => option.value))}
            value={tagsOptions.filter((option) => formData.value?.includes(option.value))}
            options={tagsOptions}
          />
        </FormControl>
      )}
      {formData.key === ContractorsFilterKeys.availableFrom && (
        <FormDatePicker
          disabled={!!rule}
          label='Available from'
          value={formData.value}
          onChange={handleOnValueChange}
        />
      )}
      {formData.key === ContractorsFilterKeys.experienceSince && (
        <FormControl required label='Experience since'>
          <Select
            classNamePrefix='select'
            isSearchable
            isClearable
            isMulti
            isDisabled={!!rule}
            onChange={(options) => handleOnValueChange(options?.map((option) => option.value))}
            value={getYearsOptions().filter((option) => formData.value?.includes(option.value))}
            options={getYearsOptions()}
          />
        </FormControl>
      )}
      {formData.key === ContractorsFilterKeys.mainTechnologies && (
        <FormControl required label='Main technologies'>
          <Select
            classNamePrefix='select'
            isSearchable
            isClearable
            isMulti
            isDisabled={!!rule}
            onChange={(options) => handleOnValueChange(options?.map((option) => option.value))}
            value={technologiesOptions.filter((option) => formData.value?.includes(option.value))}
            options={technologiesOptions}
          />
        </FormControl>
      )}
      {formData.key === ContractorsFilterKeys.technologies && (
        <FormControl required label='Technologies'>
          <Select
            classNamePrefix='select'
            isSearchable
            isClearable
            isMulti
            isDisabled={!!rule}
            onChange={(options) => handleOnValueChange(options?.map((option) => option.value))}
            value={technologiesOptions.filter((option) => formData.value?.includes(option.value))}
            options={technologiesOptions}
          />
        </FormControl>
      )}
      {formData.key === ContractorsFilterKeys.recruiter && (
        <FormControl required label='Recruiters'>
          <Select
            classNamePrefix='select'
            isSearchable
            isClearable
            isMulti
            isDisabled={!!rule}
            onChange={(options) => handleOnValueChange(options?.map((option) => option.value))}
            value={recruitersOptions.filter((option) => formData.value?.includes(option.value))}
            options={recruitersOptions}
          />
        </FormControl>
      )}
      {formData.key === ContractorsFilterKeys.profession && (
        <FormControl required label='Roles'>
          <Select
            classNamePrefix='select'
            isSearchable
            isClearable
            isMulti
            isDisabled={!!rule}
            onChange={(options) => handleOnValueChange(options?.map((option) => option.value))}
            value={professionsOptions.filter((option) => formData.value?.includes(option.value))}
            options={professionsOptions}
          />
        </FormControl>
      )}
      {formData.key === ContractorsFilterKeys.country && (
        <FormControl required label='Countries'>
          <Select
            classNamePrefix='select'
            isSearchable
            isClearable
            isMulti
            isDisabled={!!rule}
            value={countriesOptions.filter((option) => formData.value?.includes(option.value))}
            options={countriesOptions}
            onChange={(options) => handleOnValueChange(options?.map((option) => option.value))}
          />
        </FormControl>
      )}
      {formData.key === ContractorsFilterKeys.isPublic && (
        <FormControl required label='Public'>
          <Select
            classNamePrefix='select'
            isClearable
            isDisabled={!!rule}
            onChange={(option) => handleOnValueChange(option?.value)}
            value={booleanOptions.find((option) => option.value === formData.value)}
            options={booleanOptions}
          />
        </FormControl>
      )}
      {formData.key === ContractorsFilterKeys.isRemote && (
        <FormControl required label='Remote'>
          <Select
            classNamePrefix='select'
            isClearable
            isDisabled={!!rule}
            onChange={(option) => handleOnValueChange(option?.value)}
            value={booleanOptions.find((option) => option.value === formData.value)}
            options={booleanOptions}
          />
        </FormControl>
      )}
      {formData.key === ContractorsFilterKeys.isOnSite && (
        <FormControl required label='On site'>
          <Select
            classNamePrefix='select'
            isClearable
            isDisabled={!!rule}
            onChange={(option) => handleOnValueChange(option?.value)}
            value={booleanOptions.find((option) => option.value === formData.value)}
            options={booleanOptions}
          />
        </FormControl>
      )}
      {formData.key === ContractorsFilterKeys.hasContract && (
        <FormControl required label='Has contract'>
          <Select
            classNamePrefix='select'
            isClearable
            isDisabled={!!rule}
            onChange={(option) => handleOnValueChange(option?.value)}
            value={booleanOptions.find((option) => option.value === formData.value)}
            options={booleanOptions}
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
