import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Register: React.FC = () => {
  return (
    <Container>
      <Content>
        <form>
          <h1>Create an account</h1>

          <span>Email</span>
          <Input name="email" autoComplete="off" />

          <span>Username</span>
          <Input name="username" autoComplete="off" />

          <span>Password</span>
          <Input name="password" type="password" />

          <span>Confirm Password</span>
          <Input name="password-confirm" type="password"/>

          <Button type="submit">Register</Button>

          <Link to="/login">Already have an account?</Link>
        </form>
      </Content>
    </Container>
  );
};

export default Register;
