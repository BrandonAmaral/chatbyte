import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  button {
    width: 100%;
    padding: 14px;
    border-radius: 3px;

    background: #57306b;
    color: #e3e3e3;
    font-size: 1.2em;

    margin-top: 2em;
    margin-bottom: 0.2em;

    transition: background-color 0.3s;

    &:hover {
      background: ${shade(0.2, '#57306b')};
    }
  }
`;
