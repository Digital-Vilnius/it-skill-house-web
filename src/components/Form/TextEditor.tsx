import React, { FC } from 'react';
import ReactQuill from 'react-quill';
import { TextEditorProps } from './types';
import classNames from 'classnames';

const modules = {
  toolbar: [
    ['bold', 'italic'],
    ['link', 'blockquote', 'code'],
    [
      {
        list: 'ordered',
      },
      {
        list: 'bullet',
      },
    ],
  ],
};

const TextEditor: FC<TextEditorProps> = (props) => {
  const { value, onBlur, readOnly, disabled, name, className, onChange, isInvalid } = props;

  return (
    <ReactQuill
      onChange={onChange}
      onBlur={onBlur}
      readOnly={readOnly || disabled}
      className={classNames(className, { 'is-invalid': isInvalid })}
      id={name}
      value={value ?? ''}
      modules={modules}
      theme='snow'
    />
  );
};

export default TextEditor;
