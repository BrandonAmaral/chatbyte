import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --secondary: #2f3136;
    --tertiary: #292b2f;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  *, button, input {
    font-family: 'Roboto', sans-serif;

    border: 0;
    outline: 0;
  }

  button {
    cursor: pointer;
  }
`;
