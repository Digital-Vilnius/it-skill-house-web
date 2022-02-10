import React, { FC } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { FormDatePicker, FormInput, FormSelect, FormSwitch, FormTextEditor } from 'components';
import { Countries } from 'utils';
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
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='firstName'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='First name' placeholder='John' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='lastName'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Last name' placeholder='Doe' {...rest} error={error?.message} />
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
                <FormInput label='Email' placeholder='john@gmail.com' {...rest} error={error?.message} />
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
                  label='Country'
                  options={Countries.countriesOptions}
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
                <RecruitersSelect
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
                  label='Main technologies'
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
                  {...rest}
                  error={error?.message}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='currency'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Currency' placeholder='EUR' {...rest} error={error?.message} />
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
                <FormDatePicker label='Experience since' {...rest} error={error?.message} />
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
                    <FormTextEditor label='Note' {...rest} error={error?.message} />
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
                  help='This contact will be shown to others publicly, so choose it carefully.'
                  {...rest}
                  error={error?.message}
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
