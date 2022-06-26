import React, { FC } from 'react';
import { Contractor } from '../types';
import { Badge, Col, Row } from 'react-bootstrap';
import { CountryUtils, DateUtils, NumberUtils } from 'utils';
import { FormSwitch } from 'components';
import classNames from 'classnames';

interface Props {
  contractor: Contractor;
  className?: string;
}

const ContractorDetails: FC<Props> = (props) => {
  const { contractor, className } = props;

  return (
    <div className={classNames('contractor-details', className)}>
      <Row className='mb-2'>
        <Col>
          <h6 className='contractor-details-section-label'>First name</h6>
          <span className='contractor-details-section-value'>{contractor.firstName}</span>
        </Col>
        <Col>
          <h6 className='contractor-details-section-label'>Last name</h6>
          <span className='contractor-details-section-value'>{contractor.lastName}</span>
        </Col>
        <Col>
          <h6 className='contractor-details-section-label'>Email</h6>
          <span className='contractor-details-section-value'>{contractor.email}</span>
        </Col>
        <Col>
          <h6 className='contractor-details-section-label'>Phone</h6>
          <span className='contractor-details-section-value'>{contractor.phone}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <h6 className='contractor-details-section-label'>Country</h6>
          <span className='contractor-details-section-value'>
            {CountryUtils.getCountryName(contractor.countryCode)}
          </span>
        </Col>
        <Col>
          <h6 className='contractor-details-section-label'>City</h6>
          <span className='contractor-details-section-value'>{contractor.city}</span>
        </Col>
        <Col>
          <h6 className='contractor-details-section-label'>Role</h6>
          <span className='contractor-details-section-value'>{contractor.profession?.name}</span>
        </Col>
        <Col>
          <h6 className='contractor-details-section-label'>Recruiter</h6>
          <span className='contractor-details-section-value'>{`${contractor.recruiter.firstName} ${contractor.recruiter.lastName}`}</span>
        </Col>
      </Row>
      <hr className='my-3' />
      <Row className='mb-3'>
        <Col>
          <h6 className='contractor-details-section-label'>Cinode Id / Code Id</h6>
          <span className='contractor-details-section-value'>{`${contractor.cinodeId} / ${contractor.codaId}`}</span>
        </Col>
        <Col>
          <h6 className='contractor-details-section-label'>Rate</h6>
          <span className='contractor-details-section-value'>
            {NumberUtils.formatAmount(contractor.rate, contractor.currency)}
          </span>
        </Col>
        <Col>
          <h6 className='contractor-details-section-label'>Available from</h6>
          <span className='contractor-details-section-value'>
            {DateUtils.formatDateString(contractor.availableFrom)}
          </span>
        </Col>
        <Col>
          <h6 className='contractor-details-section-label'>Experience since</h6>
          <span className='contractor-details-section-value'>{contractor.experienceSince}</span>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <h6 className='contractor-details-section-label'>Main technologies</h6>
          {contractor.mainTechnologies.map((technology) => (
            <Badge bg='secondary' className='mb-1 me-1' key={technology.id}>
              {technology.name}
            </Badge>
          ))}
        </Col>
        <Col lg={3}>
          <h6 className='contractor-details-section-label'>Other technologies</h6>
          {contractor.technologies.map((technology) => (
            <Badge bg='secondary' className='mb-1 me-1' key={technology.id}>
              {technology.name}
            </Badge>
          ))}
        </Col>
        <Col lg={3}>
          <h6 className='contractor-details-section-label'>Tags</h6>
          {contractor.tags.map((tag) => (
            <Badge bg='secondary' className='mb-1 me-1' key={tag.id}>
              {tag.name}
            </Badge>
          ))}
        </Col>
      </Row>
      <hr className='my-3' />
      <Row>
        <Col>
          <h6 className='contractor-details-section-label'>Remote</h6>
          <FormSwitch readOnly value={contractor.isRemote} />
        </Col>
        <Col>
          <h6 className='contractor-details-section-label'>On site</h6>
          <FormSwitch readOnly value={contractor.isOnSite} />
        </Col>
        <Col>
          <h6 className='contractor-details-section-label'>Available</h6>
          <FormSwitch readOnly value={contractor.isAvailable} />
        </Col>
        <Col>
          <h6 className='contractor-details-section-label'>Public</h6>
          <FormSwitch readOnly value={contractor.isPublic} />
        </Col>
      </Row>
    </div>
  );
};

export default ContractorDetails;
