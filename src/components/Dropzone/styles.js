import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #FCFBFF;
  margin-top: 35px;
  border: 2px dashed #ACC2DC;
  border-radius: 15px;
  padding: 42px 84px;

  display: grid;
  place-items: center;

  transition: all 0.2s;
  cursor: pointer;

  p {
    color: #C5C7C8;
    font-weight: 500;
    font-size: 16px;
    margin-top: 10px;
  }

  &:hover {
    background: ${() => darken(0.01, '#FCFBFF')};
  }
`;
