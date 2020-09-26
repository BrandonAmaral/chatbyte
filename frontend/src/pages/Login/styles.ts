import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: var(--secondary);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  max-width: 500px;

  form {
    margin: 4em;

    h1 {
      text-align: center;
    }

    input {
      width: 100%;
      padding: 10px;
      border-radius: 3px;
      font-size: 1.2em;
    }

    button {
      width: 100%;
      padding: 12px;
      border-radius: 3px;
      font-size: 1.2em;

      margin-top: 1em;
      margin-bottom: 0.2em;
    }

    a {
      text-decoration: none;
    }

    span {
      font-size: 1.2em;
    }
  }
`;
