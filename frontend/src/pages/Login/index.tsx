import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <form>
          <h1>Welcome back!</h1>

          <span>Email</span>
          <Input name="email" autoComplete="off" />

          <span>Password</span>
          <Input name="password" type="password" />

          <span><Link to="#">Forgot your passoword?</Link></span>

          <Button type="submit">Enter</Button>

          <span>Need an account? <Link to="/register">Register</Link></span>
        </form>
      </Content>
    </Container>
  );
};

export default Login;
