import { FC } from 'react';
import { useContractor } from '../hooks';
import ContractorEditForm from './ContractorEditForm';

interface Props {
  id: number;
  onClose: () => void;
}

const ContractorEditFormModal: FC<Props> = (props) => {
  const { id, onClose } = props;
  const { isLoading, contractor } = useContractor(id);

  if (isLoading || !contractor) return <span>Loading...</span>;

  return <ContractorEditForm onClose={onClose} visible contractor={contractor} />;
};

export default ContractorEditFormModal;
