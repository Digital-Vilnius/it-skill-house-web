import { FC } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useLoginForm } from '../hooks';
import { Controller } from 'react-hook-form';

const LoginForm: FC = () => {
  const { login, control, handleSubmit } = useLoginForm();

  return (
    <>
      <h1 className='display-4 text-center mb-3'>Sign in</h1>
      <p className='text-muted text-center mb-5'>Free access to our dashboard.</p>
      <form onSubmit={handleSubmit(login)}>
        <div className='form-group mb-3'>
          <Form.Label>Email Address</Form.Label>
          <Controller
            control={control}
            name='email'
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
        </div>
        <div className='form-group mb-4'>
          <Form.Label>Password</Form.Label>
          <InputGroup className='input-group-merge'>
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
            <InputGroup.Text>
              <span>Icon eye</span>
            </InputGroup.Text>
          </InputGroup>
        </div>
        <Button type='submit' size='lg' className='w-100 mb-3'>
          Sign in
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
