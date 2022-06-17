import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import TextEditor from './TextEditor';
import { TextEditorProps } from './types';
import classNames from 'classnames';

interface Props extends TextEditorProps {
  label?: string;
  error?: string;
  required?: boolean;
}

const FormTextEditor: FC<Props> = (props) => {
  const { label, error, required, ...rest } = props;

  return (
    <Form.Group className='form-group'>
      {!!label && <Form.Label className={classNames({ required })}>{label}</Form.Label>}
      <div className='flex-grow-1'>
        <TextEditor isInvalid={!!error} {...rest} />
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </div>
    </Form.Group>
  );
};

export default FormTextEditor;
