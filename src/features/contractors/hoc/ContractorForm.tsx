import React, { FC } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { TextEditor } from 'components';
import { TechnologiesSelect } from '../../technologies/hoc';
import { Controller } from 'react-hook-form';
import useContractorForm from '../hooks/useContractorForm';
import { RecruitersSelect } from 'features/recruiters/hoc';

const ContractorForm: FC = () => {
  const { control, handleSubmit, save } = useContractorForm({});

  return (
    <form onSubmit={handleSubmit(save)} className='mb-4'>
      <Row className='justify-content-between align-items-center'>
        <Col>
          <Row className='align-items-center'>
            <Col className='ms-n2'>
              <h4 className='mb-1'>Your avatar</h4>
              <small className='text-muted'>PNG or JPG no bigger than 1000px wide and tall.</small>
            </Col>
          </Row>
        </Col>
        <Col xs='auto'>
          <Button size='sm'>Upload</Button>
        </Col>
      </Row>
      <hr className='my-5' />
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
                  placeholder='name@example.com'
                />
              )}
            />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='form-group'>
            <Form.Label>Recruiter</Form.Label>
            <Controller
              control={control}
              name='recruiterId'
              render={({ field }) => <RecruitersSelect value={field.value} onChange={field.onChange} />}
            />
          </div>
        </Col>
      </Row>
      <div className='form-group'>
        <Form.Label className='mb-1'>Project description</Form.Label>
        <Form.Text className='text-muted'>This is how others will learn about the project, so make it good!</Form.Text>
        <TextEditor />
      </div>
      <div className='form-group'>
        <Form.Label>Technologies</Form.Label>
        <Form.Text className='text-muted'>This is how others will learn about the project, so make it good!</Form.Text>
        <Controller
          control={control}
          name='technologies'
          render={({ field }) => <TechnologiesSelect value={field.value} onChange={field.onChange} />}
        />
      </div>
      <hr className='mt-5 mb-5' />
      <Row>
        <Col xs={12} md={6}>
          <div className='form-group'>
            <Form.Label className='mb-1'>Private project</Form.Label>
            <Form.Text className='text-muted'>
              If you are available for hire outside of the current situation, you can encourage others to hire you.
            </Form.Text>
            <Form.Switch />
          </div>
        </Col>
      </Row>
      <hr className='mt-5 mb-4' />
      <div className='d-flex justify-content-between'>
        <Button variant='link' className='text-muted'>
          Cancel this project
        </Button>
        <Button>Create project</Button>
      </div>
    </form>
  );
};

export default ContractorForm;
