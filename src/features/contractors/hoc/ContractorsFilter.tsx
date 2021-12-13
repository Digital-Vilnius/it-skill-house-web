import React, { FC } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { ContractorsFilter as ContractorsFilterType } from '../types';
import { useContractorsFilterForm } from '../hooks';
import { Controller } from 'react-hook-form';
import { DatePicker, MoneyInput, SearchInput, Select, SwitchInput } from 'components';
import { useTechnologiesOptions } from 'features/technologies/hooks';
import { useRecruitersOptions } from 'features/recruiters/hooks';
import { useTagsOptions } from 'features/tags/hooks';
import { useProfessionsOptions } from 'features/professions/hooks';

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
  const { technologiesOptions, isLoading: isTechnologiesLoading } = useTechnologiesOptions();
  const { recruitersOptions, isLoading: isRecruitersLoading } = useRecruitersOptions();
  const { tagsOptions, isLoading: isTagsLoading } = useTagsOptions();
  const { professionsOptions, isLoading: isProfessionsLoading } = useProfessionsOptions();

  return (
    <Modal size='lg' centered show={visible}>
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
                <div className='form-group'>
                  <Form.Label>Keyword</Form.Label>
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
          <Col>
            <Controller
              control={control}
              name='professionsIds'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Professions</Form.Label>
                  <Select
                    multi
                    searchable
                    clearable
                    name={field.name}
                    onBlur={field.onBlur}
                    loading={isProfessionsLoading}
                    options={professionsOptions}
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
              name='technologiesIds'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Technologies</Form.Label>
                  <Select
                    multi
                    searchable
                    clearable
                    name={field.name}
                    onBlur={field.onBlur}
                    loading={isTechnologiesLoading}
                    options={technologiesOptions}
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
                  <Select
                    multi
                    searchable
                    clearable
                    name={field.name}
                    onBlur={field.onBlur}
                    loading={isTechnologiesLoading}
                    options={technologiesOptions}
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
                <div className='form-group'>
                  <Form.Label>Recruiters</Form.Label>
                  <Select
                    multi
                    searchable
                    clearable
                    name={field.name}
                    onBlur={field.onBlur}
                    loading={isRecruitersLoading}
                    options={recruitersOptions}
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
                  <Select
                    multi
                    searchable
                    clearable
                    name={field.name}
                    onBlur={field.onBlur}
                    loading={isTagsLoading}
                    options={tagsOptions}
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
              name='availableTo'
              render={({ field, fieldState }) => (
                <div className='form-group'>
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
              name='experienceFrom'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Experience from</Form.Label>
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
              name='experienceTo'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Experience to</Form.Label>
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
                <div className='form-group'>
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
                <div className='form-group'>
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
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='isRemote'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Remote</Form.Label>
                  <Form.Text className='small text-muted'>
                    This contact will be shown to others publicly, so choose it carefully.
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
          <Col>
            <Controller
              control={control}
              name='isOnSite'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>On site</Form.Label>
                  <Form.Text className='small text-muted'>
                    This contact will be shown to others publicly, so choose it carefully.
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
        <Row className='mb-4'>
          <Col>
            <Controller
              control={control}
              name='isAvailable'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Available</Form.Label>
                  <Form.Text className='small text-muted'>
                    This contact will be shown to others publicly, so choose it carefully.
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
          <Col>
            <Controller
              control={control}
              name='hasContract'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Has contract</Form.Label>
                  <Form.Text className='small text-muted'>
                    This contact will be shown to others publicly, so choose it carefully.
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
          <Col lg={6}>
            <Controller
              control={control}
              name='isPublic'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Public</Form.Label>
                  <Form.Text className='small text-muted'>
                    This contact will be shown to others publicly, so choose it carefully.
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
