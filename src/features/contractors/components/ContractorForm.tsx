import React, { FC } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { Control, Controller } from 'react-hook-form';
import { FormControl, FormDatePicker, FormInput, FormSwitch, FormTextEditor } from 'components';
import { SaveContractorRequest } from 'api/clients/contractors/types';
import { useAppSelector } from 'core/store';
import { selectTechnologies } from 'features/technologies/selectors';
import { selectTags } from 'features/tags/selectors';
import { selectProfessions } from 'features/professions/selectors';
import { selectRecruiters } from 'features/recruiters/selectors';
import Select from 'react-select';
import { countries, getCountryName } from 'utils/countries';
import { currencies, getCurrencyName } from 'utils/currency';
import { getYearsOptions } from 'utils/date';
import { recruiterToString } from 'features/recruiters/utils';
import { professionToString } from 'features/professions/utils';
import { technologyToString } from 'features/technologies/utils';
import { tagToString } from 'features/tags/utils';

interface Props {
  onClose: () => void;
  onSubmit: () => void;
  isEdit: boolean;
  control: Control<SaveContractorRequest>;
}

const ContractorForm: FC<Props> = (props) => {
  const { onClose, onSubmit, isEdit, control } = props;

  const technologies = useAppSelector(selectTechnologies);
  const tags = useAppSelector(selectTags);
  const professions = useAppSelector(selectProfessions);
  const recruiters = useAppSelector(selectRecruiters);

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
              render={({ field, fieldState: { error } }) => (
                <FormControl error={error?.message} required label='Country'>
                  <Select
                    isSearchable
                    isClearable
                    getOptionLabel={(option) => getCountryName(option)}
                    options={countries.map((country) => country.code)}
                    {...field}
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
              render={({ field, fieldState: { error } }) => (
                <FormControl error={error?.message} required label='Recruiter'>
                  <Select
                    isSearchable
                    isClearable
                    getOptionLabel={(option) =>
                      recruiterToString(recruiters.find((recruiter) => recruiter.id === option))
                    }
                    options={recruiters.map((recruiter) => recruiter.id)}
                    {...field}
                  />
                </FormControl>
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='professionId'
              render={({ field, fieldState: { error } }) => (
                <FormControl error={error?.message} required label='Role'>
                  <Select
                    isSearchable
                    isClearable
                    getOptionLabel={(option) =>
                      professionToString(professions.find((profession) => profession.id === option))
                    }
                    options={professions.map((profession) => profession.id)}
                    {...field}
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
              render={({ field, fieldState: { error } }) => (
                <FormControl error={error?.message} required label='Main technologies'>
                  <Select
                    isMulti
                    isSearchable
                    isClearable
                    options={technologies.map((technology) => technology.id)}
                    getOptionLabel={(option) =>
                      technologyToString(professions.find((technology) => technology.id === option))
                    }
                    isOptionDisabled={() => field.value.length >= 2}
                    {...field}
                  />
                </FormControl>
              )}
            />
          </Col>
          <Col>
            <Controller
              control={control}
              name='technologiesIds'
              render={({ field, fieldState: { error } }) => (
                <FormControl error={error?.message} required label='Technologies'>
                  <Select
                    isMulti
                    isSearchable
                    isClearable
                    options={technologies.map((technology) => technology.id)}
                    getOptionLabel={(option) =>
                      technologyToString(professions.find((technology) => technology.id === option))
                    }
                    {...field}
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
              render={({ field, fieldState: { error } }) => (
                <FormControl error={error?.message} label='Currency'>
                  <Select
                    isClearable
                    options={currencies.map((currency) => currency.code)}
                    getOptionLabel={(option) => getCurrencyName(option)}
                    {...field}
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
              render={({ field, fieldState: { error } }) => (
                <FormControl error={error?.message} required label='Experience since'>
                  <Select isSearchable isClearable options={getYearsOptions()} {...field} />
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
              render={({ field, fieldState: { error } }) => (
                <FormControl error={error?.message} required label='Tags'>
                  <Select
                    isMulti
                    isSearchable
                    isClearable
                    options={tags.map((tag) => tag.id)}
                    getOptionLabel={(option) => tagToString(tags.find((tag) => tag.id === option))}
                    {...field}
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
