import React, { FC } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
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
import { RecruitersSelect } from 'features/recruiters/hoc';
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
        <Row className='mb-3'>
          <Col>
            <Controller
              control={control}
              name='firstName'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput required label='First name' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='lastName'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput required label='Last name' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <Controller
              control={control}
              name='email'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput required label='Email' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='phone'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Phone' {...rest} error={error?.message} />
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
                <FormInput label='City' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        <hr className='my-4' />
        <Row className='mb-3'>
          <Col>
            <Controller
              control={control}
              name='recruiterId'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <RecruitersSelect
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
        <Row className='mb-3'>
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
                <FormInput label='Rate' type='number' error={error?.message} {...rest} />
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
        <Row className='mb-3'>
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
        <Row className='mb-3'>
          <Col>
            <Controller
              control={control}
              name='codaId'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Coda ID' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='cinodeId'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Cinode ID' {...rest} error={error?.message} />
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
                <FormInput label='LinkedIn' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        {!isEdit && (
          <>
            <hr className='my-4' />
            <Row>
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
          </>
        )}
        <hr className='my-4' />
        <Row>
          <Col>
            <Controller
              control={control}
              name='isRemote'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormSwitch label='Remote' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='isOnSite'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormSwitch label='On site' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='hasContract'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormSwitch label='Has contract' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='isPublic'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormSwitch label='Public' error={error?.message} {...rest} />
              )}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onClose} className='button button-secondary'>
          Close
        </button>
        <button onClick={onSubmit} className='button button-primary'>
          Save
        </button>
      </Modal.Footer>
    </>
  );
};

export default ContractorForm;
