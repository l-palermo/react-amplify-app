import React from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

import './styles.css';
import SplashScreen from './components/splash-screen';
import HomePage from './pages/home-page';
import Background from './components/background';
import Navbar from './components/navbar';

const App = () => (
  <React.Fragment>
    <SplashScreen duration={3000} />
    <AmplifyAuthenticator>
      <Background>
        <Navbar />
        <HomePage />
      </Background>
    </AmplifyAuthenticator>
  </React.Fragment>
);

export default App;
