import React, { FC } from 'react';
import ReactQuill from 'react-quill';
import { TextEditorProps } from './types';

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
  const { value, onBlur, readOnly, disabled, name, className, onChange } = props;

  return (
    <ReactQuill
      onChange={onChange}
      onBlur={onBlur}
      readOnly={readOnly || disabled}
      className={className}
      id={name}
      value={value ?? ''}
      modules={modules}
      theme='snow'
    />
  );
};

export default TextEditor;
