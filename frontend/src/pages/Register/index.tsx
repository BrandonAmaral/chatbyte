import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Formik, ErrorMessage } from 'formik';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

interface RegisterFormData {
  email: string;
  username: string;
  password: string;
}

const Register: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(async (data: RegisterFormData) => {
    await api.post('/users/create-user', data);

    history.push('/login');
  }, [history]);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    password_confirm: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match')
  });

  return (
    <Container>
      <Content>
        <Formik initialValues={{
          email: '',
          username: '',
          password: '',
          password_confirm: ''
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnMount>
          <Form>
            <h1>Create an account</h1>

            <label>Email</label>
            <Input className="inputs" name="email" autoComplete="off" />
            <ErrorMessage name="email" />

            <label>Username</label>
            <Input className="inputs" name="username" autoComplete="off" />
            <ErrorMessage name="username" />

            <label>Password</label>
            <Input className="inputs" name="password" type="password" />
            <ErrorMessage name="password" />

            <label>Confirm Password</label>
            <Input className="inputs" name="password_confirm" type="password"/>
            <ErrorMessage name="password_confirm" />

            <Button type="submit">Register</Button>

            <Link to="/login">Already have an account?</Link>
          </Form>
        </Formik>
      </Content>
    </Container>
  );
};

export default Register;
