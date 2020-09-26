import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <form>
          <h1>Welcome back!</h1>

          <span>Email</span>
          <input/>

          <span>Password</span>
          <input type="password"/>

          <span><Link to="#">Forgot your passoword?</Link></span>

          <button type="submit">Enter</button>

          <span>Need an account? <Link to="/register">Register</Link></span>
        </form>
      </Content>
    </Container>
  );
};

export default Login;
