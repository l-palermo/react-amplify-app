import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import './styles.css';
import SplashScreen from './components/splash-screen';
import HomePage from './pages/home-page';
import SearchResult from './pages/search-result-page';
import Background from './components/background';
import Navbar from './components/navbar';
import logOut from './helpers/user-log/log-out';
import { UserContextProvider } from './helpers/user-context/user-context';

const App = () => {
    return (
        <UserContextProvider>
            <BrowserRouter>
                <SplashScreen />
                <Background>
                    <Navbar logOut={logOut} />
                    <Switch>
                        <Route exact path="/" render={() => <HomePage />} />
                        <Route exac path="/search" render={() => <SearchResult />} />
                    </Switch>
                </Background>
            </BrowserRouter>
        </UserContextProvider>
    );
};

export default App;
