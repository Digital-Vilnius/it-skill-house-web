import React, { FC } from 'react';
import { Contractor } from '../types';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { CountryUtils, DateUtils, NumberUtils } from 'utils';
import { FormSwitch } from 'components';

interface Props {
  contractor: Contractor;
  className?: string;
}

const ContractorDetails: FC<Props> = (props) => {
  const { contractor, className } = props;

  return (
    <Card className={className}>
      <Card.Header>
        <h4 className='card-header-title'>Details</h4>
      </Card.Header>
      <Card.Body>
        <Row className='mb-4'>
          <Col>
            <h6 className='text-uppercase text-muted mb-2'>First name</h6>
            <span className='h3 mb-0'>{contractor.firstName}</span>
          </Col>
          <Col>
            <h6 className='text-uppercase text-muted mb-2'>Last name</h6>
            <span className='h3 mb-0'>{contractor.lastName}</span>
          </Col>
          <Col>
            <h6 className='text-uppercase text-muted mb-2'>Email</h6>
            <span className='h3 mb-0'>{contractor.email}</span>
          </Col>
          <Col>
            <h6 className='text-uppercase text-muted mb-2'>Phone</h6>
            <span className='h3 mb-0'>{contractor.phone}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6 className='text-uppercase text-muted mb-2'>Country</h6>
            <span className='h3 mb-0'>{CountryUtils.getCountryName(contractor.countryCode)}</span>
          </Col>
          <Col>
            <h6 className='text-uppercase text-muted mb-2'>City</h6>
            <span className='h3 mb-0'>{contractor.city}</span>
          </Col>
          <Col>
            <h6 className='text-uppercase text-muted mb-2'>Role</h6>
            <span className='h3 mb-0'>{contractor.profession?.name}</span>
          </Col>
          <Col>
            <h6 className='text-uppercase text-muted mb-2'>Recruiter</h6>
            <span className='h3 mb-0'>{`${contractor.recruiter.firstName} ${contractor.recruiter.lastName}`}</span>
          </Col>
        </Row>
        <hr className='my-4' />
        <Row className='mb-4'>
          <Col>
            <h6 className='text-uppercase text-muted mb-2'>Cinode Id / Code Id</h6>
            <span className='h3 mb-0'>{`${contractor.cinodeId} / ${contractor.codaId}`}</span>
          </Col>
          <Col>
            <h6 className='text-uppercase text-muted mb-2'>Rate</h6>
            <span className='h3 mb-0'>
              {NumberUtils.formatAmount(contractor.rate, contractor.currency)}
            </span>
          </Col>
          <Col>
            <h6 className='text-uppercase text-muted mb-2'>Available from</h6>
            <span className='h3 mb-0'>{DateUtils.formatDateString(contractor.availableFrom)}</span>
          </Col>
          <Col>
            <h6 className='text-uppercase text-muted mb-2'>Experience since</h6>
            <span className='h3 mb-0'>{contractor.experienceSince}</span>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <h6 className='text-uppercase text-muted mb-2'>Main technologies</h6>
            {contractor.mainTechnologies.map((technology) => (
              <Badge bg='secondary' className='mb-2 me-2' key={technology.id}>
                {technology.name}
              </Badge>
            ))}
          </Col>
          <Col lg={3}>
            <h6 className='text-uppercase text-muted mb-2'>Other technologies</h6>
            {contractor.technologies.map((technology) => (
              <Badge bg='secondary' className='mb-2 me-2' key={technology.id}>
                {technology.name}
              </Badge>
            ))}
          </Col>
          <Col lg={3}>
            <h6 className='text-uppercase text-muted mb-2'>Tags</h6>
            {contractor.tags.map((tag) => (
              <Badge bg='secondary' className='mb-2 me-2' key={tag.id}>
                {tag.name}
              </Badge>
            ))}
          </Col>
        </Row>
        <hr className='my-4' />
        <Row>
          <Col>
            <h6 className='text-uppercase text-muted mb-2'>Remote</h6>
            <FormSwitch readOnly value={contractor.isRemote} />
          </Col>
          <Col>
            <h6 className='text-uppercase text-muted mb-2'>On site</h6>
            <FormSwitch readOnly value={contractor.isOnSite} />
          </Col>
          <Col>
            <h6 className='text-uppercase text-muted mb-2'>Available</h6>
            <FormSwitch readOnly value={contractor.isAvailable} />
          </Col>
          <Col>
            <h6 className='text-uppercase text-muted mb-2'>Public</h6>
            <FormSwitch readOnly value={contractor.isPublic} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ContractorDetails;
