import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { useDropzone } from 'react-dropzone';

import { UPLOAD_FILE } from '../apollo/mutations/upload';

import styles from './Dropzone.module.css';

const handleClick = (evt) => {
  evt.preventDefault();
};

const Dropzone = () => {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const onDrop = useCallback(
    (files) => {
      uploadFile({ variables: { files }, onCompleted: () => {} });
    },
    [uploadFile],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={styles.dropzone}>
      <div
        className={styles.dropzone__zone}
        {...getRootProps()}
        onClick={handleClick}
      >
        <input className={styles.dropzone__input} {...getInputProps()} />
        {isDragActive ? (
          <p className={styles.dropzone__zone__message}>Drop</p>
        ) : (
          <p className={styles.dropzone__zone__message}>Drag 'n' drop</p>
        )}
      </div>
    </div>
  );
};

export default Dropzone;
