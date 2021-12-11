import React, { FC } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import { useContractorAddForm } from '../hooks';
import { DatePicker, MoneyInput, Select } from 'components';
import { useTechnologiesOptions } from 'features/technologies/hooks';
import { useRecruitersOptions } from 'features/recruiters/hooks';
import { useTagsOptions } from 'features/tags/hooks';
import { useProfessionsOptions } from 'features/professions/hooks';

interface Props {
  onClose: () => void;
  visible: boolean;
}

const ContractorAddForm: FC<Props> = (props) => {
  const { onClose, visible } = props;

  const { control, handleSubmit, save } = useContractorAddForm({ successCallback: onClose });
  const { technologiesOptions, isLoading: isTechLoading, addTechnology } = useTechnologiesOptions();
  const { professionsOptions, isLoading: isProfLoading, addProfession } = useProfessionsOptions();
  const { recruitersOptions, isLoading: isRecruitersLoading } = useRecruitersOptions();
  const { tagsOptions, isLoading: isTagsLoading, addTag } = useTagsOptions();

  return (
    <Modal size='lg' centered show={visible}>
      <Modal.Header onHide={onClose} closeButton>
        <Modal.Title>Add contractor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
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
        </Row>
        <Row className='mb-4'>
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
        </Row>
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
        <hr className='my-4' />
        <Row>
          <Col>
            <Controller
              control={control}
              name='recruiterId'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Recruiter</Form.Label>
                  <Select
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
              name='professionId'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Profession</Form.Label>
                  <Select
                    searchable
                    clearable
                    creatable
                    onCreate={addProfession}
                    name={field.name}
                    onBlur={field.onBlur}
                    loading={isProfLoading}
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
              name='mainTechnologyId'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Main technology</Form.Label>
                  <Select
                    clearable
                    searchable
                    creatable
                    onCreate={addTechnology}
                    name={field.name}
                    onBlur={field.onBlur}
                    loading={isTechLoading}
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
              name='technologiesIds'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Other technologies</Form.Label>
                  <Select
                    multi
                    clearable
                    searchable
                    creatable
                    onCreate={addTechnology}
                    name={field.name}
                    onBlur={field.onBlur}
                    loading={isTechLoading}
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
              name='tagsIds'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Tags</Form.Label>
                  <Select
                    multi
                    clearable
                    searchable
                    creatable
                    onCreate={addTag}
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
              name='isPublic'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>Public</Form.Label>
                  <Form.Text className='small text-muted'>
                    This contact will be shown to others publicly, so choose it carefully.
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
              name='isOnSite'
              render={({ field, fieldState }) => (
                <div className='form-group'>
                  <Form.Label>On site</Form.Label>
                  <Form.Text className='small text-muted'>
                    This contact will be shown to others publicly, so choose it carefully.
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

export default ContractorAddForm;
