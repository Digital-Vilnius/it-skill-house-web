import React, { FC } from 'react';
import { Button, Col, ListGroup, Modal, Row } from 'react-bootstrap';
import { Contractor } from '../types';

interface Props {
  onClose: () => void;
  onSubmit: () => void;
  contractor: Contractor | null;
}

const ContractorDeleteConfirmation: FC<Props> = (props) => {
  const { onClose, onSubmit, contractor } = props;

  return (
    <>
      <Modal.Body>
        <Row>
          <Col>
            <ListGroup className='list-group-focus'>
              <ListGroup.Item>
                <h4 className='text-body text-focus mb-1'>{`${contractor?.firstName} ${contractor?.lastName}`}</h4>
                <p className='mb-0'>{contractor?.email}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} variant='secondary'>
          Close
        </Button>
        <Button onClick={onSubmit} variant='danger' type='submit'>
          Delete
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ContractorDeleteConfirmation;
