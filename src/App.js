import { useEffect, useState, useCallback } from 'react';
import { FiCheck } from 'react-icons/fi';
import { AiOutlineCloudSync, AiOutlineExclamation } from 'react-icons/ai';

import filesize from 'filesize';

import api from './services/api';
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
  
  const [socket, setSocket] = useState();

  useEffect(() => {
    if (!io.connected) {
      const socketConnected = io.connect();

      setSocket(socketConnected);
    }
 
    return () => {
      io.disconnect();
    }
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('upload', event => {
        const { filename, percentage } = event;

        const isFile = (file, filename) => {
          console.log(file.name, filename);

          return file.name === filename;
        }

        setUploadedFiles(prevState => prevState.map(file => isFile(file, filename) ? ({
          ...file,
          progress: percentage,
          success: percentage >= 100 ? true : false,
        }) : file));
      });
    }
  }, [socket]);
 
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
      file,
    }));

    setUploadedFiles(prevState => [...prevState, ...uploadFiles]);
  }, [])

  const handleAuthorized = useCallback(() => {
    const formData = new FormData();

    uploadedFiles.forEach(uploadedFile => {
      formData.append('files', uploadedFile.file);
    });

    api.post('/', formData).then(() => {
      setUploadedFiles(prevState => prevState.map(file => ({
        ...file,
        authorized: true,
      })));
    }).catch(error => {
      alert('Ocorreu um erro');

      console.error('error', error);
    });
  }, [uploadedFiles]);
 
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
                        <span>{uploadedFile.name.slice(0, 20)}</span>

                        <PercentageText>{uploadedFile.progress}%</PercentageText>
                      </TitleWrapper>
                      <ProgressBar percentage={uploadedFile.progress} />
                    </section>

                    <UploadCircleStatus success={uploadedFile.success} authorized={uploadedFile.authorized}>
                      {uploadedFile.success && (
                        <FiCheck size={15} color="#fff" />
                      )}

                      {!uploadedFile.authorized && (
                        <AiOutlineExclamation size={15} />
                      )}
 
                      {uploadedFile.authorized && !uploadedFile.success && (
                        <AiOutlineCloudSync size={15} />
                      )}
                    </UploadCircleStatus>
                  </UploadFileListItem>
                ))} 
              </UploadFileList>
            </UploadFileWrapper>
          )}

          <button type="button" onClick={handleAuthorized}>
            Authorize
          </button>
        </UploadWrapper>
      </Container>
    </>
  );
}
