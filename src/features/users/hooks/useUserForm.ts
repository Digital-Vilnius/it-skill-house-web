import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { User, UserFormData } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { User as ApiUser } from 'api/clients/users/types';
import { UsersClient } from 'api/clients';
import { useNavigate } from 'react-router-dom';

const initialFormData: UserFormData = {
  email: '',
  firstName: '',
  lastName: '',
};

const getSchema = () => {
  return yup.object().default({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
  });
};

interface Props {
  user?: User;
}

const useUserForm = (props: Props) => {
  const { user } = props;
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<UserFormData>({
    defaultValues: user ?? initialFormData,
    resolver: yupResolver(getSchema()),
  });

  const { mutateAsync } = useMutation<ApiUser, unknown, UserFormData>((data) => {
    if (user) return UsersClient.editUser(user.id, data);
    return UsersClient.addUser(data);
  });

  const save = (data: UserFormData) => {
    return mutateAsync(data).then(() => navigate('/admin/users'));
  };

  return { control, handleSubmit, save };
};

export default useUserForm;
