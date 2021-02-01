import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.main`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UploadWrapper = styled.div`
  background: #fff;
  padding: 24px;

  border-radius: 25px;

  display: grid;
  place-items: center;

  h1 {
    color: #333;
    font-size: 28px;
    font-weight: 500;

    margin-top: 25px;
  }

  span {
    color: #C7C8C9;
    font-size: 14px;
    font-weight: 500;
    margin-top: 5px;
  }

  button {
    margin-right: auto;
    margin-top: 15px;
    background: #015CE7;
    border-radius: 5px;
    padding: 12px 24px;
    border: 0;
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;

    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
      transform: translateX(10px);
    }
  }
`; 

export const UploadFileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  margin-top: 24px;

  strong {
    color: #C7C8C9;
  }
`;

export const UploadFileList = styled.ul`
  margin-top: 16px;
  padding: 0 10px;

  width: 100%;
`;

export const UploadFileListItem = styled.li`
  display: flex;
  align-items: center;

  width: 100%;

  & + li {
    margin-top: 15px;
  }

  section {
    margin-left: 10px;
    flex: 1;

    span {
      color: #838283;
      font-size: 16px;
    }
  }
`;

export const IconFile = styled.div`
  position: relative;
  background: #468CFA;

  height: 50px;
  width: 40px;

  border-radius: 4px 17px 4px 4px;

  display: grid;
  place-items: center;

  padding: 5px;
  font-size: 12px;

  span {
    margin-top: 8px;
    color: #fff;
    font-weight: bold;

    text-transform: uppercase;
  }

  &::before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 10px 0 0 10px;
    border-color: transparent transparent transparent #fff;
    top: 3px;
    right: 3px;
  }
`;

export const ProgressBar = styled.div`
  position: relative;

  background: #F2F7FF;
  height: 4px;

  border-radius: 4px;
  margin-top: 5px;

  transition: all 0.2s;

  &::before { 
    content: '';
    position: absolute;
    transition: all 0.2s;
    height: 4px;
    width: ${({ percentage }) => `${percentage}%`};
    background: ${({ percentage }) => `${percentage >= 100 ? '#3DDA30' : '#468BF9'}`};
    top: 0;
    bottom: 0;
    border-radius: 4px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UploadCircleStatus = styled.div`
  background: ${() => lighten(0.2, '#468BF9')};
  height: 25px;
  width: 25px;

  border-radius: 50%;
  margin-left: 10px;
  
  display: grid;
  place-items: center;


  ${({ authorized }) => authorized && css`
    background: #FEA12A;
    color: #fff;
  `}

  ${({ success }) => success && css`
    background: #3DDA30;
    color: #fff;
  `}

  ${({ authorized }) => !authorized && css`
    color: #468BF9;
  `}
`;

export const PercentageText = styled.p`
  color: #BBC3D3;
  font-size: 14px;
`;