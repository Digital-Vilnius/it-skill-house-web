import React, { FC } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import { useUserForm } from '../hooks';
import { User } from '../types';

interface Props {
  user?: User;
  onClose: () => void;
  visible: boolean;
}

const UserForm: FC<Props> = (props) => {
  const { user, onClose, visible } = props;
  const { control, handleSubmit, save } = useUserForm({ user, successCallback: onClose });

  return (
    <Modal centered size='lg' show={visible}>
      <Modal.Header onHide={onClose} closeButton>
        <Modal.Title>User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          <Col xs={12} md={6}>
            <div className='form-group'>
              <Form.Label>Phone</Form.Label>
              <Controller
                control={control}
                name='phone'
                render={({ field }) => (
                  <Form.Control
                    onInput={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    value={field.value}
                    placeholder='+370 677 08802'
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

export default UserForm;
