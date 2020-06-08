import React from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import './styles.css';
import SplashScreen from './components/splash-screen';
import HomePage from './pages/home-page';
import SearchResult from './pages/search-result-page';
import Background from './components/background';
import Navbar from './components/navbar';
import logOut from './helpers/crud/log-out';
import { UserContextProvider } from './helpers/user-context/user-context';

const App = () => (
  <BrowserRouter>
    <SplashScreen duration={3000} />
    <AmplifyAuthenticator>
      <UserContextProvider>
        <Background>
          <Navbar logOut={logOut} />
          <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route exac path="/search" render={() => <SearchResult />} />
          </Switch>
        </Background>
      </UserContextProvider>
    </AmplifyAuthenticator>
  </BrowserRouter>
);

export default App;
