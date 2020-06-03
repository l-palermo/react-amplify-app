import React from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

import './styles.css';
import SplashScreen from './components/splash-screen';
import HomePage from './pages/home-page';
import Background from './components/background';
import Navbar from './components/navbar';
import { UserContextProvider } from './helpers/user-context/user-context';

const App = () => (
  <React.Fragment>
    <SplashScreen duration={3000} />
    <AmplifyAuthenticator>
      <UserContextProvider>
        <Background>
          <Navbar />
          <HomePage />
        </Background>
      </UserContextProvider>
    </AmplifyAuthenticator>
  </React.Fragment>
);

export default App;
