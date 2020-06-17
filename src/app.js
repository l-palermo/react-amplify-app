import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './styles.css';
import SplashScreen from './components/splash-screen';
import HomePage from './pages/home-page';
import SearchResult from './pages/search-result-page';
import Background from './components/background';
import Navbar from './components/navbar';
import logOut from './helpers/user-log/log-out';
import { UserContextProvider } from './helpers/user-context/user-context';

const App = () => {
    const isLoggedIn =
        sessionStorage.isLoggedIn && JSON.parse(sessionStorage.isLoggedIn)
            ? JSON.parse(sessionStorage.isLoggedIn)
            : false;

    return (
        <UserContextProvider>
            <BrowserRouter>
                {!isLoggedIn ? <SplashScreen /> : null}
                <Background>
                    <Navbar logOut={logOut} />

                    <Route exact path="/" render={() => <HomePage />} />
                    <Route path="/search" render={() => <SearchResult />} />
                </Background>
            </BrowserRouter>
        </UserContextProvider>
    );
};

export default App;
