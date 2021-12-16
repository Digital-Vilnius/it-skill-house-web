import { FC } from 'react';
import { useContractor } from '../hooks';
import { Badge, Button, Card, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { Countries, CurrencyUtils } from 'utils';

interface Props {
  id: number;
}

const Contractor: FC<Props> = (props) => {
  const { id } = props;
  const { isLoading, contractor } = useContractor(id);

  if (isLoading || !contractor) return <span>Loading...</span>;

  return (
    <div className='mb-5'>
      <Card>
        <Card.Body>
          <Row className='align-items-center'>
            <Col className='ms-n2'>
              <h4 className='mb-2'>{`${contractor.firstName} ${contractor.lastName} (${contractor.email})`}</h4>
              <Card.Text className='small text-muted'>
                {contractor.profession.name}
                <span className='mx-2'>●</span>
                {`${Countries.getCountryName(contractor.countryCode)}, ${contractor.city}`}
              </Card.Text>
            </Col>
            <Col xs='auto'>
              <h3 className='mb-0'>
                {`${contractor.rate.toFixed(2)} ${CurrencyUtils.getCurrencySymbol(contractor.currency)}`}
              </h3>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Row>
        <Col md={8} xs={12}>
          <Card>
            <Card.Header>
              <h4 className='card-header-title'>Events</h4>
            </Card.Header>
            <Card.Body>
              <ListGroup className='list-group-flush list-group-activity my-n3'>
                {contractor.events.map((event) => (
                  <ListGroup.Item key={event.id}>
                    <Row>
                      <Col xs='auto'>
                        <small className='text-muted date'>{event.date}</small>
                      </Col>
                      <Col className='ms-n2'>
                        <h3 className='mb-4'>{event.title}</h3>
                        <p
                          dangerouslySetInnerHTML={{ __html: event.content }}
                          className='small html-content mb-2'
                        />
                        <small className='text-muted'>{event.location}</small>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12}>
          <Card>
            <Card.Header>
              <h4 className='card-header-title'>Details</h4>
            </Card.Header>
            <Card.Body>
              <ListGroup className='list-group-flush my-n3'>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>Id</h5>
                    </Col>
                    <Col xs='auto'>
                      <small className='text-muted'>{contractor.id}</small>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>First name</h5>
                    </Col>
                    <Col xs='auto'>
                      <small className='text-muted'>{contractor.firstName}</small>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>Last name</h5>
                    </Col>
                    <Col xs='auto'>
                      <small className='text-muted'>{contractor.lastName}</small>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>Email</h5>
                    </Col>
                    <Col xs='auto'>
                      <small className='text-muted'>{contractor.email}</small>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>Phone</h5>
                    </Col>
                    <Col xs='auto'>
                      <small className='text-muted'>{contractor.phone}</small>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>Profession</h5>
                    </Col>
                    <Col xs='auto'>
                      <small className='text-muted'>{contractor.profession.name}</small>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>Recruiter</h5>
                    </Col>
                    <Col xs='auto'>
                      <small className='text-muted'>
                        {`${contractor.recruiter.firstName} ${contractor.recruiter.lastName}`}
                      </small>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>Location</h5>
                    </Col>
                    <Col xs='auto'>
                      <small className='text-muted'>
                        {`${Countries.getCountryName(contractor.countryCode)}, ${contractor.city}`}
                      </small>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>Available from</h5>
                    </Col>
                    <Col xs='auto'>
                      <small className='text-muted'>{contractor.availableFrom}</small>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>LinkedIn</h5>
                    </Col>
                    <Col xs='auto'>
                      <a className='small' href={contractor.linkedInUrl}>
                        {contractor.linkedInUrl}
                      </a>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>Experience since</h5>
                    </Col>
                    <Col xs='auto'>
                      <small className='text-muted'>{contractor.experienceSince}</small>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>Created</h5>
                    </Col>
                    <Col xs='auto'>
                      <small className='text-muted'>{contractor.created}</small>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className='card-header-title'>Flags</h4>
            </Card.Header>
            <Card.Body>
              <ListGroup className='list-group-flush my-n3'>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>Available</h5>
                    </Col>
                    <Col xs='auto'>
                      <Form.Check checked={contractor.isAvailable} readOnly />
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>Has Contract</h5>
                    </Col>
                    <Col xs='auto'>
                      <Form.Check checked={contractor.hasContract} readOnly />
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>Public</h5>
                    </Col>
                    <Col xs='auto'>
                      <Form.Check checked={contractor.isPublic} readOnly />
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>On Site</h5>
                    </Col>
                    <Col xs='auto'>
                      <Form.Check checked={contractor.isOnSite} readOnly />
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className='align-items-center'>
                    <Col>
                      <h5 className='mb-0'>Remote</h5>
                    </Col>
                    <Col xs='auto'>
                      <Form.Check checked={contractor.isRemote} readOnly />
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className='card-header-title'>Tags</h4>
            </Card.Header>
            <Card.Body>
              <div className='tags d-flex flex-wrap'>
                {contractor.tags.map((tag) => (
                  <Badge className='me-1 mt-1 mb-1' key={tag.id}>
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className='card-header-title'>Technologies</h4>
            </Card.Header>
            <Card.Body>
              <div className='tags d-flex flex-wrap'>
                {contractor.technologies.map((technology) => (
                  <Badge className='me-1 mb-1' key={technology.id}>
                    {technology.name}
                  </Badge>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contractor;
