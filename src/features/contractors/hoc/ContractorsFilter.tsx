import React, { FC } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { ContractorsFilter as ContractorsFilterType } from '../types';
import { useContractorsFilterForm } from '../hooks';
import { Controller } from 'react-hook-form';
import { TechnologiesMultiSelect } from 'features/technologies/hoc';
import { DatePicker, MoneyInput, SearchInput, SwitchInput } from 'components';
import { RecruitersMultiSelect } from 'features/recruiters/hoc';

interface Props {
  filter: ContractorsFilterType;
  onClose: () => void;
  visible: boolean;
}

const ContractorsFilter: FC<Props> = (props) => {
  const { filter, onClose, visible } = props;
  const { control, handleSubmit, save, reset } = useContractorsFilterForm({
    filter,
    onSuccess: onClose,
  });

  return (
    <Modal centered size='lg' show={visible}>
      <Modal.Header onHide={onClose} closeButton>
        <Modal.Title>Filter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Controller
              control={control}
              name='keyword'
              render={({ field, fieldState }) => (
                <div className='form-group mb-0'>
                  <Form.Label>Keyword</Form.Label>
                  <Form.Text className='text-muted mb-3'>
                    This is how others will learn about the project, so make it good!
                  </Form.Text>
                  <SearchInput
                    placeholder='Keywords'
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
              name='technologiesIds'
              render={({ field, fieldState }) => (
                <div className='form-group mb-0'>
                  <Form.Label>Technologies</Form.Label>
                  <Form.Text className='text-muted mb-3'>
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
              name='recruitersIds'
              render={({ field, fieldState }) => (
                <div className='form-group mb-0'>
                  <Form.Label>Recruiters</Form.Label>
                  <Form.Text className='text-muted mb-3'>
                    This is how others will learn about the project, so make it good!
                  </Form.Text>
                  <RecruitersMultiSelect
                    id='recruiters'
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
          <Col>
            <Controller
              control={control}
              name='availableTo'
              render={({ field, fieldState }) => (
                <div className='form-group mb-0'>
                  <Form.Label>Available to</Form.Label>
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
              name='rateFrom'
              render={({ field, fieldState }) => (
                <div className='form-group mb-0'>
                  <Form.Label>Rate from</Form.Label>
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
              name='rateTo'
              render={({ field, fieldState }) => (
                <div className='form-group mb-0'>
                  <Form.Label>Rate to</Form.Label>
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
          <Col sm={12} lg={6}>
            <Controller
              control={control}
              name='isPublic'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Public</Form.Label>
                  <Form.Text className='text-muted mb-3'>
                    This is how others will learn about the project, so make it good!
                  </Form.Text>
                  <SwitchInput
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
          <Col sm={12} lg={6}>
            <Controller
              control={control}
              name='isRemote'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Remote</Form.Label>
                  <Form.Text className='text-muted mb-3'>
                    This is how others will learn about the project, so make it good!
                  </Form.Text>
                  <SwitchInput
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
        <Row>
          <Col sm={12} lg={6}>
            <Controller
              control={control}
              name='isAvailable'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Available</Form.Label>
                  <Form.Text className='text-muted mb-3'>
                    This is how others will learn about the project, so make it good!
                  </Form.Text>
                  <SwitchInput
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
        <Button onClick={reset} variant='white'>
          Reset
        </Button>
        <Button onClick={handleSubmit(save)} type='submit'>
          Filter
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContractorsFilter;