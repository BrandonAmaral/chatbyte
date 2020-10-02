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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 16px 0px #171717;
  border-radius: 12px;

  max-width: 550px;

  form {
    margin: 4em 3em 3em 3em;
    color: #e3e3e3;

    h1 {
      text-align: center;
      margin-bottom: 1em;
    }

    a {
      text-decoration: none;
      font-size: 1.2em;
      color: #772e87;

      &:hover {
        text-decoration: underline;
      }
    }

    .inputs {
      margin-bottom: 0.6em;
    }
  }
`;
