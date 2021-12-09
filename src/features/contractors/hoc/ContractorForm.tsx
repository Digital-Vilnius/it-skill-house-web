import React, { FC } from 'react';
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { TechnologiesMultiSelect, TechnologiesSelect } from 'features/technologies/hoc';
import { Controller } from 'react-hook-form';
import { useContractorForm } from '../hooks';
import { RecruitersSelect } from 'features/recruiters/hoc';
import { Contractor } from '../types';
import { DatePicker, MoneyInput } from 'components';
import Icon from '@ailibs/feather-react-ts';

interface Props {
  contractor?: Contractor;
  onClose: () => void;
  visible: boolean;
}

const ContractorForm: FC<Props> = (props) => {
  const { onClose, visible } = props;
  const { control, handleSubmit, save } = useContractorForm({ successCallback: onClose });

  return (
    <Modal centered size='lg' show={visible}>
      <Modal.Header onHide={onClose} closeButton>
        <Modal.Title>Contractor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} md={6}>
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
          <Col xs={12} md={6}>
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
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Controller
              control={control}
              name='email'
              render={({ field, fieldState }) => (
                <div className='form-group mb-0'>
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
          <Col xs={12} md={6}>
            <Controller
              control={control}
              name='phone'
              render={({ field, fieldState }) => (
                <div className='form-group mb-0'>
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
        </Row>
        <hr className='my-4' />
        <Row>
          <Col xs={12} md={6}>
            <Controller
              control={control}
              name='recruiterId'
              render={({ field, fieldState }) => (
                <div className='form-group mb-0'>
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
          <Col xs={12} md={6}>
            <Controller
              control={control}
              name='availableFrom'
              render={({ field, fieldState }) => (
                <div className='form-group mb-0'>
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
        </Row>
        <hr className='my-4' />
        <Row>
          <Col xs={12} md={6}>
            <Controller
              control={control}
              name='mainTechnologyId'
              render={({ field, fieldState }) => (
                <div className='form-group mb-0'>
                  <Form.Label>Main technology</Form.Label>
                  <Form.Text className='text-muted'>
                    This is how others will learn about the project, so make it good!
                  </Form.Text>
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
          <Col xs={12} md={6}>
            <Controller
              control={control}
              name='technologiesIds'
              render={({ field, fieldState }) => (
                <div className='form-group mb-0'>
                  <Form.Label>Other technologies</Form.Label>
                  <Form.Text className='text-muted'>
                    This is how others will learn about the project, so make it good!
                  </Form.Text>
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
        </Row>
        <hr className='my-4' />
        <Row>
          <Col>
            <Controller
              control={control}
              name='rate'
              render={({ field, fieldState }) => (
                <div className='form-group mb-0'>
                  <Form.Label>Rate</Form.Label>
                  <Form.Text className='text-muted'>
                    This is how others will learn about the project, so make it good!
                  </Form.Text>
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
        </Row>
        <hr className='my-4' />
        <Row>
          <Col>
            <Controller
              control={control}
              name='location'
              render={({ field, fieldState }) => (
                <div className='form-group mb-0'>
                  <Form.Label>Location</Form.Label>
                  <Form.Text className='text-muted'>
                    This is how others will learn about the project, so make it good!
                  </Form.Text>
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
        </Row>
        <hr className='my-4' />
        <Row>
          <Col xs={12} md={6}>
            <Controller
              control={control}
              name='isRemote'
              render={({ field, fieldState }) => (
                <div className='form-group mb-0'>
                  <Form.Label>Remote</Form.Label>
                  <Form.Text className='text-muted mb-3'>
                    This is how others will learn about the project, so make it good!
                  </Form.Text>
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
          <Col xs={12} md={6}>
            <Card className='bg-light border mb-0'>
              <Card.Body>
                <h4 className='mb-2'>
                  <Icon name='alert-triangle' size='1em' /> Warning
                </h4>
                <p className='small text-muted mb-0'>
                  Once a team is made private, you cannot revert it to a public team.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr className='my-4' />
        <Row>
          <Col xs={12} md={6}>
            <Controller
              control={control}
              name='isPublic'
              render={({ field, fieldState }) => (
                <div className='form-group mb-0'>
                  <Form.Label>Public</Form.Label>
                  <Form.Text className='text-muted mb-3'>
                    This is how others will learn about the project, so make it good!
                  </Form.Text>
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
          <Col xs={12} md={6}>
            <Card className='bg-light border mb-0'>
              <Card.Body>
                <h4 className='mb-2'>
                  <Icon name='alert-triangle' size='1em' /> Warning
                </h4>
                <p className='small text-muted mb-0'>
                  Once a team is made private, you cannot revert it to a public team.
                </p>
              </Card.Body>
            </Card>
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
