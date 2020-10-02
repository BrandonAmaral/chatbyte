import React, { useCallback } from 'react';

import { Container, Content } from './styles';
import { useAuth } from '../../hooks/auth';

const Main: React.FC = () => {
  const { logout } = useAuth();

  const logoutButton = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <Container>
      <Content>
        <button onClick={logoutButton}>Logout</button>
      </Content>
    </Container>
  );
};

export default Main;
