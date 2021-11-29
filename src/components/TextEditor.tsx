import React, { FC } from 'react';
import ReactQuill from 'react-quill';

const TextEditor: FC = () => {
  const modules = {
    toolbar: [
      ['bold', 'italic'],
      ['link', 'blockquote', 'code', 'image'],
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

  return <ReactQuill modules={modules} theme='snow' />;
};

export default TextEditor;
