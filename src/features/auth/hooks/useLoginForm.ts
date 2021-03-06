import { LoginFormData } from '../types';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from 'core/store';
import { LoginRequest } from 'api/clients/auth/types';
import { AuthClient } from 'api/clients';
import { useMutation } from 'react-query';
import { setTokens } from '../slice';
import { useMsal } from '@azure/msal-react';
import { authRequest } from '../../../core/msal/constants';

const initialFormData: LoginFormData = {
  username: '',
  password: '',
};

const getSchema = () => {
  return yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().required(),
  });
};

const useLoginForm = () => {
  const dispatch = useAppDispatch();
  const { instance } = useMsal();

  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema()),
  });

  const mutationFn = async (request: LoginRequest) => {
    return AuthClient.login(request);
  };

  const { mutateAsync, isLoading } = useMutation(mutationFn, {
    onSuccess: (data) => {
      dispatch(setTokens(data));
    },
  });

  const login = async (request: LoginRequest) => {
    await mutateAsync(request);
    await instance.loginRedirect(authRequest);
  };

  return { control, handleSubmit, login, isLoading };
};

export default useLoginForm;
