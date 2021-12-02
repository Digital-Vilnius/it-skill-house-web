import { useMutation } from 'react-query';
import { Technology as ApiTechnology } from 'api/clients/technologies/types';
import { TechnologiesClient } from 'api/clients';
import { TechnologyFormData } from '../types';

const useTechnologyAdd = () => {
  const { mutateAsync } = useMutation<ApiTechnology, unknown, TechnologyFormData>((data) => {
    return TechnologiesClient.addTechnology(data);
  });

  const addTechnology = (data: TechnologyFormData) => {
    return mutateAsync(data);
  };

  return { addTechnology };
};

export default useTechnologyAdd;
