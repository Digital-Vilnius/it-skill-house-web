import { useContext } from 'react';
import { ModalContext } from '../context';

const useModal = () => {
  const { showModal, hideModal } = useContext(ModalContext);

  return { showModal, hideModal };
};

export default useModal;
