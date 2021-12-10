import React, { FC } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { TechnologiesMultiSelect, TechnologiesSelect } from 'features/technologies/hoc';
import { Controller } from 'react-hook-form';
import { useContractorForm } from '../hooks';
import { RecruitersSelect } from 'features/recruiters/hoc';
import { Contractor } from '../types';
import { DatePicker, MoneyInput } from 'components';
import { TagsMultiSelect } from 'features/tags/hoc';

interface Props {
  contractor?: Contractor;
  onClose: () => void;
  visible: boolean;
}

const ContractorForm: FC<Props> = (props) => {
  const { onClose, visible } = props;
  const { control, handleSubmit, save } = useContractorForm({ successCallback: onClose });

  return (
    <Modal dialogClassName='extra-lg' centered show={visible}>
      <Modal.Header onHide={onClose} closeButton>
        <Modal.Title>Contractor</Modal.Title>
      </Modal.Header>
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
          <Col>
            <Controller
              control={control}
              name='codaId'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Coda id</Form.Label>
                  <Form.Control
                    isInvalid={!!fieldState.error}
                    onInput={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    value={field.value}
                    placeholder='12345'
                    type='number'
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
              name='email'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
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
              name='phone'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    isInvalid={!!fieldState.error}
                    onInput={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    value={field.value}
                    placeholder='+370 000 000000'
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
              name='cinodeId'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Cinode id</Form.Label>
                  <Form.Control
                    isInvalid={!!fieldState.error}
                    onInput={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    value={field.value}
                    placeholder='12345'
                    type='number'
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
              name='recruiterId'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Recruiter</Form.Label>
                  <RecruitersSelect
                    isInvalid={!!fieldState.error}
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
              name='isPublic'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Public</Form.Label>
                  <Form.Switch
                    checked={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    onBlur={field.onBlur}
                    isInvalid={!!fieldState.error}
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
              name='hasContract'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Has contract</Form.Label>
                  <Form.Switch
                    checked={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    onBlur={field.onBlur}
                    isInvalid={!!fieldState.error}
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
              name='mainTechnologyId'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Main technology</Form.Label>
                  <TechnologiesSelect
                    isInvalid={!!fieldState.error}
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
              name='technologiesIds'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Other technologies</Form.Label>
                  <TechnologiesMultiSelect
                    isInvalid={!!fieldState.error}
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
              name='tagsIds'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Tags</Form.Label>
                  <TagsMultiSelect
                    isInvalid={!!fieldState.error}
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
        <hr className='my-4' />
        <Row>
          <Col>
            <Controller
              control={control}
              name='rate'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Rate</Form.Label>
                  <MoneyInput
                    isInvalid={!!fieldState.error}
                    onInput={field.onChange}
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
          <Col>
            <Controller
              control={control}
              name='availableFrom'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Available from</Form.Label>
                  <DatePicker
                    isInvalid={!!fieldState.error}
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
          <Col>
            <Controller
              control={control}
              name='experienceSince'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Experience since</Form.Label>
                  <DatePicker
                    isInvalid={!!fieldState.error}
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
            <Controller
              control={control}
              name='location'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    isInvalid={!!fieldState.error}
                    onInput={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    value={field.value}
                    placeholder='Vilnius, Lithuania'
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
              name='isOnSite'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>On site</Form.Label>
                  <Form.Switch
                    checked={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    onBlur={field.onBlur}
                    isInvalid={!!fieldState.error}
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
              name='isRemote'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Remote</Form.Label>
                  <Form.Switch
                    checked={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    onBlur={field.onBlur}
                    isInvalid={!!fieldState.error}
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
          <Col lg={4}>
            <Controller
              control={control}
              name='linkedInUrl'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>LinkedIn</Form.Label>
                  <Form.Control
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    onBlur={field.onBlur}
                    isInvalid={!!fieldState.error}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {fieldState.error?.message}
                  </Form.Control.Feedback>
                </div>
              )}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} variant='secondary'>
          Close
        </Button>
        <Button onClick={handleSubmit(save)} type='submit'>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContractorForm;
