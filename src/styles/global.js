import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0; 
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
 
  body {
    background: #f0f2f5;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  } 

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Roboto Slab', sans-serif;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    width: 10px;

    @media screen and (max-width: 700px) {
      width: 5px;
    }
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
    margin: 10px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: ${() => shade(0.2, '#fff')};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${() => shade(0.3, '#fff')};
  }

  input:-webkit-autofill {
    box-shadow:0 0 0 50px white inset;
    -webkit-text-fill-color: #333;
  }

  input:-webkit-autofill:focus {
    box-shadow: 0 0 0 50px white inset;
    -webkit-text-fill-color: #333;
  }
`;