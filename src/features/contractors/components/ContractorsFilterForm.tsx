import React, { FC } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { FormDatePicker, FormInput, FormSelect, FormSwitch, FormYearPicker } from 'components';
import { CountryUtils } from 'utils';
import { ContractorsFilter as ContractorsFilterType } from 'api/clients/contractors/types';
import { TechnologiesSelect } from 'features/technologies/hoc';
import { UsersSelect } from 'features/users/hoc';
import { TagsSelect } from 'features/tags/hoc';
import { ProfessionsSelect } from 'features/professions/hoc';

interface Props {
  onClose: () => void;
  onSubmit: () => void;
  onReset: () => void;
  control: Control<ContractorsFilterType>;
}

const ContractorsFilterForm: FC<Props> = (props) => {
  const { onClose, onSubmit, onReset, control } = props;

  return (
    <>
      <Modal.Body>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='keyword'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Keywords' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='professionsIds'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <ProfessionsSelect
                  label='Professions'
                  multi
                  searchable
                  clearable
                  error={fieldState.error?.message}
                  {...rest}
                />
              )}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='technologiesIds'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <TechnologiesSelect
                  label='Technologies'
                  multi
                  searchable
                  clearable
                  error={fieldState.error?.message}
                  {...rest}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='mainTechnologiesIds'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <TechnologiesSelect
                  label='Main technologies'
                  multi
                  searchable
                  clearable
                  error={fieldState.error?.message}
                  {...rest}
                />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Controller
              control={control}
              name='recruitersIds'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <UsersSelect
                  label='Recruiters'
                  multi
                  searchable
                  clearable
                  error={fieldState.error?.message}
                  {...rest}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='tagsIds'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <TagsSelect
                  label='Tags'
                  multi
                  searchable
                  clearable
                  error={fieldState.error?.message}
                  {...rest}
                />
              )}
            />
          </Col>
        </Row>
        <hr className='my-4' />
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='availableFrom'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormDatePicker label='Available from' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='availableTo'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormDatePicker label='Available to' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='experienceFrom'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormYearPicker label='Experience from' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='experienceTo'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormYearPicker label='Experience to' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Controller
              control={control}
              name='rateFrom'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Rate from' type='number' error={error?.message} {...rest} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='rateTo'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Rate to' type='number' error={error?.message} {...rest} />
              )}
            />
          </Col>
        </Row>
        <hr className='my-4' />
        <Row>
          <Col lg={6}>
            <Controller
              control={control}
              name='countriesCodes'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormSelect
                  searchable
                  clearable
                  multi
                  label='Countries'
                  options={CountryUtils.countriesOptions}
                  {...rest}
                  error={error?.message}
                />
              )}
            />
          </Col>
        </Row>
        <hr className='my-4' />
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='isRemote'
              render={({ field: { ref, onChange, ...rest }, fieldState: { error } }) => (
                <FormSwitch
                  label='Remote'
                  help='This contact will be shown to others publicly, so choose it carefully.'
                  error={error?.message}
                  onChange={onChange}
                  {...rest}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='isOnSite'
              render={({ field: { ref, onChange, ...rest }, fieldState: { error } }) => (
                <FormSwitch
                  label='On site'
                  help='This contact will be shown to others publicly, so choose it carefully.'
                  error={error?.message}
                  onChange={onChange}
                  {...rest}
                />
              )}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='isAvailable'
              render={({ field: { ref, onChange, ...rest }, fieldState: { error } }) => (
                <FormSwitch
                  label='Available'
                  help='This contact will be shown to others publicly, so choose it carefully.'
                  error={error?.message}
                  onChange={onChange}
                  {...rest}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='hasContract'
              render={({ field: { ref, onChange, ...rest }, fieldState: { error } }) => (
                <FormSwitch
                  label='Has contract'
                  help='This contact will be shown to others publicly, so choose it carefully.'
                  error={error?.message}
                  onChange={onChange}
                  {...rest}
                />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Controller
              control={control}
              name='isPublic'
              render={({ field: { ref, onChange, ...rest }, fieldState: { error } }) => (
                <FormSwitch
                  label='Public'
                  help='This contact will be shown to others publicly, so choose it carefully.'
                  error={error?.message}
                  onChange={onChange}
                  {...rest}
                />
              )}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} variant='secondary'>
          Close
        </Button>
        <Button onClick={onReset} variant='white'>
          Reset
        </Button>
        <Button onClick={onSubmit} type='submit'>
          Filter
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ContractorsFilterForm;