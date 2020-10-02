import styled from 'styled-components';

export const Container = styled.div`
  input {
    width: 450px;
    padding: 12px;
    border: 1px solid #171717;
    border-radius: 4px;

    background: var(--tertiary);
    color: #e3e3e3;
    font-size: 1.2em;

    margin-top: 0.2em;

    transition: border-color 0.3s;

    &:hover {
      border-color: black;
    }

    &:focus {
      border-color: #57306b;
    }
  }
`;
