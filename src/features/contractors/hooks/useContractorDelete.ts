import { useMutation } from 'react-query';
import { ContractorsClient } from 'api/clients';

const useContractorDelete = () => {
  const { mutateAsync } = useMutation(async (id: number) => {
    await ContractorsClient.deleteContractor(id);
  });

  const deleteContractor = (id: number) => {
    return mutateAsync(id);
  };

  return { deleteContractor };
};

export default useContractorDelete;
