import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './styles.css';
import SplashScreen from './components/splash-screen';
import HomePage from './pages/home-page';
import SearchResult from './pages/search-result-page';
import Background from './components/background';
import Navbar from './components/navbar';
import logOut from './helpers/user-log/log-out';
import { UserContextProvider } from './helpers/user-context/user-context';

const customHistory = createBrowserHistory();

const App = () => {
    const isLoggedIn =
        sessionStorage.isLoggedIn && JSON.parse(sessionStorage.isLoggedIn)
            ? JSON.parse(sessionStorage.isLoggedIn)
            : false;

    return (
        <UserContextProvider>
            <Router history={customHistory}>
                {!isLoggedIn ? <SplashScreen /> : null}
                <Background>
                    <Navbar logOut={logOut} />
                    <Switch>
                        <Route exact path="/" render={() => <HomePage />} />
                        <Route path="/search" render={() => <SearchResult />} />
                    </Switch>
                </Background>
            </Router>
        </UserContextProvider>
    );
};

export default App;
