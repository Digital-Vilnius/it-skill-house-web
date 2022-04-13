import React, { FC } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import {
  FormDatePicker,
  FormInput,
  FormSelect,
  FormSwitch,
  FormTextEditor,
  FormYearPicker,
} from 'components';
import { CountryUtils, CurrencyUtils } from 'utils';
import { UsersSelect } from 'features/users/hoc';
import { TechnologiesSelect } from 'features/technologies/hoc';
import { ProfessionsSelect } from 'features/professions/hoc';
import { SaveContractorRequest } from 'api/clients/contractors/types';
import { TagsSelect } from 'features/tags/hoc';

interface Props {
  onClose: () => void;
  onSubmit: () => void;
  isEdit: boolean;
  control: Control<SaveContractorRequest>;
}

const ContractorForm: FC<Props> = (props) => {
  const { onClose, onSubmit, isEdit, control } = props;

  return (
    <>
      <Modal.Body>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='firstName'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput
                  required
                  label='First name'
                  placeholder='John'
                  {...rest}
                  error={error?.message}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='lastName'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput
                  required
                  label='Last name'
                  placeholder='Doe'
                  {...rest}
                  error={error?.message}
                />
              )}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='email'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput
                  required
                  label='Email'
                  placeholder='john@gmail.com'
                  {...rest}
                  error={error?.message}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='phone'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Phone' placeholder='+370# ## #####' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Controller
              control={control}
              name='countryCode'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormSelect
                  required
                  searchable
                  clearable
                  label='Country'
                  options={CountryUtils.countriesOptions}
                  {...rest}
                  error={error?.message}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='city'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='City' placeholder='Vilnius' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        <hr className='my-4' />
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='recruiterId'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <UsersSelect
                  required
                  label='Recruiter'
                  searchable
                  clearable
                  {...rest}
                  error={error?.message}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='professionId'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <ProfessionsSelect
                  label='Role'
                  clearable
                  searchable
                  creatable
                  {...rest}
                  error={error?.message}
                />
              )}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='mainTechnologiesIds'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <TechnologiesSelect
                  required
                  label='Main technologies'
                  clearable
                  searchable
                  creatable
                  multi
                  maxSelected={2}
                  {...rest}
                  error={error?.message}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='technologiesIds'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <TechnologiesSelect
                  label='Technologies'
                  clearable
                  searchable
                  creatable
                  multi
                  {...rest}
                  error={error?.message}
                />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Controller
              control={control}
              name='rate'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput
                  label='Rate'
                  type='number'
                  placeholder='30.00'
                  error={error?.message}
                  {...rest}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='currency'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormSelect
                  searchable
                  clearable
                  label='Currency'
                  options={CurrencyUtils.currenciesOptions}
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
              name='availableFrom'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormDatePicker label='Available from' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='experienceSince'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormYearPicker label='Experience since' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='codaId'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Coda ID' placeholder='1234' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='cinodeId'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Cinode ID' placeholder='1234' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Controller
              control={control}
              name='tagsIds'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <TagsSelect
                  label='Tags'
                  clearable
                  searchable
                  creatable
                  multi
                  {...rest}
                  error={error?.message}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='linkedInUrl'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput
                  label='LinkedIn'
                  placeholder='https://www.linkedin.com/'
                  {...rest}
                  error={error?.message}
                />
              )}
            />
          </Col>
        </Row>
        <hr className='my-4' />
        {!isEdit && (
          <>
            <Row className='mb-4'>
              <Col>
                <Controller
                  control={control}
                  name='note'
                  render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                    <FormTextEditor required label='Note' {...rest} error={error?.message} />
                  )}
                />
              </Col>
            </Row>
            <hr className='my-4' />
          </>
        )}
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='isRemote'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormSwitch
                  label='Remote'
                  switchClassName='justify-content-end'
                  help='This contact will be shown to others publicly, so choose it carefully.'
                  {...rest}
                  error={error?.message}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='isOnSite'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormSwitch
                  label='On site'
                  switchClassName='justify-content-end'
                  help='This contact will be shown to others publicly, so choose it carefully.'
                  {...rest}
                  error={error?.message}
                />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Controller
              control={control}
              name='hasContract'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormSwitch
                  label='Has contract'
                  switchClassName='justify-content-end'
                  help='This contact will be shown to others publicly, so choose it carefully.'
                  {...rest}
                  error={error?.message}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='isPublic'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormSwitch
                  label='Public'
                  switchClassName='justify-content-end'
                  help='This contact will be shown to others publicly, so choose it carefully.'
                  error={error?.message}
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
        <Button onClick={onSubmit} type='submit'>
          Save
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ContractorForm;
