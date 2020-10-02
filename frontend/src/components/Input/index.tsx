import React, { InputHTMLAttributes } from 'react';
import { Field } from 'formik';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = (props) => (
  <Container>
    <Field {...props} />
  </Container>
);

export default Input;
