import { FC } from 'react';
import ReactDropzone from 'react-dropzone';
import classNames from 'classnames';

interface Props {
  onDrop: (files: File[]) => void;
  multiple: boolean;
  className?: string;
}

const Dropzone: FC<Props> = (props) => {
  const { multiple, className, onDrop } = props;

  return (
    <ReactDropzone onDrop={onDrop} multiple={multiple}>
      {({ getRootProps, getInputProps }) => (
        <div
          className={classNames('dropzone', multiple && 'dropzone-multiple', className)}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <div className='dz-message'>Drop files here to upload</div>
        </div>
      )}
    </ReactDropzone>
  );
};

export default Dropzone;
