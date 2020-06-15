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

// import { Auth } from 'aws-amplify';

// check which of these values stays
// Auth.currentCredentials().then((data) => console.log(data));

// Auth.currentUserCredentials().then((data) => console.log(data));

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
