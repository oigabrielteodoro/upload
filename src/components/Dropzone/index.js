import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { Container } from './styles';
 
export default function Dropzone({ onUpload }) {
  const onDrop = useCallback(acceptedFiles => {
    onUpload(acceptedFiles);
  }, [onUpload]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />

      <img src="/assets/icons/folder.svg" alt="Folder Icon" width={55} height={55} />
      <p>Drag & Drop your files here</p>
    </Container>
  );
}