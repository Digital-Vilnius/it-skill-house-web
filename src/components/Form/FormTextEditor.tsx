import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import TextEditor from './TextEditor';
import { TextEditorProps } from './types';

interface Props extends TextEditorProps {
  label: string;
  error?: string;
}

const FormTextEditor: FC<Props> = (props) => {
  const { label, error, ...rest } = props;

  return (
    <div className='form-group d-flex'>
      <Form.Label>{label}</Form.Label>
      <div className='flex-grow-1'>
        <TextEditor isInvalid={!!error} {...rest} />
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </div>
    </div>
  );
};

export default FormTextEditor;
