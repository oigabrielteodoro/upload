import { useEffect, useState, useCallback } from 'react';
import { FiCheck } from 'react-icons/fi';
import { AiOutlineExclamation } from 'react-icons/ai';

import filesize from 'filesize';

import io from './services/socket';
import GlobalStyle from './styles/global';

import Dropzone from './components/Dropzone';

import { 
  Container, 
  UploadWrapper, 
  UploadFileList, 
  UploadFileListItem, 
  UploadFileWrapper, 
  IconFile, 
  ProgressBar, 
  TitleWrapper, 
  PercentageText,
  UploadCircleStatus,
} from './components/Main/styles';

export default function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    if (!io.connected) {
      io.connect();
    }
 
    return () => {
      io.disconnect();
    }
  }, []);

  const handleUpload = useCallback(files => {
    const uploadFiles = files.map(file => ({
      name: file.name,
      size: filesize(file.size),
      progress: 0,
      success: false,
      error: false,
      pending: false,
      authorized: false,
      preview: URL.createObjectURL(file),
    }));

    setUploadedFiles(prevState => [...prevState, ...uploadFiles]);
  }, [])
 
  return (
    <>
      <GlobalStyle />
      <Container>
        <UploadWrapper>
          <h1>Upload your files</h1>
          <span>File should be Png, Jpg, Svg</span>
 
          <Dropzone onUpload={handleUpload} />
 
          {uploadedFiles.length > 0 && (
            <UploadFileWrapper>
              <strong>Arquivos</strong>

              <UploadFileList> 
                {uploadedFiles.map(uploadedFile => (
                  <UploadFileListItem key={uploadedFile.preview}>
                    <IconFile><span>PNG</span></IconFile>

                    <section>
                      <TitleWrapper>
                        <span>{uploadedFile.name}</span>

                        <PercentageText>30%</PercentageText>
                      </TitleWrapper>
                      <ProgressBar percentage={30} />
                    </section>

                    <UploadCircleStatus success={uploadedFile.success} authorized={uploadedFile.authorized}>
                      {uploadedFile.success && (
                        <FiCheck size={15} color="#fff" />
                      )}

                      {!uploadedFile.authorized && (
                        <AiOutlineExclamation size={15} />
                      )}
                    </UploadCircleStatus>
                  </UploadFileListItem>
                ))} 
              </UploadFileList>
            </UploadFileWrapper>
          )}

          <button type="button">
            Authorize
          </button>
        </UploadWrapper>
      </Container>
    </>
  );
}
