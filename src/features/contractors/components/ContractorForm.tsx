import React, { FC } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { Dropzone, Select, TextEditor } from 'components';
import { Countries } from 'utils';
import { ContractorFormData } from '../types';
import { RecruitersSelect } from 'features/recruiters/hoc';
import { TechnologiesSelect } from 'features/technologies/hoc';

interface Props {
  onClose: () => void;
  onSubmit: () => void;
  editMode: boolean;
  control: Control<ContractorFormData>;
}

const ContractorForm: FC<Props> = (props) => {
  const { onClose, control, onSubmit, editMode } = props;

  return (
    <>
      <Modal.Body>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='firstName'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    disabled={editMode}
                    isInvalid={!!fieldState.error}
                    onInput={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    value={field.value}
                    placeholder='John'
                  />
                  <Form.Control.Feedback type='invalid'>
                    {fieldState.error?.message}
                  </Form.Control.Feedback>
                </div>
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='lastName'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    disabled={editMode}
                    isInvalid={!!fieldState.error}
                    onInput={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    value={field.value}
                    placeholder='Doe'
                  />
                  <Form.Control.Feedback type='invalid'>
                    {fieldState.error?.message}
                  </Form.Control.Feedback>
                </div>
              )}
            />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='email'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    disabled={editMode}
                    isInvalid={!!fieldState.error}
                    onInput={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    value={field.value}
                    autoComplete='email'
                    type='email'
                    placeholder='name@example.com'
                  />
                  <Form.Control.Feedback type='invalid'>
                    {fieldState.error?.message}
                  </Form.Control.Feedback>
                </div>
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='countryCode'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Country</Form.Label>
                  <Select
                    searchable
                    clearable
                    name={field.name}
                    onBlur={field.onBlur}
                    options={Countries.countriesOptions}
                    value={field.value}
                    onChange={field.onChange}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {fieldState.error?.message}
                  </Form.Control.Feedback>
                </div>
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Controller
              control={control}
              name='recruiterId'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Recruiter</Form.Label>
                  <RecruitersSelect
                    searchable
                    clearable
                    name={field.name}
                    onBlur={field.onBlur}
                    value={field.value}
                    onChange={field.onChange}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {fieldState.error?.message}
                  </Form.Control.Feedback>
                </div>
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='mainTechnologiesIds'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Main technologies</Form.Label>
                  <TechnologiesSelect
                    clearable
                    searchable
                    creatable
                    multi
                    name={field.name}
                    onBlur={field.onBlur}
                    value={field.value ?? []}
                    onChange={field.onChange}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {fieldState.error?.message}
                  </Form.Control.Feedback>
                </div>
              )}
            />
          </Col>
        </Row>
        <hr className='my-4' />
        <Row>
          <Col>
            <Controller
              control={control}
              name='note'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Note</Form.Label>
                  <TextEditor
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    value={field.value}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {fieldState.error?.message}
                  </Form.Control.Feedback>
                </div>
              )}
            />
          </Col>
        </Row>
        <hr className='my-4' />
        <Row>
          <Col>
            <div className='form-group'>
              <Form.Label>Attachments</Form.Label>
              <Dropzone multiple onDrop={console.log} />
            </div>
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
