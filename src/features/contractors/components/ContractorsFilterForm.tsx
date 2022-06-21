import React, { FC } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { FormDatePicker, FormInput, FormSelect, FormSwitch, FormYearPicker } from 'components';
import { CountryUtils } from 'utils';
import { ContractorsFilter as ContractorsFilterType } from 'api/clients/contractors/types';
import { TechnologiesSelect } from 'features/technologies/hoc';
import { RecruitersSelect } from 'features/recruiters/hoc';
import { TagsSelect } from 'features/tags/hoc';
import { ProfessionsSelect } from 'features/professions/hoc';
import { Plus } from 'react-feather';

interface Props {
  onClose: () => void;
  onSubmit: () => void;
  onReset: () => void;
  control: Control<ContractorsFilterType>;
}

const ContractorsFilterForm: FC<Props> = (props) => {
  const { onClose, onSubmit, onReset, control } = props;

  return (
    <>
      <Modal.Body>
        <Row>
          <Col xl={9}>
            <Row className='mb-3'>
              <Col>
                <Controller
                  control={control}
                  name='keyword'
                  render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                    <FormInput label='Keywords' {...rest} error={error?.message} />
                  )}
                />
              </Col>
              <Col>
                <Controller
                  control={control}
                  name='professionsIds'
                  render={({ field: { ref, ...rest }, fieldState }) => (
                    <ProfessionsSelect
                      label='Professions'
                      multi
                      searchable
                      clearable
                      error={fieldState.error?.message}
                      {...rest}
                    />
                  )}
                />
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col>
                <Controller
                  control={control}
                  name='recruitersIds'
                  render={({ field: { ref, ...rest }, fieldState }) => (
                    <RecruitersSelect
                      label='Recruiters'
                      multi
                      searchable
                      clearable
                      error={fieldState.error?.message}
                      {...rest}
                    />
                  )}
                />
              </Col>
              <Col>
                <Controller
                  control={control}
                  name='tagsIds'
                  render={({ field: { ref, ...rest }, fieldState }) => (
                    <TagsSelect
                      label='Tags'
                      multi
                      searchable
                      clearable
                      error={fieldState.error?.message}
                      {...rest}
                    />
                  )}
                />
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col>
                <Controller
                  control={control}
                  name='availableFrom'
                  render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                    <FormDatePicker label='Available from' {...rest} error={error?.message} />
                  )}
                />
              </Col>
              <Col>
                <Controller
                  control={control}
                  name='experienceFrom'
                  render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                    <FormYearPicker label='Experience from' {...rest} error={error?.message} />
                  )}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Controller
                  control={control}
                  name='rateTo'
                  render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                    <FormInput label='Rate to' type='number' error={error?.message} {...rest} />
                  )}
                />
              </Col>
              <Col>
                <Controller
                  control={control}
                  name='countriesCodes'
                  render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                    <FormSelect
                      searchable
                      clearable
                      multi
                      label='Countries'
                      options={CountryUtils.countriesOptions}
                      {...rest}
                      error={error?.message}
                    />
                  )}
                />
              </Col>
            </Row>
            <hr className='my-4' />
            <Row>
              <Col>
                <Row className='mb-2'>
                  <Col>
                    <Form.Label>Main technologies</Form.Label>
                    <Controller
                      control={control}
                      name='mainTechnologiesIds'
                      render={({ field: { ref, ...rest }, fieldState }) => (
                        <TechnologiesSelect
                          multi
                          searchable
                          clearable
                          error={fieldState.error?.message}
                          {...rest}
                        />
                      )}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className='justify-content-end d-flex'>
                    <button className='button button-secondary'>
                      <Plus />
                      Add and condition
                    </button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row className='mb-2'>
                  <Col>
                    <Form.Label>Technologies</Form.Label>
                    <Controller
                      control={control}
                      name='technologiesIds'
                      render={({ field: { ref, ...rest }, fieldState }) => (
                        <TechnologiesSelect
                          multi
                          searchable
                          clearable
                          error={fieldState.error?.message}
                          {...rest}
                        />
                      )}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className='justify-content-end d-flex'>
                    <button className='button button-secondary'>
                      <Plus />
                      Add and condition
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xl={3}>
            <Row className='mb-3'>
              <Col>
                <Controller
                  control={control}
                  name='isRemote'
                  render={({ field: { ref, onChange, ...rest }, fieldState: { error } }) => (
                    <FormSwitch label='Remote' error={error?.message} onChange={onChange} {...rest} />
                  )}
                />
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col>
                <Controller
                  control={control}
                  name='isOnSite'
                  render={({ field: { ref, onChange, ...rest }, fieldState: { error } }) => (
                    <FormSwitch label='On site' error={error?.message} onChange={onChange} {...rest} />
                  )}
                />
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col>
                <Controller
                  control={control}
                  name='isAvailable'
                  render={({ field: { ref, onChange, ...rest }, fieldState: { error } }) => (
                    <FormSwitch label='Available' error={error?.message} onChange={onChange} {...rest} />
                  )}
                />
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col>
                <Controller
                  control={control}
                  name='hasContract'
                  render={({ field: { ref, onChange, ...rest }, fieldState: { error } }) => (
                    <FormSwitch
                      label='Has contract'
                      error={error?.message}
                      onChange={onChange}
                      {...rest}
                    />
                  )}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Controller
                  control={control}
                  name='isPublic'
                  render={({ field: { ref, onChange, ...rest }, fieldState: { error } }) => (
                    <FormSwitch label='Public' error={error?.message} onChange={onChange} {...rest} />
                  )}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onClose} className='button button-secondary'>
          Close
        </button>
        <button onClick={onReset} className='button button-secondary'>
          Reset
        </button>
        <button onClick={onSubmit} className='button button-primary'>
          Filter
        </button>
      </Modal.Footer>
    </>
  );
};

export default ContractorsFilterForm;
