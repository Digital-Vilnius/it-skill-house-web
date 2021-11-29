import { LoginFormData } from '../types';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginAction } from '../actions';
import { useAppDispatch } from 'core/store';

const initialFormData: LoginFormData = {
  email: '',
  password: '',
};

const getSchema = () => {
  return yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });
};

const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema()),
  });

  const login = (data: LoginFormData) => {
    return dispatch(loginAction(data))
      .unwrap()
      .then(() => navigate('/admin/contractors'));
  };

  return { control, handleSubmit, login };
};

export default useLogin;
