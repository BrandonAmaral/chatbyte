import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

const Register: React.FC = () => {
  return (
    <Container>
      <Content>
        <form>
          <h1>Create an account</h1>

          <span>Email</span>
          <input/>

          <span>Username</span>
          <input/>

          <span>Password</span>
          <input type="password"/>

          <span>Confirm Password</span>
          <input type="password"/>

          <button type="submit">Register</button>

          <Link to="/login">Already have an account?</Link>
        </form>
      </Content>
    </Container>
  );
};

export default Register;
