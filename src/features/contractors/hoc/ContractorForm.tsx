import React, { FC } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Select, TextEditor } from 'components';

const ContractorForm: FC = () => {
  return (
    <form className='mb-4'>
      <Row>
        <Col xs={12} md={6}>
          <div className='form-group'>
            <Form.Label>First name</Form.Label>
            <Form.Control type='text' />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='form-group'>
            <Form.Label>Last name</Form.Label>
            <Form.Control type='text' />
          </div>
        </Col>
      </Row>
      <div className='form-group'>
        <Form.Label className='mb-1'>Project description</Form.Label>
        <Form.Text className='text-muted'>This is how others will learn about the project, so make it good!</Form.Text>
        <TextEditor />
      </div>
      <div className='form-group'>
        <Form.Label>Project tags</Form.Label>
        <Select
          options={[
            {
              value: 'css',
              label: 'CSS',
            },
            {
              value: 'html',
              label: 'HTML',
            },
            {
              value: 'javascript',
              label: 'JavaScript',
            },
            {
              value: 'bootstrap',
              label: 'Bootstrap',
            },
          ]}
          placeholder={null}
          isMulti
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
