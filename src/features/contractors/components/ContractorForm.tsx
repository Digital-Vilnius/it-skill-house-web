import React, { FC } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { FormControl, FormDatePicker, FormInput, FormSwitch, FormTextEditor } from 'components';
import { SaveContractorRequest } from 'api/clients/contractors/types';
import { useAppSelector } from 'core/store';
import { selectTechnologiesOptions } from 'features/technologies/selectors';
import { selectTagsOptions } from 'features/tags/selectors';
import { selectProfessionsOptions } from 'features/professions/selectors';
import { selectRecruitersOptions } from 'features/recruiters/selectors';
import Select from 'react-select';
import { countriesOptions } from 'utils/countries';
import { currenciesOptions } from 'utils/currency';
import { getYearsOptions } from 'utils/date';

interface Props {
  onClose: () => void;
  onSubmit: () => void;
  isEdit: boolean;
  control: Control<SaveContractorRequest>;
}

const ContractorForm: FC<Props> = (props) => {
  const { onClose, onSubmit, isEdit, control } = props;

  const technologiesOptions = useAppSelector(selectTechnologiesOptions);
  const tagsOptions = useAppSelector(selectTagsOptions);
  const professionsOptions = useAppSelector(selectProfessionsOptions);
  const recruitersOptions = useAppSelector(selectRecruitersOptions);

  return (
    <>
      <Modal.Body>
        <Row className='mb-2'>
          <Col>
            <Controller
              control={control}
              name='firstName'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput required label='First name' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='lastName'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput required label='Last name' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col>
            <Controller
              control={control}
              name='email'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput required label='Email' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='phone'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Phone' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col>
            <Controller
              control={control}
              name='countryCode'
              render={({ field: { onChange, onBlur }, fieldState: { error } }) => (
                <FormControl error={error?.message} required label='Country'>
                  <Select
                    isSearchable
                    isClearable
                    options={countriesOptions}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                </FormControl>
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='city'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='City' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Controller
              control={control}
              name='reference'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Reference' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        <hr className='my-3' />
        <Row className='mb-2'>
          <Col>
            <Controller
              control={control}
              name='recruiterId'
              render={({ field: { onChange, onBlur }, fieldState: { error } }) => (
                <FormControl error={error?.message} required label='Recruiter'>
                  <Select
                    isSearchable
                    isClearable
                    options={recruitersOptions}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                </FormControl>
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='professionId'
              render={({ field: { onBlur, onChange }, fieldState: { error } }) => (
                <FormControl error={error?.message} required label='Role'>
                  <Select
                    isSearchable
                    isClearable
                    options={professionsOptions}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                </FormControl>
              )}
            />
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col>
            <Controller
              control={control}
              name='mainTechnologiesIds'
              render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
                <FormControl error={error?.message} required label='Main technologies'>
                  <Select
                    isMulti
                    isSearchable
                    isClearable
                    options={technologiesOptions}
                    onChange={onChange}
                    isOptionDisabled={() => value.length >= 2}
                    onBlur={onBlur}
                  />
                </FormControl>
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='technologiesIds'
              render={({ field: { onChange, onBlur }, fieldState: { error } }) => (
                <FormControl error={error?.message} required label='Technologies'>
                  <Select
                    isMulti
                    isSearchable
                    isClearable
                    options={technologiesOptions}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                </FormControl>
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Controller
              control={control}
              name='rate'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Rate' type='number' error={error?.message} {...rest} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='currency'
              render={({ field: { onBlur, onChange }, fieldState: { error } }) => (
                <FormControl error={error?.message} label='Currency'>
                  <Select
                    isClearable
                    options={currenciesOptions}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                </FormControl>
              )}
            />
          </Col>
        </Row>
        <hr className='my-3' />
        <Row className='mb-2'>
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
              name='experienceSince'
              render={({ field: { onBlur, onChange }, fieldState: { error } }) => (
                <FormControl error={error?.message} required label='Experience since'>
                  <Select
                    isSearchable
                    isClearable
                    options={getYearsOptions()}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                </FormControl>
              )}
            />
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col>
            <Controller
              control={control}
              name='codaId'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Coda ID' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='cinodeId'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='Cinode ID' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Controller
              control={control}
              name='tagsIds'
              render={({ field: { onBlur, onChange }, fieldState: { error } }) => (
                <FormControl error={error?.message} required label='Tags'>
                  <Select
                    isMulti
                    isSearchable
                    isClearable
                    options={tagsOptions}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                </FormControl>
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='linkedInUrl'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormInput label='LinkedIn' {...rest} error={error?.message} />
              )}
            />
          </Col>
        </Row>
        {!isEdit && (
          <>
            <hr className='my-3' />
            <Row>
              <Col>
                <Controller
                  control={control}
                  name='note'
                  render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                    <FormTextEditor required label='Note' {...rest} error={error?.message} />
                  )}
                />
              </Col>
            </Row>
          </>
        )}
        <hr className='my-3' />
        <Row>
          <Col>
            <Controller
              control={control}
              name='isRemote'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormSwitch label='Remote' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='isOnSite'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormSwitch label='On site' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='hasContract'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormSwitch label='Has contract' {...rest} error={error?.message} />
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='isPublic'
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <FormSwitch label='Public' error={error?.message} {...rest} />
              )}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onClose} className='button button-secondary'>
          Close
        </button>
        <button onClick={onSubmit} className='button button-primary'>
          Save
        </button>
      </Modal.Footer>
    </>
  );
};

export default ContractorForm;
