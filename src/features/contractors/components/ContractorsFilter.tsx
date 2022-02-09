import React, { FC } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { DatePicker, MoneyInput, SearchInput, Select, SwitchInput } from 'components';
import { Countries } from 'utils';
import { ContractorsFilter as ContractorsFilterType } from 'api/clients/contractors/types';
import { TechnologiesSelect } from 'features/technologies/hoc';
import { RecruitersSelect } from 'features/recruiters/hoc';
import { TagsSelect } from 'features/tags/hoc';
import { ProfessionsSelect } from 'features/professions/hoc';

interface Props {
  onClose: () => void;
  onSubmit: () => void;
  onReset: () => void;
  control: Control<ContractorsFilterType>;
}

const ContractorsFilter: FC<Props> = (props) => {
  const { onClose, onSubmit, onReset, control } = props;

  return (
    <>
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
                  <ProfessionsSelect
                    multi
                    searchable
                    clearable
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
              name='technologiesIds'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Technologies</Form.Label>
                  <TechnologiesSelect
                    multi
                    searchable
                    clearable
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
          <Col>
            <Controller
              control={control}
              name='mainTechnologiesIds'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Main technologies</Form.Label>
                  <TechnologiesSelect
                    multi
                    searchable
                    clearable
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
              name='recruitersIds'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Recruiters</Form.Label>
                  <RecruitersSelect
                    multi
                    searchable
                    clearable
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
          <Col>
            <Controller
              control={control}
              name='tagsIds'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Tags</Form.Label>
                  <TagsSelect
                    multi
                    searchable
                    clearable
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
        <Row>
          <Col lg={6}>
            <Controller
              control={control}
              name='countriesCodes'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Countries</Form.Label>
                  <Select
                    searchable
                    clearable
                    multi
                    name={field.name}
                    onBlur={field.onBlur}
                    options={Countries.countriesOptions}
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
        <Button onClick={onReset} variant='white'>
          Reset
        </Button>
        <Button onClick={onSubmit} type='submit'>
          Filter
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ContractorsFilter;
