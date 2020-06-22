import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles.css';
import SplashScreen from './components/splash-screen';
import HomePage from './pages/home-page';
import SearchResult from './pages/search-result-page';
import CollectionsPage from './pages/collections/collections-page';
import Background from './components/background';
import Navbar from './components/navbar';
import logOut from './helpers/user-log/log-out';
import { UserContextProvider } from './helpers/user-context/user-context';

const App = () => {
    const wasPlayed =
        sessionStorage.wasPlayed && JSON.parse(sessionStorage.wasPlayed)
            ? JSON.parse(sessionStorage.wasPlayed)
            : false;

    return (
        <UserContextProvider>
            <BrowserRouter>
                {!wasPlayed ? <SplashScreen /> : null}
                <Background>
                    <Navbar logOut={logOut} />
                    <Route exact path="/" render={() => <HomePage />} />
                    <Route path="/search" render={() => <SearchResult />} />
                    <Route path="/collections" render={() => <CollectionsPage />} />
                </Background>
            </BrowserRouter>
        </UserContextProvider>
    );
};

export default App;
