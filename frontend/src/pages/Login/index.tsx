import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Formik, ErrorMessage } from 'formik';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { login } = useAuth();

  const handleSubmit = useCallback(async (data: LoginFormData) => {
    login({
      email: data.email,
      password: data.password
    });
  }, [login]);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email'),
    password: Yup.string().required('Password is required')
  });

  return (
    <Container>
      <Content>
        <Formik initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnMount>
          <Form>
            <h1>Welcome back!</h1>

            <label>Email</label>
            <Input id="email" name="email" autoComplete="off" />
            <ErrorMessage name="email" />

            <label>Password</label>
            <Input id="password" name="password" type="password" />
            <ErrorMessage name="password" />

            <span id="forgot"><Link to="#">Forgot your passoword?</Link></span>

            <Button type="submit">Enter</Button>

            <span>Need an account? <Link to="/register">Register</Link></span>
          </Form>
        </Formik>
      </Content>
    </Container>
  );
};

export default Login;
