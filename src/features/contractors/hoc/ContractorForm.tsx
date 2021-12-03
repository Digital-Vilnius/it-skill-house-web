import React, { FC } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { TechnologiesSelect } from 'features/technologies/hoc';
import { Controller } from 'react-hook-form';
import useContractorForm from '../hooks/useContractorForm';
import { RecruitersSelect } from 'features/recruiters/hoc';
import { Contractor } from '../types';

interface Props {
  contractor?: Contractor;
}

const ContractorForm: FC<Props> = (props) => {
  const { contractor } = props;
  const { control, handleSubmit, save } = useContractorForm({ contractor });

  return (
    <form onSubmit={handleSubmit(save)} className='mb-4'>
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
        <Col xs={12} md={6}>
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
      </Row>
      <Row>
        <Col xs={12} md={6}>
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
        <Col xs={12} md={6}>
          <Controller
            control={control}
            name='availableFrom'
            render={({ field, fieldState }) => (
              <div className='form-group mb-0'>
                <Form.Label>Available from</Form.Label>
                <Form.Control
                  isInvalid={!!fieldState.error}
                  onInput={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  value={field.value}
                  type='date'
                  placeholder='yyyy-mm-dd'
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
            name='location'
            render={({ field, fieldState }) => (
              <div className='form-group'>
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
        <Col xs={12} md={6}>
          <Controller
            control={control}
            name='isRemote'
            render={({ field, fieldState }) => (
              <div className='form-group'>
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
      </Row>
      <hr className='my-4' />
      <Row>
        <Col xs={12} md={6}>
          <Controller
            control={control}
            name='isPublic'
            render={({ field, fieldState }) => (
              <div className='form-group'>
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
      </Row>
      <hr className='my-4' />
      <Row>
        <Col xs={12} md={6}>
          <Controller
            control={control}
            name='rate'
            render={({ field, fieldState }) => (
              <div className='form-group mb-0'>
                <Form.Label>Rate</Form.Label>
                <Form.Text className='text-muted'>
                  This is how others will learn about the project, so make it good!
                </Form.Text>
                <Form.Control
                  isInvalid={!!fieldState.error}
                  onInput={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  value={field.value}
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
        <Col xs={12} md={12}>
          <Controller
            control={control}
            name='technologiesIds'
            render={({ field, fieldState }) => (
              <div className='form-group mb-0'>
                <Form.Label>Technologies</Form.Label>
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
      </Row>
      <hr className='my-4' />
      <div className='d-flex justify-content-between'>
        <Button variant='link' className='text-muted'>
          Cancel this project
        </Button>
        <Button type='submit'>Create project</Button>
      </div>
    </form>
  );
};

export default ContractorForm;
