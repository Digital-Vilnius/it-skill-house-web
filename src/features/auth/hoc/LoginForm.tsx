import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import { useLoginForm } from '../hooks';
import { Controller } from 'react-hook-form';
import { FormInput } from '../../../components';

const LoginForm: FC = () => {
  const { login, control, handleSubmit, isLoading } = useLoginForm();

  return (
    <form onSubmit={handleSubmit(login)}>
      <Controller
        control={control}
        name='username'
        render={({ field: { ref, ...rest }, fieldState: { error } }) => (
          <FormInput
            className='mb-3'
            required
            label='Email Address'
            type='email'
            placeholder='name@address.com'
            {...rest}
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name='password'
        render={({ field: { ref, ...rest }, fieldState: { error } }) => (
          <FormInput
            className='mb-4'
            label='Password'
            required
            type='password'
            placeholder='Enter your password'
            {...rest}
            error={error?.message}
          />
        )}
      />
      <button disabled={isLoading} type='submit' className='button button-primary'>
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
