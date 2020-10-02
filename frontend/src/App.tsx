import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/auth';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <GlobalStyle />
    </BrowserRouter>
  </>
);

export default App;
