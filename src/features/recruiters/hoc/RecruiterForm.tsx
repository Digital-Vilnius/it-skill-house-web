import React, { FC } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import { useRecruiterForm } from '../hooks';
import { Recruiter } from '../types';

interface Props {
  recruiter?: Recruiter;
}

const RecruiterForm: FC<Props> = (props) => {
  const { recruiter } = props;
  const { control, handleSubmit, save } = useRecruiterForm({ recruiter });

  return (
    <form onSubmit={handleSubmit(save)} className='mb-4'>
      <Row>
        <Col xs={12} md={6}>
          <div className='form-group'>
            <Form.Label>Email</Form.Label>
            <Controller
              control={control}
              name='email'
              render={({ field }) => (
                <Form.Control
                  onInput={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  value={field.value}
                  autoComplete='email'
                  type='email'
                  placeholder='name@address.com'
                />
              )}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <div className='form-group'>
            <Form.Label>First name</Form.Label>
            <Controller
              control={control}
              name='firstName'
              render={({ field }) => (
                <Form.Control
                  onInput={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  value={field.value}
                  autoComplete='firstName'
                  type='text'
                  placeholder='John'
                />
              )}
            />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='form-group'>
            <Form.Label>Last name</Form.Label>
            <Controller
              control={control}
              name='lastName'
              render={({ field }) => (
                <Form.Control
                  onInput={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  value={field.value}
                  autoComplete='lastName'
                  type='text'
                  placeholder='Doe'
                />
              )}
            />
          </div>
        </Col>
      </Row>
      <hr className='mt-5 mb-4' />
      <div className='d-flex justify-content-between'>
        <Button variant='link' className='text-muted'>
          Cancel
        </Button>
        <Button type='submit'>Save</Button>
      </div>
    </form>
  );
};

export default RecruiterForm;
