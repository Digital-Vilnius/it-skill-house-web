import React, { FC } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { FormDatePicker, FormInput, FormSelect, FormSwitch, TextEditor } from 'components';
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
  const { onClose, control, onSubmit, isEdit } = props;

  return (
    <>
      <Modal.Body>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={props.control}
              name='firstName'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormInput
                  label='First name'
                  placeholder='John'
                  error={fieldState.error?.message}
                  {...rest}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={props.control}
              name='lastName'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormInput
                  label='Last name'
                  placeholder='Doe'
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
              control={props.control}
              name='email'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormInput
                  label='Email'
                  placeholder='john.doe@example.com'
                  error={fieldState.error?.message}
                  {...rest}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={props.control}
              name='phone'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormInput
                  label='Phone'
                  placeholder='+370# ## #####'
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
              control={props.control}
              name='countryCode'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormSelect
                  label='Country'
                  options={Countries.countriesOptions}
                  error={fieldState.error?.message}
                  {...rest}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='city'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormInput
                  label='City'
                  placeholder='Vilnius'
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
              name='recruiterId'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <RecruitersSelect
                  label='Recruiter'
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
              control={props.control}
              name='professionId'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <ProfessionsSelect
                  label='Role'
                  clearable
                  searchable
                  creatable
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
              control={props.control}
              name='mainTechnologiesIds'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <TechnologiesSelect
                  label='Main technologies'
                  clearable
                  searchable
                  creatable
                  multi
                  error={fieldState.error?.message}
                  {...rest}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={props.control}
              name='technologiesIds'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <TechnologiesSelect
                  label='Technologies'
                  clearable
                  searchable
                  creatable
                  multi
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
              name='rate'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormInput
                  label='Rate'
                  type='number'
                  placeholder='30.00'
                  error={fieldState.error?.message}
                  {...rest}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='currency'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormInput
                  label='Currency'
                  placeholder='EUR'
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
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormDatePicker label='Available from' error={fieldState.error?.message} {...rest} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='experienceSince'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormDatePicker label='Experience since' error={fieldState.error?.message} {...rest} />
              )}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='codaId'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormInput
                  label='Coda ID'
                  placeholder='1234'
                  error={fieldState.error?.message}
                  {...rest}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='cinodeId'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormInput
                  label='Cinode ID'
                  placeholder='1234'
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
              control={props.control}
              name='tagsIds'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <TagsSelect
                  label='Tags'
                  clearable
                  searchable
                  creatable
                  multi
                  error={fieldState.error?.message}
                  {...rest}
                />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='linkedInUrl'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormInput
                  label='LinkedIn'
                  placeholder='https://www.linkedin.com/'
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
              name='isRemote'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormSwitch label='Remote' error={fieldState.error?.message} {...rest} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='isOnSite'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormSwitch label='On site' error={fieldState.error?.message} {...rest} />
              )}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='hasContract'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormSwitch label='Has contract' error={fieldState.error?.message} {...rest} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='isPublic'
              render={({ field: { ref, ...rest }, fieldState }) => (
                <FormSwitch label='Public' error={fieldState.error?.message} {...rest} />
              )}
            />
          </Col>
        </Row>
        {!isEdit && (
          <Row>
            <Col>
              <Controller
                control={props.control}
                name='note'
                render={({ field: { ref, ...rest }, fieldState }) => (
                  <div className='form-group'>
                    <Form.Label className='large-label'>Note</Form.Label>
                    <TextEditor {...rest} />
                    <Form.Control.Feedback type='invalid'>
                      {fieldState.error?.message}
                    </Form.Control.Feedback>
                  </div>
                )}
              />
            </Col>
          </Row>
        )}
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
