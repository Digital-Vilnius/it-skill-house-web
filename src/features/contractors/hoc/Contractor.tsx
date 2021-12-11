import { FC } from 'react';
import { useContractor } from '../hooks';
import { Col, Row } from 'react-bootstrap';

interface Props {
  id: number;
}

const Contractor: FC<Props> = (props) => {
  const { id } = props;
  const { isLoading, contractor } = useContractor(id);

  if (isLoading || !contractor) return <span>Loading...</span>;

  return (
    <>
      <Row>
        <Col md={4} xs={12}>
          <h4 className='mg-b-2'>{`${contractor.firstName} ${contractor.lastName}`}</h4>
          <span>{contractor.email}</span>
        </Col>
      </Row>
    </>
  );
};

export default Contractor;
