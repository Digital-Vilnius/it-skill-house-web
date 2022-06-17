import React, { FC } from 'react';
import { Modal } from 'react-bootstrap';

interface Props {
  onClose: () => void;
  onSubmit: () => void;
}

const ContractorDeleteConfirmation: FC<Props> = (props) => {
  const { onClose, onSubmit } = props;

  return (
    <>
      <Modal.Footer>
        <button onClick={onClose} className='button button-secondary'>
          Cancel
        </button>
        <button onClick={onSubmit} className='button button-danger'>
          Delete
        </button>
      </Modal.Footer>
    </>
  );
};

export default ContractorDeleteConfirmation;
