import { FC } from 'react';
import { Form } from 'react-bootstrap';
import { useLoginForm } from '../hooks';
import { Controller } from 'react-hook-form';

const LoginForm: FC = () => {
  const { login, control, handleSubmit, isLoading } = useLoginForm();

  return (
    <form onSubmit={handleSubmit(login)}>
      <Form.Group className='mb-3'>
        <Form.Label>Email Address</Form.Label>
        <Controller
          control={control}
          name='username'
          render={({ field }) => (
            <Form.Control
              onInput={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              autoComplete='email'
              type='email'
              placeholder='name@address.com'
            />
          )}
        />
      </Form.Group>
      <Form.Group className='mb-4'>
        <Form.Label>Password</Form.Label>
        <Controller
          control={control}
          name='password'
          render={({ field }) => (
            <Form.Control
              onInput={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              autoComplete='password'
              type='password'
              placeholder='Enter your password'
            />
          )}
        />
      </Form.Group>
      <button disabled={isLoading} type='submit' className='button button-primary'>
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
