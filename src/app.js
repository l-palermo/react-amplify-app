import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles.css';
import SplashScreen from './components/splash-screen';
import HomePage from './pages/home-page';
import SearchResult from './pages/search-result-page';
import CollectionsPage from './pages/collections-page/collections-page';
import CollectionPage from './pages/collection-page/collection-page';
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
                    <Switch>
                        <Route exact path="/" render={() => <HomePage />} />
                        <Route path="/search" render={() => <SearchResult />} />
                        <Route exact path="/collections" render={() => <CollectionsPage />} />
                        <Route
                            exact
                            path="/collections/:collectionId"
                            render={({ match }) => (
                                <CollectionPage collectionId={match.params.collectionId} />
                            )}
                        />
                    </Switch>
                </Background>
            </BrowserRouter>
        </UserContextProvider>
    );
};

export default App;
